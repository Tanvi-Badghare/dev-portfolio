import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">02 / Projects</span>
          <h2 className="display h2">
            Selected <span style={{ color: "var(--accent)" }}>work</span>
          </h2>
        </Reveal>

        <div className="mt-14">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article className="project-row" data-hover>
                <div className="mono text-sm" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                  <div className="muted mt-1 text-xs">{p.year}</div>
                </div>

                <div>
                  <div className="mono text-xs uppercase tracking-[0.14em] muted">
                    {p.category}
                  </div>
                  <h3 className="display project-title mt-2">{p.title}</h3>
                  <p className="mt-4 max-w-lg muted">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mono mt-6 flex gap-6 text-xs uppercase tracking-[0.14em]">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[color:var(--accent)]"
                      >
                        Live ↗
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[color:var(--accent)]"
                      >
                        Source ↗
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-thumb">
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
                  ) : (
                    <div className="thumb-fallback">{p.title}</div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
