"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { site } from "@/data/site";
import Reveal from "./Reveal";

const R = 52;
const C = 2 * Math.PI * R;

function Gauge({
  label,
  value,
  max,
  suffix,
}: {
  label: string;
  value: number;
  max: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const n = useMotionValue(0);
  const rounded = useTransform(n, (v) =>
    Number.isInteger(value) ? Math.round(v).toString() : v.toFixed(2)
  );
  const offset = useTransform(n, (v) => C - (v / max) * C);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(n, value, { duration: 1.6, ease: [0.2, 0.7, 0.2, 1] });
    return () => controls.stop();
  }, [inView, n, value]);

  return (
    <div ref={ref} className="panel flex items-center gap-5">
      <svg width="116" height="116" viewBox="0 0 120 120" aria-hidden>
        <circle cx="60" cy="60" r={R} fill="none" stroke="var(--line)" strokeWidth="8" />
        <motion.circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="butt"
          strokeDasharray={C}
          style={{ strokeDashoffset: offset }}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div>
        <div className="gauge-value">
          <motion.span>{rounded}</motion.span>
          <span style={{ color: "var(--accent)" }}>{suffix}</span>
        </div>
        <div className="mono mt-2 text-[0.7rem] uppercase tracking-[0.14em] muted">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Telemetry() {
  return (
    <section id="telemetry" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">01 / Telemetry</span>
          <h2 className="display h2">
            The <span style={{ color: "var(--ice)" }}>data</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Gauge {...s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Skill traces */}
          <div>
            <Reveal>
              <h3 className="display text-4xl">Skill traces</h3>
            </Reveal>
            <div className="mt-8 space-y-7">
              {site.skills.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.06}>
                  <div className="mono mb-2 flex justify-between text-xs uppercase tracking-[0.12em]">
                    <span>{s.name}</span>
                    <span style={{ color: "var(--accent)" }}>{s.level}%</span>
                  </div>
                  <div className="trace">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stints */}
          <div>
            <Reveal>
              <h3 className="display text-4xl">Race stints</h3>
            </Reveal>
            <div className="mt-8 ml-2">
              {site.timeline.map((t, i) => (
                <Reveal key={t.year + t.title} delay={i * 0.08}>
                  <div className="stint">
                    <div className="mono text-xs tracking-[0.14em]" style={{ color: "var(--accent)" }}>
                      {t.year}
                    </div>
                    <div className="display mt-1 text-3xl">{t.title}</div>
                    <div className="mono text-xs uppercase tracking-[0.12em]" style={{ color: "var(--ice)" }}>
                      {t.org}
                    </div>
                    <p className="mt-2 max-w-md muted">{t.detail}</p>
                    {"href" in t && t.href && (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mono mt-3 inline-block text-xs uppercase tracking-[0.14em] transition-colors hover:text-[color:var(--accent)]"
                        style={{ color: "var(--ice)" }}
                      >
                        {("linkLabel" in t && t.linkLabel) || "View"} ↗
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
