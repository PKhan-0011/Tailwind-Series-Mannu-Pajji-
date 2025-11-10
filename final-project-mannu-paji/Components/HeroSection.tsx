import React from "react";
import Container from "./Container";
import Heading from "./heading";
import SubHeading from "@/Components/SubHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Landingpage from "@/Components/landingImage";
import { Lancelot } from "next/font/google";

const HeroSection = () => {
  return (
    <div className="p-10 md:p-20 lg:pt-32">
      <Container className="">
        <Heading as="h1">
          Agents That do the work. <span>Appprovals that keep you safe</span>
        </Heading>

        <SubHeading className="py-8" as="p">
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

        <Landingpage />
      </Container>
    </div>
  );
};

export default HeroSection;

// presepective-distance and transform-3d ayega isme mughe jo elemeny hai era wp rotate ho jayega 3d pkkh!./.
