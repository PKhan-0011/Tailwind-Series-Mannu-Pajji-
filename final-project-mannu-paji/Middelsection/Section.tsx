import React from "react";
import Container from "@/Components/Container";
import { Workflow } from "lucide-react";
import { Snowflake } from "lucide-react";
import { Infinity } from "lucide-react";

const Section = () => {
  return (
    <Container className="">
      <div className="mb-8 grid h-80 w-full grid-cols-1 justify-center gap-6 lg:grid-cols-3 lg:items-center">
        <div className="flex flex-col items-center gap-2">
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

        <div className="flex flex-col items-center gap-2">
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

        <div className="flex flex-col items-center gap-2">
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
