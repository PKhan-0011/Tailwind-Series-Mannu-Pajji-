import React from "react";
import { Button } from "@/Components/ui/button";
import { CardDescription } from "./AuditTrail";
import { Search } from "lucide-react";
import { Rocket } from "lucide-react";
import { Pointer } from "lucide-react";
import { SunMedium } from "lucide-react";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Undo } from "lucide-react";
import { easeInOut, motion } from "motion/react";
import { Card } from "./AuditTrail";
import { Milestone } from "lucide-react";

const BelowAudit = () => {
  return (
    <motion.div
      className="grid grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800"
      initial={{
        opacity: 0,
        y: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 5,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: easeInOut,
      }}
    >
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-xl font-bold text-neutral-800">Audit Trail</h1>
          <CardDescription className="">
            <p>
              Track every agent action with full input-output <br /> visiblity
              and timestamps.
            </p>
          </CardDescription>
        </div>
        <div
          className="mt-10 h-80 w-120 bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] mask-t-from-10% bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"
          style={{
            transform: "rotateY(20deg) rotateX(10deg) rotateZ(30deg)",
          }}
        >
          <div className="relative z-1 flex h-80 w-120 items-center justify-center gap-20">
            <div className="flex items-center gap-2 rounded-full border border-orange-500 bg-orange-100 p-1 px-4 py-2 font-medium text-orange-500">
              {" "}
              <Search />
              <span>Processing...</span>{" "}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-500 bg-green-100 p-1 px-4 py-2 font-medium text-green-500">
              {" "}
              <SunMedium />
              <span>FeedBack...</span>{" "}
            </div>
          </div>

          <div className="text-gray-400">
            <Undo />
          </div>
        </div>
      </div>
      {/*Ye jo hai wo like 2nd wala part hai okkh!..*/}
      <div className="flex flex-col gap-2 pt-4 pl-4">
        <h1 className="text-xl font-bold text-neutral-800">Guardail Engine</h1>
        <CardDescription className="">
          <p>
            Appliies brand, tone, and policy checks before output <br /> goes
            live..
          </p>
        </CardDescription>

        <div className="ml-2 h-full space-y-2 bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.20)_1px,transparent_1px)] mask-t-from-50% mask-r-from-90% bg-[size:24px_24px] pt-14 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]">
          <div className="flex gap-6 space-y-2 pl-1 md:pl-2">
            <Button className="bg-blue-100 text-blue-400">
              <SunMedium size={20} /> Brand & Style
            </Button>
            <Button className="bg-green-100 text-green-400">
              {" "}
              <UserRound /> Compliance & policy
            </Button>
          </div>
          <div className="flex gap-4 space-y-2 pl-1 lg:pl-2">
            <Button className="bg-purple-100 text-purple-400">
              {" "}
              <Rocket size={20} className="" /> Content Safety Fiilters
            </Button>
            <Button className="bg-gray-300 text-gray-700 hover:bg-white">
              {" "}
              <Pointer size={20} className="" /> Approval Triggers
            </Button>
          </div>
          <div className="ml-20">
            <Button variant="outline" className="bg-pink-100 text-red-400">
              <Search /> Output Quality Checks
            </Button>
          </div>

          <Card className="p-b-none relative mt-4 h-50 w-80 overflow-hidden p-2">
            <CardContent />
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default BelowAudit;

export const CardContent = () => {
  return (
    <motion.div
      className="h-full cursor-pointer rounded-lg border border-black bg-white"
      initial={{
        zIndex: 1,
        opacity: 0,
        y: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 4,
        filter: "blur(2px)",
      }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: easeInOut,
      }}
      whileHover={{
        zIndex: 20,
        scale: 1.02,
        y: -4,
      }}
    >
      <div className="flex items-center gap-4 p-4">
        <span className="rounded-xl bg-blue-600 p-1 text-white hover:bg-amber-200 hover:text-black">
          {" "}
          <Milestone />{" "}
        </span>
        <h1 className="text-xl font-semibold">Approval Triggers</h1>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <h1 className="text-lg">Tone Guidance</h1>
        <p className="pb-2 text-sm text-gray-600">
          Automatically Upper apprecriate counted predicted <br /> criteria
          enturing empty review and compulsart{" "}
        </p>
      </div>
    </motion.div>
  );
};
