import Image from "next/image";
import ModeToggle from "@/ModeToggle/index";
import HeroSection from "@/Components/HeroSection";
import LogoCloud from "@/Components/logo-cloud";
import FeaturesSection from "@/Components/features/index";

export default function Home() {
  return (
    <div className="min-h-screen font-display">
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
    </div>
  );
}

// agar kahi bhi intrisic type ka error dikhhega to smjh ja like kii import karne m kuch dikkat hui hai okkh!>.
