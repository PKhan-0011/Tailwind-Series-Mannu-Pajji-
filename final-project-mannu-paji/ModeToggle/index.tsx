"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  const Switch = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
      }

      case "dark": {
        setTheme("light");
      }
      case "system": {
        setTheme(theme === "light" ? "dark" : "light");
      }
    }
  };

  useEffect(() => {
    // sttep1 mediaQuery le aio kahi s okkh!..
    const mediaQuery = window.matchMedia("(prefer-color-schema: dark)");

    // step-2 jo hai wo like event handle karega okkh!..
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    // step-3 ata hai like for addEvent listner k liye okkh!..
    mediaQuery.addEventListener("change", handleChange);

    //step-4 wo remove Listener hoga okkh!..

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  //use Effect ayega sabse pehle yha p use dekh ookkh

  return (
    <button
      onClick={() => Switch()}
      className="flex hover:cursor-pointer items-center justify-center size-10 border border-red-600"
    >
      <Sun
        size={30}
        className="rotate-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0"
      />

      <Moon
        size={30}
        className="rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};

export default ModeToggle;

// agar mai kisi aur jagah button components likh rha hota na to mugeh actaully ..props and
// children dena padta usme and yha p import karna pdta hai ookh..
