"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend needed: opens the visitor's mail app with the message prefilled.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div>
      <span className="eyebrow">04 / Contact</span>
      <h2 className="display panel-title mt-4">
        Let&apos;s <span className="serif">talk</span>
      </h2>

      <a href={`mailto:${site.email}`} className="display contact-big mt-6 block">
        {site.email}
      </a>

      <form onSubmit={onSubmit} className="mt-8 space-y-2">
        <label className="sr-only" htmlFor="name">Name</label>
        <input id="name" name="name" required placeholder="Your name" className="field" />
        <label className="sr-only" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="Your email" className="field" />
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project" className="field resize-none" />
        <button type="submit" className="btn btn-primary mt-4">
          {sent ? "Opening mail app…" : "Send message →"}
        </button>
      </form>

      <div className="mono mt-10 text-xs uppercase tracking-[0.16em] muted">
        Find me on
      </div>
      <ul className="mt-3 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
        {site.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="display flex items-center justify-between py-3 text-xl transition-colors hover:text-[color:var(--accent)]"
            >
              {s.label} <span>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}