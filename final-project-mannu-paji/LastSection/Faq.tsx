import React from "react";
import Container from "@/Components/Container";
import MessageSvg from "./MessageSvg";
import { Minus } from "lucide-react";

const Faq = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container>
        <MessageSvg />
        <h1 className="mt-6 max-w-sm space-y-2 text-3xl font-bold text-shadow-lg md:mt-8 lg:mt-10">
          Frequently Asked Questions
        </h1>
      </Container>
    </section>
  );
};

export default Faq;

export const question1 = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <button className="w-full">
      <div className="flex items-center justify-between bg-neutral-100">
        <h3>What is Agenforce Ai</h3>
        <div className="flex size-6 items-center justify-center rounded-full bg-black"></div>
      </div>
    </button>
  );
};
