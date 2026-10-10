import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Section from "@/components/common/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { ICONS } from "@/components/common/icons";
import profileImage from "@/assets/profile-image.jpg";
import { aboutIntro, aboutOutro, highlights, profile, stats, valuePoints } from "@/data/portfolioData";

const Counter = ({ to, run }: { to: number; run: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n}</>;
};

const About = () => {
  const statsRef = useRef<HTMLDListElement>(null);
  const seen = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <Section
      id="about"
      title="About"
      aside={
        <Reveal delay={0.1} className="mt-8 hidden md:block">
          <img
            src={profileImage}
            alt={profile.avatarAlt}
            loading="lazy"
            className="aspect-[4/5] w-full max-w-[260px] rounded-2xl object-cover object-top ring-1 ring-border"
          />
        </Reveal>
      }
    >
      <Reveal>
        <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem]">{aboutIntro}</p>
      </Reveal>

      <dl ref={statsRef} className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="order-2 mt-1 text-sm leading-snug text-muted-foreground">{s.label}</dt>
            <dd className="order-1 font-display text-4xl font-semibold tabular-nums tracking-tight">
              <Counter to={s.value} run={seen} />
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mb-2 mt-14 font-display text-xl font-semibold">What you get when we work together</h3>
      <Stagger as="ul">
        {valuePoints.map((v) => (
          <StaggerItem as="li" key={v.title} className="grid gap-1 border-b border-border py-4 sm:grid-cols-5 sm:gap-6">
            <span className="font-medium sm:col-span-2">{v.title}</span>
            <span className="text-muted-foreground sm:col-span-3">{v.text}</span>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">{aboutOutro}</p>
      </Reveal>

      <Stagger className="mt-12 grid gap-8 sm:grid-cols-3">
        {highlights.map(({ icon, title, text }) => {
          const Icon = ICONS[icon];
          return (
            <StaggerItem key={title}>
              <Icon className="mb-3 h-5 w-5 text-primary" />
              <h4 className="mb-1 font-medium">{title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
};

export default About;
