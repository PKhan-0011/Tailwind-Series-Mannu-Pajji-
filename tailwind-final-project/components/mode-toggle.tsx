"use client";

import React from "react";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  // useEffect ayega like for sideEffect systemTheme okkh!....

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange); // ye jo hai woo remove and erase k liye hia okkh!..
  }, []);

  const SwitchToggle = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }

      case "dark": {
        setTheme("light");
        return;
      }

      case "system": {
        setTheme(systemTheme === "light" ? "dark" : "light");
        return;
      }
    }
  };

  return (
    <button
      className="relative flex justify-center items-center"
      onClick={() => SwitchToggle()}
    >
      <Sun
        size={14}
        className="absolute inset-0 rotate-0 scale-100 transition-all duration-100 dark:rotate-90 dark:scale-0 "
      />
      <Moon
        size={14}
        className=" absolute inset-0 rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};

export default ModeToggle;
