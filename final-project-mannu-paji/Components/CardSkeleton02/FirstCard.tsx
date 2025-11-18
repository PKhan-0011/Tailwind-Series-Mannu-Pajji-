import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FilePlusCorner } from "lucide-react";
import { Button } from "../ui/button";
import { BadgeEuro } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Layers } from "lucide-react";

const FirstCard = () => {
  return (
    <div className="m-2">
      <Card />
    </div>
  );
};

export default FirstCard;

// Yha p ek ppura card create kar le okkh!..

export const Card = () => {
  return (
    <div className="rounded-3xl border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10">
      <div className="">
        <Link href="/Add-Document" className="ml-2 flex items-center gap-4">
          <div className="flex w-10 items-center rounded-4xl bg-blue-600 p-2">
            <span className="text-white">
              <FilePlusCorner />
            </span>
          </div>
          <h1 className="pb-2 text-3xl font-semibold tracking-tight text-black">
            Connect Data
          </h1>
        </Link>

        <div className="mt-2 ml-6 pl-8">
          <p className="text-sm text-gray-500">
            Link CRMs,helpdesk, and API to give agents secure, role-based
            access.
          </p>
          <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
            <Button variant={"outline"} className="text-gray-500">
              {" "}
              <BadgeEuro />
              Salesforce
            </Button>
            <Button variant={"outline"} className="text-gray-500">
              {" "}
              <Sparkles />
              HubSpot
            </Button>
            <Button variant={"outline"} className="text-gray-500">
              {" "}
              <Layers />
              Sheets
            </Button>
            <Button variant={"outline"} className="text-gray-500">
              {" "}
              {+3}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
