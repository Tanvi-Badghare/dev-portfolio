"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Feed the smoothed position into CSS variables used by the glow and grid.
    const unX = sx.on("change", (v) => root.style.setProperty("--mx", `${v}px`));
    const unY = sy.on("change", (v) => root.style.setProperty("--my", `${v}px`));

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, input, textarea, [data-hover]"));
    };
    const leave = () => {
      x.set(-500);
      y.set(-500);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      unX();
      unY();
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y, sx, sy]);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-grid" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className={`cursor${hovering ? " hovering" : ""}`}
        style={{ x: sx, y: sy }}
      />
    </>
  );
}