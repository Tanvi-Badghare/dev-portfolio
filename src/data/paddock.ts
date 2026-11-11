// Content for the /paddock page. Images go in public/images/paddock/.
// Leave an image as "" (or missing) and a text tile shows instead.

export const paddock = {
  heading: "Off the Clock",
    portrait: "/images/paddock/me.png", // later: "/images/paddock/me.jpg"
    portraitPos: "50% 25%", // which part of the photo stays in frame
    caption: "Race / Data / Security",
      photos: [
    { src: "/images/paddock/trophy-selfie.jpg", alt: "Tanvi Badghare", pos: "50% 25%" },
    { src: "/images/paddock/me.png", alt: "Tanvi with the Formula One Drivers' World Championship trophy", pos: "30% 35%" },
    { src: "/images/paddock/trophy.jpg", alt: "The Formula One Drivers' World Championship trophy", pos: "50% 40%" },
  ],
      intro: [
    "Computer science graduate working where fast-moving data meets security: race telemetry, vehicle networks and the cryptography that keeps them trustworthy.",
    "Away from the keyboard, this is where the racing side of me lives.",
  ],

    hobbies: [
    { label: "Reading", note: "Usually juggling a book and a growing TBR list.", image: "/images/paddock/hobby-reading.jpg" /* /images/paddock/hobby-reading.jpg */ },
    { label: "Playing Badminton", note: "My favourite way to reset, recharge, and clear my head.", image: "/images/paddock/hobby-badminton.jpg" /* hobby-swimming.jpg */ },
    { label: "Exploring Motorsport", note: "F1 is just the starting grid. I'm here for the other series, forgotten eras, and tracks with stories of their own.", image: "/images/paddock/hobby-motorsport.jpg" /* hobby-motorsport.jpg */ },
    { label: "Travelling", note: "Not as often as I'd like, but my latest adventure was a solo trip to Germany. Proof that sometimes the best travel buddy is yourself.", image: "/images/paddock/hobby-travel.jpg" /* hobby-travel.jpg */ },
  ],

  favouriteTrack: {
    name: "Marina Bay Street Circuit",
    country: "Singapore",
    note: "Night racing, city lights, and a track practically on my doorstep. With so few overtaking spots, every move counts, and every strategy gamble gets interesting.",
    layout: "/images/paddock/track-singapore.png",
  },

  // Two favourites, add or remove entries freely
  favouriteDrivers: [
    {
      name: "Oscar Piastri",
      team: "McLaren F1",
      note: "Cool head, calm energy, and barely a crack under pressure. In a sport full of drama, his composure is a race-winning trait of its own.",
      helmet: "/images/paddock/helmet-piastri.png",
    },
    {
      name: "Lando Norris",
      team: "McLaren F1",
      note: "For being open about mental health and showing that growth means more than what's on the timing screen. Through the LN4 Legacy Programme, he's also helping create opportunities for people who might not otherwise get them.",
      helmet: "/images/paddock/helmet-norris.png",
    },
  ],

  // The page picks the next race by itself. After a race starts it moves on.
  // "start" is the approximate lights-out time in UTC. CHECK these against
  // formula1.com before relying on them, and add the 2027 calendar later.
  // Layout images are looked up by slug: /images/paddock/layout-<slug>.png
  races: [
    { slug: "cota", name: "United States Grand Prix", circuit: "Circuit of the Americas", place: "Austin, USA", weekend: "23-25 Oct", start: "2026-10-25T19:00:00Z" },
    { slug: "mexico", name: "Mexico City Grand Prix", circuit: "Autódromo Hermanos Rodríguez", place: "Mexico City, Mexico", weekend: "30 Oct-1 Nov", start: "2026-11-01T20:00:00Z" },
    { slug: "interlagos", name: "São Paulo Grand Prix", circuit: "Autódromo José Carlos Pace", place: "São Paulo, Brazil", weekend: "6-8 Nov", start: "2026-11-08T17:00:00Z" },
    { slug: "las-vegas", name: "Las Vegas Grand Prix", circuit: "Las Vegas Strip Circuit", place: "Las Vegas, USA", weekend: "19-21 Nov", start: "2026-11-22T06:00:00Z" },
    { slug: "lusail", name: "Qatar Grand Prix", circuit: "Lusail International Circuit", place: "Lusail, Qatar", weekend: "27-29 Nov", start: "2026-11-29T16:00:00Z" },
    { slug: "c:\Users\Lenovo\Downloads\layout-yas-marina.png c:\Users\Lenovo\Downloads\layout-lusail.png c:\Users\Lenovo\Downloads\layout-las-vegas.png", name: "Abu Dhabi Grand Prix", circuit: "Yas Marina Circuit", place: "Abu Dhabi, UAE", weekend: "4-6 Dec", start: "2026-12-06T13:00:00Z" },
  ],

  // Set href to your repo URL when it goes public
  lapAnalyser: {
    title: "F1 Lap Analyser",
    description: "Compare drivers lap by lap using real session telemetry.",
    href: "https://github.com/Tanvi-Badghare/f1-lap-stint-analyser",
  },
};