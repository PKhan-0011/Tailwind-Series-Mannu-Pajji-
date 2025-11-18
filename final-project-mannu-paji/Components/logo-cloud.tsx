"use client";

import React from "react";
import Image from "next/image";
import Container from "./Container";

import { easeInOut, motion } from "motion/react";

const LogoCloud = () => {
  const logos = [
    {
      title: "Google",
      src: "/google.webp",
    },
    {
      title: "Hired",
      src: "/microsoft.webp",
    },
    {
      title: "Granola",
      src: "/netflix (1).png",
    },
    {
      title: "Character Ai",
      src: "/microsoft.webp",
    },

    {
      title: "Oracle",
      src: "/google.webp",
    },
    {
      title: "Portola",
      src: "/netflix (1).png",
    },
  ];

  return (
    <Container className="mt-40 mb-10 border-t border-b border-gray-200 p-8">
      <section className="">
        <motion.div
          className="text-center"
          initial={{
            x: -10,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: easeInOut,
          }}
        >
          <h2 className="text-xl font-semibold tracking-wide text-black dark:text-gray-100">
            Trusted modern operators across industries.
          </h2>
          <h3 className="text-lg text-gray-400 dark:text-gray-200">
            From pilot to scale without chaos
          </h3>
        </motion.div>

        <div className="ml-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {logos.map((items) => (
            <motion.div
              key={items.title}
              className="ml-20"
              initial={{
                y: -10,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
                delay: 2,
              }}
            >
              <Image
                src={items.src}
                alt={"#LogoItems"}
                height={20}
                width={30}
                className="size-20 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default LogoCloud;

// Ek Aur chhiz hai like ki hammre pass src hai auur ek href hai okkh!..
// to jo href hai uske andar mughe http//localhostt aise dena padta hai okkh!..
// but in src mughe path denna padta hai okh! like /pohoto.png okkh!...
//
