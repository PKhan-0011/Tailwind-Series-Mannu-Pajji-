"use client";
import React from "react";
import { easeInOut, motion } from "motion/react";

const Svg = () => {
  return (
    <div className="h-50 w-50 flex items-center justify-center rounded-xl bg-gray-200">
      <SVG />
    </div>
  );
};

export default Svg;

export const SVG = () => {
  return (
    <motion.svg
      whileHover={{
        x: [0, 10, 0, -10, 0, 10, -10, 0],
        transition: { duration: 0.3 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="var(--color-orange-500)"
      className="stroke-red-500"
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
      />
    </motion.svg>
  );
};

// isme Svg ka jo animation wala hai jo like alg alg part s milke banega okkh to todha sa dhyan rakhio okkh!..
// Like isme kahi p bell k niche wala hai usme wha p motion lga okkh! taki wo bell catullt chlat hua nzr aa jaye haina !..
