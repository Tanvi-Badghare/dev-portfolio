"use client";

import { useEffect, useState } from "react";
import { paddock } from "@/data/paddock";

const RACE_MS = 3 * 60 * 60 * 1000; // treat a race as "live" for 3 hours

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Analyser() {
  const a = paddock.lapAnalyser;
  return (
    <div className="pd-project">
      <div className="pd-h3">{a.title}</div>
      <p className="pd-muted">{a.description}</p>
      {a.href && (
        <a href={a.href} target="_blank" rel="noreferrer" className="pd-btn pd-btn-primary">
          Open the project ↗
        </a>
      )}
    </div>
  );
}

export default function NextRace() {
  const [now, setNow] = useState<number | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const races = paddock.races;
  const race =
    now === null
      ? races[0]
      : races.find((r) => new Date(r.start).getTime() + RACE_MS > now);

  useEffect(() => setImgFailed(false), [race?.slug]);

  if (now !== null && !race) {
    return (
      <div className="pd-card">
        <div className="pd-h2" style={{ marginTop: 0 }}>2026 season complete</div>
        <p className="pd-muted">See you on the 2027 grid. The new calendar goes up soon.</p>
        <Analyser />
      </div>
    );
  }
  if (!race) return null;

  const start = new Date(race.start).getTime();
  const diff = now === null ? null : start - now;
  const live = diff !== null && diff <= 0;
  const d = diff !== null && diff > 0 ? Math.floor(diff / 86400000) : 0;
  const h = diff !== null && diff > 0 ? Math.floor((diff % 86400000) / 3600000) : 0;
  const m = diff !== null && diff > 0 ? Math.floor((diff % 3600000) / 60000) : 0;
  const s = diff !== null && diff > 0 ? Math.floor((diff % 60000) / 1000) : 0;

  return (
    <div className="pd-card pd-race">
      <div>
        <div className="pd-tag">{live ? "Race in progress" : "Next race"}</div>
        <div className="pd-h2">{race.name}</div>
        <div className="pd-sub">
          {race.circuit} · {race.place} · {race.weekend}
        </div>

        {diff !== null && !live && (
          <div className="pd-count" aria-label="Time until lights out">
            {[["d", d], ["h", h], ["m", m], ["s", s]].map(([u, v]) => (
              <div key={u as string} className="pd-count-cell">
                <span>{pad(v as number)}</span>
                <small>{u}</small>
              </div>
            ))}
          </div>
        )}
        {live && <p className="pd-muted">Lights out. It's underway.</p>}

        <Analyser />
      </div>

      <div className="pd-pic">
        {!imgFailed ? (
          <img
            src={`/images/paddock/layout-${race.slug}.png`}
            alt={`${race.circuit} layout`}
            className="pd-img"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="pd-fallback">Track layout</div>
        )}
      </div>
    </div>
  );
}
