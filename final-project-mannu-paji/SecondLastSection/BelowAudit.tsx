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

const BelowAudit = () => {
  return (
    <div className="grid grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
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
          className="mt-10 h-80 w-120 bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"
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
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-xl font-bold text-neutral-800">Guardail Engine</h1>
        <CardDescription className="">
          <p>
            Appliies brand, tone, and policy checks before output <br /> goes
            live..
          </p>
        </CardDescription>

        <div className="ml-14 space-y-4 border border-red-400">
          <div className="">
            <Button className="bg-blue-100 text-blue-400">
              <SunMedium size={20} /> Brand & Style
            </Button>
            <Button className="bg-green-100 text-green-400">
              {" "}
              <UserRound /> Compliance & policy
            </Button>
          </div>
          <div className="">
            <Button className="bg-purple-100 text-purple-400">
              {" "}
              <Rocket size={20} className="" /> Content Safety Fiilters
            </Button>
            <Button className="bg-gray-300 text-gray-700 hover:bg-white">
              {" "}
              <Pointer size={20} className="" /> Approval Triggers
            </Button>
          </div>
          <div className="">
            <Button variant="outline" className="bg-pink-100 text-red-400">
              <Search /> Output Quality Checks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowAudit;
