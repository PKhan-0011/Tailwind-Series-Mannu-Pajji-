import React from "react";
import Container from "@/Components/Container";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/Components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 py-10 md:py-14 lg:py-20 dark:border-neutral-800">
      <Container className="grid grid-cols-1 gap-5 md:grid-cols-5">
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

        <div className="">
          <h4></h4>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
