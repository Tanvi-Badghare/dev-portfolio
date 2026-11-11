import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <div className="wrap flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="display text-3xl">
          {site.name}
          <span style={{ color: "var(--accent)" }}>.</span>
        </div>
        <div className="mono text-[0.7rem] uppercase tracking-[0.16em] muted">
          © {new Date().getFullYear()} {site.name} · Built with Next.js
        </div>
        <a href="#top" className="mono text-[0.7rem] uppercase tracking-[0.16em] hover:text-[color:var(--accent)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
