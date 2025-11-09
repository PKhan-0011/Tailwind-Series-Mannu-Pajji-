import Image from "next/image";
import ModeToggle from "@/components/mode-toggle";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <Container className="">
        {/* <ModeToggle /> */}
        <h1>Hi there</h1>
      </Container>
    </div>
  );
}
