import React from "react";
import Link from "next/link";
import { Bug } from "lucide-react";

const ThirdCard = () => {
  return (
    <div className="m-2">
      <Card />
    </div>
  );
};

export default ThirdCard;

// Yha p ek ppura card create kar le okkh!..

export const Card = () => {
  return (
    <div className="rounded-3xl border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10">
      <div className="">
        <Link href="/Add-Document" className="ml-2 flex items-center gap-4">
          <div className="flex w-10 items-center rounded-4xl bg-red-600 p-2">
            <span className="text-white">
              <Bug />
            </span>
          </div>
          <h1 className="pb-2 text-xl font-semibold tracking-tight text-black">
            Manage Errors
          </h1>
        </Link>

        <div className="mt-2 ml-6 pl-8">
          <p className="text-sm text-gray-500">
            Add retries, fallback paths and to handle failures automatically
          </p>
        </div>
      </div>
    </div>
  );
};
