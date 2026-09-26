import { useEffect, useRef, useState } from "react";
import { Target, Bot, Database, FolderCheck } from "lucide-react";

const stats = [
  { icon: Target, value: 100, suffix: "%", label: "Test Coverage Focus" },
  { icon: FolderCheck, value: 6, suffix: "+", label: "QA Projects Delivered" },
  { icon: Bot, text: "Manual + Auto", label: "Automated & Manual QA" },
  { icon: Database, text: "API + DB", label: "API & Database Validation" }
];

const Counter = ({ to, run }: { to: number; run: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n}</>;
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="py-14 bg-background">
      <div ref={ref} className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {stats.map(({ icon: Icon, value, suffix, text, label }, i) => (
          <div
            key={label}
            data-reveal
            style={{ transitionDelay: `${i * 100}ms` }}
            className="rounded-xl border border-border bg-card p-6 text-center hover-glow"
          >
            <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              {value !== undefined ? <><Counter to={value} run={visible} />{suffix}</> : text}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
