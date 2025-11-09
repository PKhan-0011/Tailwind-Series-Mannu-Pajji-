import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";

const navLinks = [
  {
    title: "features",
    href: "/features",
  },
  {
    title: "Products",
    href: "/products",
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
    <Container className="">
      <div className="flex items-center justify-around">
        <div className="flex items-center text-2xl font-semibold tracking-tight text-shadow-2xs gap-1">
          <Image
            src="/logo.webp"
            alt="#AccertinityLogo"
            height={30}
            width={30}
          />
          <h1>Accertinity Ui.</h1>
        </div>

        <div className="flex gap-2 items-center font-semibold">
          {navLinks.map((items) => (
            <Link key={items.title} href={items.href}>
              {items.title}
            </Link>
          ))}
        </div>

        <div className="">
          <Button variant="outline">SignIn</Button>
          <Button variant="outline">SignUP</Button>
        </div>

        <ModeToggle />
      </div>
    </Container>
  );
};

export default Navbar;
