import Container from "@/container/Container";
import Haeders from "@/container/Haeders";
import Navbar from "@/container/Navbar";
import HeroSection from "@/container/HeroSection";

export default function Home() {
  return (
    <>
      <div className=" min-h-screen relative [background:radial-gradient(circle_at_top,_white_10%,_#dbeafe_90%)]">
        <div className="max-w-7xl mx-auto absolute inset-0 w-full mr-10">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-400 inset-0" />
        </div>
        <Container className="">
          <Navbar />
          <HeroSection />
        </Container>
      </div>
      <Haeders />
    </>
  );
}

// Note*** Components
