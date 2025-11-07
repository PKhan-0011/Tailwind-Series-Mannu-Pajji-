"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NavSection = [
  {
    Title: "Home",
    link: "/",
  },
  {
    Title: "About",
    link: "/about",
  },
  {
    Title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-200 dark:bg-neutral-700 rounded-full border dark:border-gray-200  my-4 mx-6 flex items-center justify-between ">
      <div>
        <h1 className="text-2xl font-bold dark:text-white px-4">Navbar</h1>
      </div>

      <div className="flex gap-5  mx-4 items-center">
        {NavSection.map((items) => (
          <Link
            key={items?.Title}
            href={items.link}
            className="text-xl font-semibold text-neutral-800 dark:text-gray-200"
          >
            {items.Title}
          </Link>
        ))}
        <Button
          variant="outline"
          className="h-10 w-12 transition ease-in-out duration-200 hover:rotate-45 "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
