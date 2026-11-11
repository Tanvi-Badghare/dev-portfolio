// Everything personal lives here. Edit this file to make the site yours.

export const site = {
  name: "Tanvi Badghare",
  firstName: "Tanvi",
  lastName: "Badghare",
  role: "Motorsport Telemetry & Security Engineering",
  tagline:
    "Automotive and motorsport systems, secured by design. Open to roles in the UK and Europe from January 2027.",
  location: "India · Relocating to UK / Europe",
  email: "tanvibadghare2004@gmail.com",
  cv: "/documents/CV_Tanvi.pdf",
  marquee: [
    "Automotive security",
    "Motorsport telemetry",
    "Open to UK & Europe",
    "Applied cryptography",
    "CAN bus security",
    "Available January 2027",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Tanvi-Badghare" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tanvi-i" },
    // Add these when the accounts are ready:
    { label: "Instagram", href: "https://www.instagram.com/caused_a_scene_on_a_friday" },
    // { label: "Medium", href: "https://medium.com/@your-handle" },
  ],
  // Telemetry: headline numbers shown as gauges
  stats: [
    { label: "CGPA", value: 8.53, suffix: " /10", max: 10 },
    { label: "Packets / sec (PitCrypt-F1)", value: 9.35, suffix: "k", max: 12 },
    { label: "Median latency", value: 0.71, suffix: "ms", max: 2 },
    { label: "Projects built", value: 5, suffix: "", max: 8 },
  ],
  // Telemetry: skill traces (0-100)
  skills: [
    { name: "Python & data analysis", level: 85 },
    { name: "Applied cryptography", level: 70 },
    { name: "Linux & networking", level: 70 },
    { name: "C / C++", level: 65 },
    { name: "Rust", level: 55 },
    { name: "CAN & automotive security", level: 55 },
  ],
  // Timeline: shown as race stints (href / linkLabel are optional)
  timeline: [
    {
      year: "Jan 2027",
      title: "Relocating to UK / Europe",
      org: "Next stop",
      detail: "Open to graduate roles in automotive, motorsport and product security.",
    },
    {
      year: "Jan-Feb 2026",
      title: "Student in Security Spotlight",
      org: "Women in Security Magazine, Australia · Issue 28, pp. 98–101",
      detail:
        "Featured in the magazine's Student in Security Spotlight, talking about my path into cybersecurity as a student.",
      href: "https://womeninsecuritymagazine.com/issues/issue-28/",
      linkLabel: "Read the issue",
    },
    {
      year: "2025",
      title: "Cyber for HER Hackathon",
      org: "DSCI & EY, supported by the British High Commission New Delhi",
      detail: "Took part in and completed the national hackathon for women in cybersecurity.",
      href: "/documents/Tanvi_Badghare_Hackathon.jpeg",
      linkLabel: "View certificate",
    },
    {
      year: "2022 – 2026",
      title: "B.Tech, Computer Science & Engineering",
      org: "VIT Bhopal",
      detail: "Minor in Cyber Security & Digital Forensics. CGPA 8.53 / 10.",
    },
  ],
  about: {
    heading: "Off the Clock",
    paragraphs: [
      "I'm a computer science graduate who likes the place where fast-moving data meets security: race telemetry, vehicle networks and the cryptography that keeps them trustworthy.",
      "My projects so far cover secure F1 telemetry streams, a CAN-style vehicle bus simulator, a distributed web application firewall and zero-knowledge authentication in Rust. I'm still learning, and I build to find out what I don't know yet.",
    ],
    facts: [
      { label: "Focus", value: "Automotive & motorsport security" },
      { label: "Interest", value: "Applied cryptography" },
      { label: "Education", value: "B.Tech CSE, VIT Bhopal" },
      { label: "Availability", value: "January 2027, UK / Europe" },
    ],
  },
};

export type Site = typeof site;