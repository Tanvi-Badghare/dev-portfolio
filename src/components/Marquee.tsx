import { site } from "@/data/site";

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...site.marquee, ...site.marquee];
  const doubled = [...items, ...items];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span key={i} className={`marquee-item${i % 2 ? " serif-item" : ""}`}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
