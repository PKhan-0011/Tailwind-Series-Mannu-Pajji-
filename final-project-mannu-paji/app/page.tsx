import Image from "next/image";
import ModeToggle from "@/ModeToggle/index";
import HeroSection from "@/Components/HeroSection";
import LogoCloud from "@/Components/logo-cloud";
import SpeedIndex from "@/Components/SpeedContent";
import FeaturesSecondary from "@/Components/features-secondary";
import FeaturesSection from "@/Components/features/index";

export default function Home() {
  return (
    <div className="font-display min-h-screen">
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <SpeedIndex />
      <FeaturesSecondary />
    </div>
  );
}

// agar kahi bhi intrisic type ka error dikhhega to smjh ja like kii import karne m kuch dikkat hui hai okkh!>
// Yha s koi like props send karna hoga to mughe kisi bhi componets m jake
// props send kar dunga okkh!.. like <SpeedIndex  text={"hi thete"}/>

// Aur mai wha p jake children m bracket luna uske andar mai {text} aise dunag to dirct text likhne denge okkh! mughe
// text.props nahi likhna padega okkh!..
