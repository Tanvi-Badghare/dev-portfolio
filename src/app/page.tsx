import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Telemetry from "@/components/Telemetry";
import Projects from "@/components/Projects";
import SidePanel from "@/components/SidePanel";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Telemetry />
        <Projects />
      </main>
      <Footer />
      <SidePanel />
    </>
  );
}