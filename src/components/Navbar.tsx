"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

// "/#..." links work from the home page AND from /paddock.
// "#contact" stays as-is: it opens the side panel on either page.
const links = [
  { href: "/#telemetry", label: "Telemetry" },
  { href: "/#projects", label: "Projects" },
  { href: "/paddock", label: "Paddock" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled || open ? " scrolled" : ""}`}>
      <div className="wrap flex items-center justify-between py-4">
        <a
          href="/"
          className="display text-2xl"
          onClick={() => setOpen(false)}
          aria-label={`${site.firstName} — home`}
        >
          {site.firstName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}

          <a href={site.cv} className="btn btn-primary !py-2.5" download>
            CV
          </a>
        </nav>

        <button
          type="button"
          className="mono text-xs tracking-[0.2em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="wrap flex h-[calc(100svh-64px)] flex-col gap-6 pt-10 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="display text-6xl"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href={site.cv}
            className="btn btn-primary w-fit"
            download
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
