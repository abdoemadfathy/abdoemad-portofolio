import { chipLabels, topics, type Topic } from "@/data/assistant/topics";
import type { Lang } from "@/types/portfolio";

/* -------------------------------------------------------------------------- */
/*  Text normalisation                                                        */
/* -------------------------------------------------------------------------- */

/** Lower-cases, folds Arabic spelling variants, drops diacritics and punctuation. */
export const normalize = (v: string): string =>
  v
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\p{L}\p{N}+./\s-]/gu, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^[./-]+|[./-]+$/g, ""))
    .filter(Boolean)
    .join(" ");

const ARABIC = /[؀-ۿ]/;
const LATIN = /[a-z]/i;

/** Common Arabizi (Arabic written with Latin letters) markers. */
const ARABIZI = [
  "ezayak", "izayak", "azayak", "ezayk", "ezay", "ahlan", "shokran", "shukran", "3ayez", "3ayz", "3awez", "enta meen",
  "inta meen", "momken", "feen", "fein", "kwayes", "kwayyes", "tamam", "mashro3", "mashari3", "khebra", "khibra", "salam",
  "marhaba", "yasta", "ya basha", "3amel eh", "eh el akhbar", "ezzay",
];

/** Words that only refer to the person, so they say nothing about the topic. */
const NAME_TOKENS = new Set([
  "abdulrahman", "abdelrahman", "abdurrahman", "abdo", "abdoemad", "emad", "his", "him", "he", "عبدالرحمن", "عبد", "الرحمن", "عبده", "عماد",
]);

const MORE_WORDS = new Set([
  "more", "tell", "me", "and", "what", "else", "anything", "please", "continue", "go", "on", "next", "also", "so", "then",
  "كمان", "ايه", "وايه", "زياده", "المزيد", "كمل", "وبعدين", "طيب", "يعني", "و", "اكتر", "اكثر", "وماذا", "ماذا", "غير", "ده", "اللي", "بعده",
]);
const YES_WORDS = new Set([
  "yes", "yeah", "yep", "sure", "ok", "okay", "alright", "please", "do", "go", "ahead", "aywa", "ايوه", "ايوا", "اه", "اجل", "نعم", "اوكي", "اوكيه", "طيب", "تمام", "ماشي", "موافق",
]);
const NO_WORDS = new Set(["no", "nope", "nah", "not", "now", "later", "la", "لا", "لأ", "مش", "الان", "لاحقا"]);

/* -------------------------------------------------------------------------- */
/*  Fuzzy matching                                                            */
/* -------------------------------------------------------------------------- */

/** Edit distance where swapping two neighbours counts as one edit. */
const distance = (a: string, b: string): number => {
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[a.length][b.length];
};

interface PreparedTopic {
  topic: Topic;
  keys: { raw: string; words: number; arabic: boolean }[];
}

const prepared: PreparedTopic[] = topics.map((topic) => ({
  topic,
  keys: Array.from(new Set(topic.keys.map(normalize)))
    .filter(Boolean)
    .map((raw) => ({ raw, words: raw.split(" ").length, arabic: ARABIC.test(raw) })),
}));

const scoreTopic = (p: PreparedTopic, text: string, tokens: string[]): number => {
  const padded = ` ${text} `;
  let score = 0;
  for (const k of p.keys) {
    if (k.words > 1) {
      if (padded.includes(` ${k.raw} `) || (k.arabic && text.includes(k.raw))) score += 2 + k.words * 1.5;
      continue;
    }
    for (const t of tokens) {
      if (t === k.raw) {
        score += 2.5;
        break;
      }
      if (k.arabic) {
        if (k.raw.length >= 3 && t.includes(k.raw)) {
          score += 2;
          break;
        }
      } else if (k.raw.length >= 5 && t.startsWith(k.raw)) {
        score += 2;
        break;
      } else if (k.raw.length >= 6 && t.length >= 6 && Math.abs(t.length - k.raw.length) <= 1 && distance(t, k.raw) <= 1) {
        score += 2;
        break;
      }
    }
  }
  return score;
};

/* -------------------------------------------------------------------------- */
/*  Conversation                                                              */
/* -------------------------------------------------------------------------- */

export interface Context {
  last?: string;
  shown: string[];
  variant: Record<string, number>;
  /** Language of the conversation so far. */
  lang?: Lang;
}

export interface Reply {
  text: string;
  lang: Lang;
  topic?: string;
  chips: { id: string; label: string }[];
  contact: boolean;
}

export const newContext = (): Context => ({ shown: [], variant: {} });

const detectLanguage = (raw: string, fallback: Lang): Lang => {
  if (ARABIC.test(raw)) return "ar";
  if (LATIN.test(raw)) {
    const n = normalize(raw);
    return ARABIZI.some((m) => ` ${n} `.includes(` ${m} `)) ? "ar" : "en";
  }
  return fallback;
};

const pick = (topic: Topic, lang: Lang, ctx: Context): string => {
  const list = topic[lang];
  const prev = ctx.variant[topic.id] ?? -1;
  const next = list.length > 1 ? (prev + 1) % list.length : 0;
  ctx.variant[topic.id] = next;
  return list[next];
};

const chipsFor = (ids: string[], lang: Lang, ctx: Context) => {
  const unseen = ids.filter((id) => !ctx.shown.includes(id));
  const ordered = [...unseen, ...ids.filter((id) => ctx.shown.includes(id))];
  return ordered
    .filter((id) => chipLabels[id])
    .slice(0, 3)
    .map((id) => ({ id, label: chipLabels[id][lang] }));
};

const FALLBACK: Record<Lang, string[]> = {
  en: [
    "I'm not sure I have a good answer to that one. I can tell you about Abdulrahman's skills, projects, and experience, or how to reach him. For something more specific, a message to him is the best route.",
    "That's outside what I know about Abdulrahman's work, so I'd rather not guess. Try asking about his projects, tools, or experience, or send him a message and he'll reply himself.",
  ],
  ar: [
    "لست متأكدًا أن لدي إجابة جيدة عن هذا. يمكنني أن أحدثك عن مهارات عبدالرحمن ومشاريعه وخبرته، أو عن طريقة التواصل معه. وإن كان سؤالك محددًا فمراسلته مباشرة هي الأنسب.",
    "هذا خارج ما أعرفه عن أعمال عبدالرحمن، وأفضّل ألا أخمّن. جرّب أن تسأل عن مشاريعه أو أدواته أو خبرته، أو راسله وسيرد بنفسه.",
  ],
};

const OPENERS: Record<Lang, { yes: string; no: string; empty: string }> = {
  en: {
    yes: "Sure. ",
    no: "No problem. If anything comes up, just ask, or use the contact section to reach Abdulrahman directly.",
    empty: "Type a question and I'll do my best. You can ask about skills, projects, experience, or how to get in touch.",
  },
  ar: {
    yes: "بكل سرور. ",
    no: "لا مشكلة. وإن خطر لك سؤال فاسأل، أو استخدم قسم التواصل لمراسلة عبدالرحمن مباشرة.",
    empty: "اكتب سؤالك وسأبذل جهدي. يمكنك السؤال عن المهارات أو المشاريع أو الخبرة أو طريقة التواصل.",
  },
};

const byId = new Map(topics.map((t) => [t.id, t]));

const answerTopics = (list: Topic[], lang: Lang, ctx: Context, prefix = ""): Reply => {
  const text = prefix + list.map((t) => pick(t, lang, ctx)).join("\n\n");
  const main = list[0];
  const ids = Array.from(new Set(list.flatMap((t) => t.next ?? [])));
  list.forEach((t) => ctx.shown.push(t.id));
  ctx.last = main.id;
  return {
    text,
    lang,
    topic: main.id,
    chips: chipsFor(ids.length ? ids : ["skills", "projects", "contact"], lang, ctx),
    contact: list.some((t) => t.contact),
  };
};

/** Answers a typed message. `pageLang` is used when the message gives no language clue. */
export const respond = (raw: string, pageLang: Lang, ctx: Context): Reply => {
  const lang = detectLanguage(raw, ctx.lang ?? pageLang);
  ctx.lang = lang;
  const text = normalize(raw);
  const tokens = text.split(" ").filter(Boolean);

  if (!tokens.length) {
    return { text: OPENERS[lang].empty, lang, chips: chipsFor(["skills", "projects", "contact"], lang, ctx), contact: false };
  }

  // "yes", "more", "and?" continue from the last topic.
  const onlyIn = (set: Set<string>) => tokens.every((t) => set.has(t));
  if (ctx.last && tokens.length <= 4) {
    if (onlyIn(NO_WORDS)) return { text: OPENERS[lang].no, lang, chips: [], contact: false };
    if (onlyIn(YES_WORDS) || onlyIn(MORE_WORDS)) {
      const last = byId.get(ctx.last);
      const nextId = (last?.next ?? []).find((id) => !ctx.shown.includes(id)) ?? (last?.next ?? [])[0];
      const next = nextId ? byId.get(nextId) : undefined;
      if (next) return answerTopics([next], lang, ctx, onlyIn(YES_WORDS) ? OPENERS[lang].yes : "");
    }
  }

  const content = tokens.filter((t) => !NAME_TOKENS.has(t));
  const hadName = content.length !== tokens.length;
  const contentText = content.join(" ");

  let scored = prepared
    .map((p) => ({ topic: p.topic, score: scoreTopic(p, contentText, content) }))
    .filter((s) => s.score >= 2)
    .sort((a, b) => b.score - a.score);

  // A question beats small talk that came with it ("thanks, what are his skills?").
  if (scored.some((s) => !s.topic.talk)) scored = scored.filter((s) => !s.topic.talk);

  if (!scored.length) {
    if (hadName) return answerTopics([byId.get("about")!], lang, ctx);
    const text2 = FALLBACK[lang][(ctx.variant.fallback = ((ctx.variant.fallback ?? -1) + 1) % FALLBACK[lang].length)];
    return { text: text2, lang, chips: chipsFor(["skills", "projects", "experience"], lang, ctx), contact: true };
  }

  const best = scored[0];
  const picked = [best.topic];
  const second = scored[1];
  const isConcept = (t: Topic) => t.id.startsWith("q-");
  if (second && !best.topic.talk && !isConcept(best.topic) && !isConcept(second.topic) && second.score >= best.score * 0.7) {
    picked.push(second.topic);
  }
  return answerTopics(picked, lang, ctx);
};

/** Answers a tapped suggestion directly, without matching text. */
export const respondToTopic = (id: string, pageLang: Lang, ctx: Context): Reply => {
  const lang = ctx.lang ?? pageLang;
  const t = byId.get(id);
  if (!t) return respond("", lang, ctx);
  return answerTopics([t], lang, ctx);
};
