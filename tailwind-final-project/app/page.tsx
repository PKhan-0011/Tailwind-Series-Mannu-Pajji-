import Image from "next/image";
import ModeToggle from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <ModeToggle />
    </div>
  );
}
