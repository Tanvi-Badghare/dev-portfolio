import { paddock } from "@/data/paddock";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import NextRace from "./NextRace";

// Reusable image component.
// Shows the image if a path is provided, otherwise a fallback label.
// "pos" controls which part of the photo stays in frame, e.g. "50% 25%".
function Pic({
  src,
  alt,
  label,
  pos,
}: {
  src?: string;
  alt: string;
  label: string;
  pos?: string;
}) {
  return src ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="pd-img"
      style={{ objectPosition: pos || "50% 50%" }}
    />
  ) : (
    <div className="pd-fallback">{label}</div>
  );
}

export default function Paddock() {
  const p = paddock;

  // Split the heading so the last word is outlined: "Off the" + "Clock"
  const words = p.heading.split(" ");
  const lastWord = words.pop();
  const firstWords = words.join(" ");

  return (
    <main className="pd-page" id="top">
      <div className="pd-wrap">
        {/* Header: title + intro on the left, your photo on the right */}
        <section className="pd-hero">
          <div>
            <Reveal>
              <a href="/" className="pd-back">
                ← Back to home
              </a>
              <div className="pd-eyebrow">About me</div>
              <h1 className="pd-title">
                {firstWords} <span>{lastWord}</span>
              </h1>
            </Reveal>

            <div className="pd-intro">
              {p.intro.map((t, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <p className={i === 0 ? "pd-lead" : "pd-muted"}>{t}</p>
                </Reveal>
              ))}
            </div>
          </div>

                    <Reveal delay={0.1}>
            <div className="pd-photos">
              {p.photos.map((ph, i) => (
                <div key={ph.src} className={`pd-photo pd-photo-${i}`}>
                  <Pic src={ph.src} alt={ph.alt} label="Photo" pos={ph.pos} />
                  {i === 0 && <div className="pd-portrait-cap">{p.caption}</div>}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Hobbies */}
        <Reveal>
          <div className="pd-label">Hobbies</div>
        </Reveal>

        <div className="pd-grid pd-grid-2">
          {p.hobbies.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.06}>
              <div className="pd-hobby">
                {/* HOBBY IMAGE: set h.image in @/data/paddock */}
                <div className="pd-hobby-img">
                  <Pic src={h.image} alt={`${h.label} hobby`} label={h.label} />
                </div>
                <div className="pd-hobby-body">
                  <div className="pd-tag">{h.label}</div>
                  <p className="pd-muted">{h.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Favourites */}
        <Reveal>
          <div className="pd-label">Favourites</div>
        </Reveal>

        <div className="pd-grid pd-grid-3">
          <Reveal>
            <div className="pd-card">
              <div className="pd-tag">Favourite track</div>

              <div className="pd-pic">
                {/* TRACK IMAGE: /public/images/paddock/track-singapore.png */}
                <Pic
                  src={p.favouriteTrack.layout}
                  alt={`${p.favouriteTrack.name} layout`}
                  label="Track layout"
                />
              </div>

              <div className="pd-h2">{p.favouriteTrack.name}</div>
              <div className="pd-sub">{p.favouriteTrack.country}</div>
              <p className="pd-muted">{p.favouriteTrack.note}</p>
            </div>
          </Reveal>

          {p.favouriteDrivers.map((d, i) => (
            <Reveal key={d.name} delay={0.08 * (i + 1)}>
              <div className="pd-card">
                <div className="pd-tag">Favourite driver</div>

                <div className="pd-pic pd-pic-tall">
                  {/* HELMET IMAGE: /public/images/paddock/helmet-*.png */}
                  <Pic
                    src={d.helmet}
                    alt={`${d.name} helmet`}
                    label="Helmet"
                    pos={(d as { pos?: string }).pos ?? "50% 15%"}
                  />
                </div>

                <div className="pd-h2">{d.name}</div>
                <div className="pd-sub">{d.team}</div>
                <p className="pd-muted">{d.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Next race */}
        <Reveal>
          <div className="pd-label">Next race</div>
        </Reveal>

        <Reveal>
          <div style={{ marginTop: "1.25rem" }}>
            <NextRace />
          </div>
        </Reveal>

        <Reveal>
          <a href={site.cv} download className="pd-btn pd-cv">
            Download CV ↓
          </a>
        </Reveal>
      </div>
    </main>
  );
}
