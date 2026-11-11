import { site } from "@/data/site";

export default function About() {
  const { about } = site;
  return (
    <div>
      <span className="eyebrow">03 / About</span>
      <h2 className="display panel-title mt-4">
        Off the <span className="serif">track</span>
      </h2>

      <div className="mt-8 space-y-4">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? "var(--text)" : "var(--muted)" }}
          >
            {p}
          </p>
        ))}
      </div>

      <dl className="mt-8 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
        {about.facts.map((f) => (
          <div key={f.label} className="bg-[color:var(--surface)] p-4">
            <dt className="mono text-[0.65rem] uppercase tracking-[0.16em] muted">
              {f.label}
            </dt>
            <dd className="display mt-1 text-xl">{f.value}</dd>
          </div>
        ))}
      </dl>

      <a href={site.cv} download className="btn mt-8">
        Download CV ↓
      </a>
    </div>
  );
}