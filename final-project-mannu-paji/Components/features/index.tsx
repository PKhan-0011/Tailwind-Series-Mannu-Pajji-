// Yha p features section ayega okkh!..

import React from "react";
import Container from "@/Components/Container";
import Heading from "@/Components/heading";
import SubHeading from "../SubHeading";
import Card, { CardSkeleton } from "@/Components/features/card";
import { CardTitle } from "@/Components/features/card";
import { CardContent } from "@/Components/features/card";
import { Plus } from "lucide-react";
import Skeleton from "@/Components/CardSkeleton/Skeleton";
import ThirdSkeleton from "../CardSkeleton/ThirdSkeleton";

const FeaturesSection = () => {
  return (
    <Container className="py-10 md:py-16 lg:py-16">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-bold shadow text-shadow-lg md:text-2xl lg:text-3xl">
          Build for Fast-Moving <br /> Teams That Need Control.
        </h1>

        <h2 className="max-w-80 text-sm font-semibold text-gray-400 text-shadow-lg">
          Deploy AI agents that plan, act through your tools, and report
          outcomes-without changing{" "}
          <span className="pl-20">how your teams work..</span>
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="rounded-tl-4xl rounded-bl-4xl shadow-lg">
          <CardSkeleton>
            {" "}
            <Skeleton />
          </CardSkeleton>
          <CardContent className="flex items-center gap-4">
            <CardTitle className="">
              Prebuild Agents, Tuned To your WorkFlows
            </CardTitle>
            <button className="flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition duration-200 active:scale-[0.98] md:size-10 dark:border-neutral-800">
              <Plus />
            </button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardSkeleton></CardSkeleton>
          <CardContent className="flex items-center gap-4">
            <CardTitle className="">
              Automates Handoffs, Reduce Ops Friction
            </CardTitle>
            <button className="flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition duration-200 active:scale-[0.98] md:size-10 dark:border-neutral-800">
              <Plus />
            </button>
          </CardContent>
        </Card>

        <Card className="rounded-tr-4xl rounded-br-4xl shadow-lg">
          <CardSkeleton>
            <ThirdSkeleton />
          </CardSkeleton>
          <CardContent className="flex items-center gap-4">
            <CardTitle className="">
              Approvals, Guardils, and full Auditabilty
            </CardTitle>
            <button className="flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition duration-200 active:scale-[0.98] md:size-10 dark:border-neutral-800">
              <Plus />
            </button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default FeaturesSection;
