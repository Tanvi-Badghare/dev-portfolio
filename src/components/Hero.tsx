"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Hero() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="speed-lines" aria-hidden="true" />

      <div className="wrap relative z-10">
        <motion.div
          className="profile"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="profile-photo">
            {/* Replace with your own photo: /public/images/portrait.jpg */}
            <img src="/images/portrait.png" alt={`Portrait of ${site.firstName}`} />
          </div>

          <div className="profile-main min-w-0">
            <div className="profile-meta">
              <span className="eyebrow eyebrow-live">
                <span className="pulse-dot" aria-hidden="true" />
                Signal live · {time}
              </span>
              <span className="mono muted profile-loc">
                {site.location.toUpperCase()}
              </span>
            </div>

            <h1 className="display hero-name">{site.firstName}</h1>
            <p className="hero-role serif">{site.role}</p>
            <p className="hero-copy">{site.tagline}</p>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View work →
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}