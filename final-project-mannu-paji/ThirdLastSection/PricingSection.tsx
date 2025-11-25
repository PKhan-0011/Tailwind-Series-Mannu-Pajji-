"use client";
import React from "react";
import Container from "@/Components/Container";
import { Bug } from "lucide-react";
import { CopyPlus } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { Button } from "@/Components//ui/button";
import { CircleCheck } from "lucide-react";
import { easeInOut, motion } from "motion/react";

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
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(3px)",
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.3,
                  ease: easeInOut,
                }}
                whileHover={{
                  filter: "blur(0px)",
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.6, ease: easeInOut },
                }}
                className="flex w-80 cursor-pointer items-center gap-3 rounded border border-black bg-gray-50 p-2 pl-2 text-lg font-semibold text-gray-500 md:text-xl lg:text-2xl dark:text-gray-200"
              >
                <span className="rounded-lg bg-blue-600 p-1 text-white dark:rounded-2xl dark:border-2 dark:bg-neutral-700">
                  {" "}
                  <Bug />
                </span>{" "}
                Build-in Guardrials
              </motion.div>

              <div className="flex w-80 items-center gap-3 rounded border border-black bg-gray-50 p-2 pl-2 text-lg font-semibold text-gray-500 md:text-xl lg:text-2xl dark:text-gray-200">
                <span className="rounded-lg bg-violet-500 p-1 text-white dark:rounded-2xl dark:border-2 dark:bg-neutral-700">
                  <CopyPlus />{" "}
                </span>
                Agent Orchestration
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(0px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut,
                  delay: 1,
                }}
                whileHover={{
                  filter: "blur(0px)",
                  scale: 1.1,
                  transition: { duration: 1, ease: easeInOut },
                }}
                className="flex w-80 items-center gap-3 rounded border border-black bg-gray-50 p-2 pl-2 text-lg font-semibold text-gray-500 md:text-xl lg:text-2xl dark:text-gray-200"
              >
                <span className="rounded-lg bg-red-600 p-1 text-white dark:rounded-2xl dark:border-2 dark:bg-neutral-700">
                  {" "}
                  <UserRoundSearch />{" "}
                </span>{" "}
                Human-in-the-loop
              </motion.div>
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
