"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./Contact";

const ease = [0.2, 0.7, 0.2, 1] as const;

// Contact-only side panel. Opens when the URL hash is #contact.
export default function SidePanel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#contact");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#contact") {
      // clear the hash so the same link can be clicked again later
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }, []);

  // Esc to close + lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          className="panel-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
        />
      )}
      {open && (
        <motion.aside
          key="panel"
          className="side-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Contact"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease }}
        >
          <div className="side-head">
            <div className="side-tabs">
              <span className="side-tab" aria-selected="true">
                Contact
              </span>
            </div>
            <button
              type="button"
              className="side-close"
              onClick={close}
              aria-label="Close panel"
            >
              Close ✕
            </button>
          </div>

          <div className="side-body">
            <Contact />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
