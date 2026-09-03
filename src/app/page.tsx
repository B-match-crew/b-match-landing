import SiteNav from "@/src/shared/ui/SiteNav";
import Footer from "@/src/shared/ui/Footer";
import Hero from "@/src/widgets/sections/Hero";
import Intro from "@/src/widgets/sections/Intro";
import Matching from "@/src/widgets/sections/Matching";
import Features from "@/src/widgets/sections/Features";
import MapSection from "@/src/widgets/sections/MapSection";
import ComingSoon from "@/src/widgets/sections/ComingSoon";
import FinalCta from "@/src/widgets/sections/FinalCta";

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
