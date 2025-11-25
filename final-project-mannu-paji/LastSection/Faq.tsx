"use client";
import React from "react";
import Container from "@/Components/Container";
import MessageSvg from "./MessageSvg";
import { Minus } from "lucide-react";
import { useState } from "react";
import { easeInOut, motion } from "motion/react";
import { Plus } from "lucide-react";

const Faq = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container>
        <MessageSvg />
        <h1 className="mt-6 max-w-sm space-y-2 text-3xl font-bold text-shadow-lg md:mt-8 lg:mt-10">
          Frequently Asked Questions
        </h1>
        <div className="">
          <Question1 />
          <Question2 />
          <Question3 />
          <Question4 />
          <Question5 />
        </div>
      </Container>
    </section>
  );
};

export default Faq;

export const Question1 = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [Open, SetOpen] = useState(false);

  return (
    <button
      onClick={() => SetOpen(!Open)}
      className="mt-2 w-full overflow-hidden rounded-3xl border border-black bg-neutral-100 p-4 md:mt-4 md:p-4 lg:mt-6"
    >
      <div className="flex items-center justify-between bg-neutral-100 p-1 md:p-1">
        <h3 className="text-md font-bold md:text-lg lg:text-xl">
          What is Agneforce Ai
        </h3>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="flex size-6 scale-3d items-center justify-center rounded-full bg-black text-white transition"
        >
          {Open ? <Minus strokeWidth={2} /> : <Plus strokeWidth={2} />}
        </motion.div>
      </div>
      {Open && (
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="pl-2 text-left text-sm text-neutral-600 lg:pl-2"
        >
          Agneforce AI is an AI-powered platform designed to help developers,
          creators, and businesses build smart applications quickly. It provides
          tools for text generation, chatbots, automation, content creation, and
          data processing using advanced machine-learning models.
        </motion.p>
      )}
    </button>
  );
};

export const Question2 = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [Open, SetOpen] = useState(false);

  return (
    <button
      onClick={() => SetOpen(!Open)}
      className="mt-2 w-full overflow-hidden rounded-3xl border border-black bg-neutral-100 p-4 md:mt-4 md:p-4 lg:mt-6"
    >
      <div className="flex items-center justify-between bg-neutral-100 p-1 md:p-1">
        <h3 className="text-md font-bold md:text-lg lg:text-xl">
          Who is AgenForce AI built for?
        </h3>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="flex size-6 items-center justify-center rounded-full bg-black text-white"
        >
          {Open ? <Minus strokeWidth={2} /> : <Plus strokeWidth={2} />}
        </motion.div>
      </div>
      {Open && (
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="pl-2 text-left text-sm text-neutral-600 lg:pl-2"
        >
          Agentforce AI is built for modern enterprises that want to automate
          complex business workflows using intelligent agents. It is designed
          for sales, support, marketing, commerce, and IT teams who need AI
          assistants that can take real actions — like updating CRM records,
          resolving support cases, scheduling
        </motion.p>
      )}
    </button>
  );
};

export const Question3 = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [Open, SetOpen] = useState(false);

  return (
    <button
      onClick={() => SetOpen(!Open)}
      className="mt-2 w-full overflow-hidden rounded-3xl border border-black bg-neutral-100 p-4 md:mt-4 md:p-4 lg:mt-6"
    >
      <div className="flex items-center justify-between bg-neutral-100 p-1 md:p-1">
        <h3 className="text-md font-bold md:text-lg lg:text-xl">
          How does Agenforce AI work?
        </h3>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="flex size-6 items-center justify-center rounded-full bg-black text-white"
        >
          {Open ? <Minus strokeWidth={2} /> : <Plus strokeWidth={2} />}
        </motion.div>
      </div>
      {Open && (
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="pl-2 text-left text-sm text-neutral-600 lg:pl-2"
        >
          Agentforce AI works by combining large language models with your
          business data and workflows, allowing AI agents to take real actions
          instead of just answering questions. When a user gives a prompt, the
          system processes it through an LLM that understands intent, then
          checks connected data sources like CRM records, customer history, or
          product information.
        </motion.p>
      )}
    </button>
  );
};

export const Question4 = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [Open, SetOpen] = useState(false);

  return (
    <button
      onClick={() => SetOpen(!Open)}
      className="mt-2 w-full overflow-hidden rounded-3xl border border-black bg-neutral-100 p-4 md:mt-4 md:p-4 lg:mt-6"
    >
      <div className="flex items-center justify-between bg-neutral-100 p-1 md:p-1">
        <h3 className="text-md font-bold md:text-lg lg:text-xl">
          is There a free trail available?
        </h3>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="flex size-6 items-center justify-center rounded-full bg-black text-white"
        >
          {Open ? <Minus strokeWidth={2} /> : <Plus strokeWidth={2} />}
        </motion.div>
      </div>
      {Open && (
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="pl-2 text-left text-sm text-neutral-600 lg:pl-2"
        >
          Yes, we offer a 14-day free trail so you can explore all features
          before committing to a plan
        </motion.p>
      )}
    </button>
  );
};

export const Question5 = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [Open, SetOpen] = useState(false);

  return (
    <button
      onClick={() => SetOpen(!Open)}
      className="mt-2 w-full overflow-hidden rounded-3xl border border-black bg-neutral-100 p-4 md:mt-4 md:p-4 lg:mt-6"
    >
      <div className="flex items-center justify-between bg-neutral-100 p-1 md:p-1">
        <h3 className="text-md font-bold md:text-lg lg:text-xl">
          What kind of support do you provide?
        </h3>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="flex size-6 items-center justify-center rounded-full bg-black text-white"
        >
          {Open ? <Minus strokeWidth={2} /> : <Plus strokeWidth={2} />}
        </motion.div>
      </div>
      {Open && (
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: easeInOut,
          }}
          className="pl-2 text-left text-sm text-neutral-600 lg:pl-2"
        >
          Helping! to building ai agents. and Provide agents support to getting
          a ai jobs!..
        </motion.p>
      )}
    </button>
  );
};
