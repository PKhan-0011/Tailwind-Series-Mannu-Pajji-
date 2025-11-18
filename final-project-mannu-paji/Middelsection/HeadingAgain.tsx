"use client";

import React from "react";
import Container from "@/Components/Container";
import Heading from "@/Components/heading";
import SubHeading from "@/Components/SubHeading";

const SpeedIndex = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-10">
      <Heading className="text-shadow-lg">
        Governed Ai, <br />
        Trusted Outcomes
      </Heading>

      <SubHeading className="py-8">
        Depploy AI agents that plan, act through your tools,and report
        outcomes-witout changing your teams work.
      </SubHeading>

      {/*Yha p actaully mughe images waal data dena padega okkh!.. like jaise first page hai na landing page wahi okkh!..*/}
      <LandingImage01 />
    </Container>
  );
};

export default SpeedIndex;

import Image from "next/image";
import { cn } from "@/lib/utils";
import { easeInOut, motion } from "motion/react";

export const LandingImage01 = () => {
  return (
    <div className="relative mt-20 min-h-140 w-full pt-20 perspective-distant transform-3d">
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: 20,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: easeInOut,
        }}
        className="perspective-[4000px]"
      >
        <Image
          src="/GenerateImage.png"
          alt="#"
          height={1080}
          width={1928}
          className={cn(
            "absolute inset-0 rounded-lg border-4 border-neutral-100 mask-r-from-20% mask-b-from-50% shadow-2xl dark:border-neutral-800",
          )}
          style={{
            transform: "rotateX(20deg) rotateY(20deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -400,
        }}
        animate={{
          opacity: 10,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: easeInOut,
        }}
        className="prespective-[4000px] translate-x-20 -translate-y-30"
      >
        <Image
          src="/GenerateImage.png"
          alt="#"
          height={1080}
          width={1928}
          className={cn(
            "absolute inset-0 rounded-lg border-4 border-neutral-200 mask-r-from-50% mask-b-from-80% shadow-2xl dark:border-neutral-800",
          )}
          style={{
            transform: "rotateX(20deg) rotateY(20deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};
