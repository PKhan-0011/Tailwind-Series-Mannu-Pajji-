import Image from "next/image";
import ModeToggle from "@/ModeToggle/index";

export default function Home() {
  return (
    <div className="min-h-screen font-display">
      <ModeToggle />
      <h1 className="">Hi there</h1>
    </div>
  );
}
