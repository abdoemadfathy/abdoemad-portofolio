import { motion } from "framer-motion";
import { FileDown, Github, Linkedin, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import TestRunPanel from "@/components/TestRunPanel";
import profileImage from "@/assets/profile-image.jpg";
import { headline, profile } from "@/data/portfolioData";
import { EASE_OUT, heroContainer, heroImage, heroItem, pressable } from "@/lib/motion";
import type { SocialKey } from "@/types/portfolio";

const SOCIAL_ICONS: Record<SocialKey, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
  whatsapp: MessageCircle,
};

/** Headline words rise out of a mask, one after another. */
const wordGroup = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const word = {
  hidden: { y: "105%" },
  visible: { y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

const Hero = () => {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/10 blur-[120px]"
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-12 lg:gap-10 lg:pb-28"
      >
        <div className="min-w-0 lg:col-span-7">
          <motion.div variants={heroImage} className="mb-8 flex items-center gap-4">
            <img
              src={profileImage}
              alt={profile.avatarAlt}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-border"
            />
            <div>
              <p className="font-display text-lg font-semibold leading-tight">{profile.name}</p>
              <p className="text-sm text-muted-foreground">
                {profile.role} based in {profile.location}
              </p>
            </div>
          </motion.div>

          <motion.h1
            variants={wordGroup}
            className="font-display text-[2.5rem] font-semibold leading-[1.02] tracking-tight [text-wrap:balance] sm:text-6xl lg:text-[4.5rem]"
          >
            {headline.split(" ").map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p variants={heroItem} className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.bio} Core stack: {profile.stack.join(", ")}.
          </motion.p>

          <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-3">
            <motion.a
              {...pressable}
              href={profile.cv.url}
              download={profile.cv.downloadName}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)]"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </motion.a>
            <motion.button
              {...pressable}
              onClick={() => goTo("projects")}
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              See my projects
            </motion.button>
          </motion.div>

          <motion.div variants={heroItem} className="mt-8 flex gap-2">
            {profile.socials.map(({ key, href, label }) => {
              const Icon = SOCIAL_ICONS[key];
              return (
                <motion.a
                  key={key}
                  href={href}
                  target="_top"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  {...pressable}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div variants={heroItem} className="min-w-0 lg:col-span-5">
          <TestRunPanel />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            An illustration of how I report a suite run. Press run again to replay it.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
