export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  image?: string; // optional: path inside /public, e.g. "/images/pitcrypt.png"
  href?: string; // live link
  repo?: string; // source link
};

export const projects: Project[] = [
  {
    slug: "pitcrypt-f1",
    title: "PitCrypt-F1",
    year: "2026",
    category: "Secure telemetry framework",
    description:
      "A zero-trust security framework for FIA-regulated F1 telemetry, built on real 2025 session data. Packets flow Car → Relay → FIA Validator with ECDH key rotation, authenticated encryption, Ed25519 signatures, replay and tamper detection, and an audit log. Benchmarked at 9.35k packets/s in a simulated 10-car workload, with 0.71 ms median latency.",
    stack: ["Python", "FastF1", "Pandas", "Streamlit", "Plotly", "Cryptography"],
    image: "/images/projects/pitcrypt-f1.png",
    repo: "https://github.com/Tanvi-Badghare/pitcrypt_f1",
  },
  {
    slug: "securecan",
    title: "SecureCAN",
    year: "2026",
    category: "Automotive bus security simulator",
    description:
      "A multithreaded CAN-style vehicle bus simulator in C++ with independent ECU nodes, correlated vehicle telemetry and CSV replay. Built to study ECU authentication, attack injection and anomaly detection.",
    stack: ["C++", "CAN", "Multithreading", "Real-time telemetry"],
    image: "/images/projects/securecan.png",
    repo: "https://github.com/Tanvi-Badghare/securecan", // works once the repo is public
  },
  {
    slug: "dwaf-capstone",
    title: "Distributed WAF",
    year: "2026",
    category: "Capstone project",
    description:
      "A distributed web application firewall architecture combining ML-based threat detection, zero-knowledge verification, Byzantine consensus and STIX/TAXII threat-intelligence sharing.",
    stack: ["Python", "Machine learning", "Distributed systems", "STIX / TAXII"],
    image: "/images/projects/dwaf-capstone.png",
    repo: "https://github.com/Tanvi-Badghare/distributed-dwaf-capstone-project",
  },
  {
    slug: "zk-auth-schnorr",
    title: "zk_auth-schnorr",
    year: "2026",
    category: "Cryptography research",
    description:
      "A research-driven Rust implementation of Schnorr-based zero-knowledge authentication, exploring replay resistance, Fiat–Shamir transforms and real-world protocol trade-offs.",
    stack: ["Rust", "Cryptography", "Elliptic curves", "Fiat–Shamir"],
    image: "/images/projects/zk-auth.png",
    repo: "https://github.com/Tanvi-Badghare/zk_auth-schnorr",
  },
  {
    slug: "raceintel",
    title: "RaceIntel: Trust or Bluff",
    year: "2026",
    category: "Security decision game",
    description:
      "A React Native game where a team principal must judge spoofed communications and manipulated telemetry before making race-strategy calls, with live P1–P20 tracking and circuit minimaps.",
    stack: ["React Native", "JavaScript", "JSON"],
    image: "/images/projects/raceintel.png",
    // Private repo: no link shown.
  },
];