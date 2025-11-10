import React from "react";
import Container from "./Container";
import Heading from "./heading";
import SubHeading from "@/Components/SubHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="p-10 md:p-20 lg:pt-32">
      <Container className="">
        <Heading as="h1">
          Agents That do the work. <span>Appprovals that keep you safe</span>
        </Heading>

        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and rotate
          outcomes-without chnaging how your teams work.
        </SubHeading>

        <div className="flex items-center gap-6">
          <Link href="#">
            <Button className="p-5" variant={"default"}>
              Start your 30-day trail
            </Button>
          </Link>

          <Link href="#">
            <Button className="p-5" variant={"outline"}>
              Start your free trail for 30-days
            </Button>
          </Link>
        </div>

        <div className="relative min-h-140 w-full">
          <Image src="" alt="#" />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
