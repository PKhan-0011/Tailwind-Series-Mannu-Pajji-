import React from "react";
import Logo from "./logo";
import Container from "@/Components/Container";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import ModeToggle from "@/ModeToggle/index";

const NavItems = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800">
      <Container className=" py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {NavItems.map((items, index) => (
            <Link
              href={items.href}
              key={index}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {items.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/signIn" className="">
            <Button variant={"outline"} className="">
              signIn
            </Button>
          </Link>

          <Link href="/signUp">
            <Button variant={"destructive"} className="shadow-2xl">
              {" "}
              SignUp
            </Button>
          </Link>
        </div>

        {/* <div className="items-center flex ">
          <ModeToggle />
        </div> */}
      </Container>
    </div>
  );
};

export default Navbar;

// Yha p man le button jo hai actaully wo components hai to mughe us componenst m acatully
// className chidren ...props dena hoga to wo jo ...props hai wo varisnta and onClick jo likhte hai hamm unhe kahte hai okh!..
