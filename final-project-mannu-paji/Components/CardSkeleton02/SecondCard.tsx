import React from "react";
import Link from "next/link";
import { Cog } from "lucide-react";

const SecondCard = () => {
  return (
    <div className="m-2">
      <Card />
    </div>
  );
};

export default SecondCard;

// Yha p ek ppura card create kar le okkh!..

export const Card = () => {
  return (
    <div className="rounded-3xl border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10">
      <div className="">
        <Link href="/Add-Document" className="ml-2 flex items-center gap-4">
          <div className="flex w-10 items-center rounded-4xl bg-green-600 p-2">
            <span className="text-white">
              <Cog />
            </span>
          </div>
          <h1 className="pb-2 text-xl font-semibold tracking-tight text-black">
            Define Processing Logic
          </h1>
        </Link>

        <div className="mt-2 ml-6 pl-8">
          <p className="text-sm text-gray-500">
            Create workflows, decision points, and conditional actions for each
            task.
          </p>
        </div>
      </div>
    </div>
  );
};
