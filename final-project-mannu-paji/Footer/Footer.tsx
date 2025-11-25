import React from "react";
import Container from "@/Components/Container";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { SendHorizontal } from "lucide-react";

const Footer = () => {
  const Product = [
    {
      title: "Agent Simulator",
      link: "/feature",
    },
    {
      title: "Ai Workflows",
      link: "/Ai",
    },
    {
      title: "Agent Builder",
      link: "/Builder",
    },
    {
      title: "Analytics Dashboard",
      link: "/Dashborad",
    },
    {
      title: "API Integration",
      link: "Enterprise Solution",
    },
  ];

  const Company = [
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "Carrers",
      href: "/carrier",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <footer className="border-t border-neutral-200 py-10 md:py-14 lg:py-20 dark:border-neutral-800">
      <Container className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BrainCircuit strokeWidth={2} size={40} className="" />
            <span className="text-2xl font-semibold text-neutral-900 text-shadow-lg">
              Agenforce
            </span>
          </div>
          <h3 className="text-semibold w-40 pb-4 text-sm text-neutral-500 md:w-70">
            Safe, observation, outcome-driven AI{" "}
          </h3>
          <Button variant={"default"} className="p-2 px-4">
            Start a 30-day pilot
          </Button>
        </div>

        <div className="ml-50">
          <h4 className="text-md font-semibold text-neutral-400">Product</h4>
          <ul className="mt-2 flex w-40 list-none flex-col gap-1">
            {Product.map((index) => (
              <li key={index.title} className="text-sm">
                <Link
                  href={index.link}
                  className="font-semibold text-neutral-600"
                >
                  {index.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-50">
          <h4 className="text-md pl-4 font-semibold text-neutral-400">
            Company
          </h4>
          <ul className="mt-2 flex w-40 list-none flex-col gap-1 pl-6">
            {Company.map((index) => (
              <li key={index.title} className="text-sm">
                <Link
                  href={index.href}
                  className="font-semibold text-neutral-600"
                >
                  {index.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-40 flex w-80 flex-col gap-4">
          <h4 className="text-md font-semibold text-neutral-400">Newsletter</h4>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="text"
              className="w-50 rounded-xl border border-black bg-neutral-100 p-2"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center rounded-xl bg-black p-2 text-white">
              <SendHorizontal className="-rotate-45 transition-all" />
            </button>
          </label>
          <p className="text-xs font-semibold text-gray-400">
            Get the latest product news and behind the scenes updates.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
