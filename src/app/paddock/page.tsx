import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Paddock from "@/components/Paddock";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";

export const metadata: Metadata = {
  title: "Off the Clock",
  description: "Hobbies, favourite track and driver, and the next race.",
};

export default function PaddockPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Paddock />
      <Footer />
      <SidePanel />
    </>
  );
}
