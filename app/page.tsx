import SiteNav from "@/app/_components/SiteNav";
import Footer from "@/app/_components/Footer";
import Hero from "@/app/_components/sections/Hero";
import Intro from "@/app/_components/sections/Intro";
import Matching from "@/app/_components/sections/Matching";
import Features from "@/app/_components/sections/Features";
import MapSection from "@/app/_components/sections/MapSection";
import ComingSoon from "@/app/_components/sections/ComingSoon";
import FinalCta from "@/app/_components/sections/FinalCta";

export default function Home() {
  return (
    <div id="top">
      <SiteNav />

      <main className="overflow-hidden bg-white">
        <Hero />
        <Intro />
        <Matching />
        <Features />
        <MapSection />
        <ComingSoon />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
