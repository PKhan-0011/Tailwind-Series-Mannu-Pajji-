import React from "react";
import Container from "@/Components/Container";
import { Workflow } from "lucide-react";
import { Snowflake } from "lucide-react";
import { Infinity } from "lucide-react";

const Section = () => {
  return (
    <Container className="">
      <div className="grid h-50 w-full grid-cols-1 items-center justify-center gap-6 lg:mt-4 lg:grid-cols-3 lg:items-center lg:pt-6">
        <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-black bg-neutral-100 p-1">
          <h1 className="flex items-center gap-2 text-xl font-semibold">
            <span>
              <Workflow />
            </span>{" "}
            WorkFlow Automation
          </h1>

          <p className="pl-8 text-sm text-gray-500 dark:text-white">
            Automate campaign, tickets and CRM{" "}
            <span>updates without manual handoffs.</span>{" "}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-black bg-neutral-100 p-1">
          <h1 className="flex items-center gap-2 text-xl font-semibold">
            <span>
              <Infinity size={30} />
            </span>{" "}
            Integration Fabric
          </h1>

          <p className="pl-8 text-sm text-gray-500 dark:text-white">
            Automate campaign, tickets and CRM{" "}
            <span>updates without manual handoffs.</span>{" "}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-black bg-neutral-100 p-2">
          <h1 className="flex items-center gap-2 text-xl font-semibold">
            <span>
              <Snowflake />
            </span>{" "}
            Human-in-the-Loop
          </h1>

          <p className="pl-8 text-sm text-gray-500 dark:text-white">
            Automate campaign, tickets and CRM{" "}
            <span>updates without manual handoffs.</span>{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Section;
