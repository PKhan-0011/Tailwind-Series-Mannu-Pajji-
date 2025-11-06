"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button
        className=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

// waise ye by-default server-side rendering hoti hai but mai use-client karke isko mai clinet-side render ban deta hu okkh!>..
