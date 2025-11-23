import React from "react";
import Container from "@/Components/Container";
import { Bug } from "lucide-react";
import { CopyPlus } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { Button } from "@/Components//ui/button";
import { CircleCheck } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="mt-30 h-120 w-full">
      <Container className="">
        <div className="flex gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-gray-400 lg:text-lg">
              Trusted by 500+ enterprises companies
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Affordable pricing <br />
              Easy scaling.
            </h1>
            <p className="text-sm text-gray-600 lg:text-lg">
              Start small to explore automation and agents as you <br />
              scale. and unlock enterprise-grade guarnted <br /> orchestration
              and reporting when ready
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-2xl font-semibold">
                <span className="rounded-lg bg-blue-600 p-2 text-white">
                  {" "}
                  <Bug />
                </span>{" "}
                Build-in Guardrials
              </div>

              <div className="flex items-center gap-3 text-2xl font-semibold">
                <span className="rounded-lg bg-violet-500 p-2 text-white">
                  <CopyPlus />{" "}
                </span>
                Agent Orchestration
              </div>

              <div className="flex items-center gap-3 text-2xl font-semibold">
                <span className="rounded-lg bg-red-600 p-2 text-white">
                  {" "}
                  <UserRoundSearch />{" "}
                </span>{" "}
                Human-in-the-loop
              </div>
            </div>
          </div>

          <div className="grid w-100 grid-cols-1 gap-4">
            <div className="flex cursor-pointer items-center justify-center gap-10 rounded-lg border-2">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black">
                  $10
                  <span className="text-xl font-normal text-gray-400">
                    /mon
                  </span>
                </h1>

                <p className="px-1 text-sm text-gray-500">
                  Perfect for individulas or small <br /> teams exploring
                  automation.
                </p>

                <div className="">
                  <Button className="p-4 py-2 text-xl" variant="default">
                    Start now
                  </Button>
                </div>
              </div>

              <div className="pl4 flex flex-col items-center gap-2 pt-4">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  gen ai
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  Gen Ai
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  devops
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  cloud
                </div>
              </div>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-10 rounded-lg border-2 bg-gray-50 p-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black">
                  $60
                  <span className="text-xl font-normal text-gray-400">
                    /mon
                  </span>
                </h1>

                <p className="px-1 text-sm text-gray-500">
                  Perfect for individulas or small <br /> teams exploring
                  automation.
                </p>

                <div className="">
                  <Button className="p-4 py-2 text-xl" variant="default">
                    Start now
                  </Button>
                </div>
              </div>

              <div className="pl4 flex flex-col items-center gap-2 pt-4">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  gen ai
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  Gen Ai
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  devops
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CircleCheck size={20} />
                  </span>{" "}
                  cloud
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
