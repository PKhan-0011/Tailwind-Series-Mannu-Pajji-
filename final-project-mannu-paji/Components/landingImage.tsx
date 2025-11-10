"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { easeInOut, motion } from "motion/react";

const LandingImage = () => {
  return (
    <div className="relative min-h-140 w-full mt-20 pt-20 perspective-distant transform-3d">
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
          src="/4.webp"
          alt="#"
          height={1080}
          width={1928}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-50% shadow-2xl border-4 border-neutral-100 dark:border-neutral-800"
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
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: easeInOut,
        }}
        className="prespective-[4000px] translate-x-20 -translate-y-30 "
      >
        <Image
          src="/4.webp"
          alt="#"
          height={1080}
          width={1928}
          className={cn(
            "absolute inset-0  rounded-lg mask-r-from-50% mask-b-from-80% shadow-2xl border-4 border-neutral-200 dark:border-neutral-800"
          )}
          style={{
            transform: "rotateX(20deg) rotateY(20deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LandingImage;
