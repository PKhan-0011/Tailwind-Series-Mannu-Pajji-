import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="px-4 py-2 flex flex-col items-center justify-center mt-20 gap-14">
      <div className="bg-gray-200 w-[40%] py-2  rounded-full text-neutral-800 font-bold text-center ml-10 flex justify-center">
        <h1 className="flex items-center gap-2 text-neutral-500">
          What are the early-stages of requiremnents <ArrowRight />
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center ml-20 gap-6">
        <h1 className="text-center text-6xl font-bold max-w-2xl tracking-wide">
          Magically simplify accounting and taxes
        </h1>
        <p className="text-xl text-gray-500 font-semibold tracking-wide text-center max-w-xl">
          Automated bookkeeping. effortless tax filling. real-time insights Set
          up in 10mins. Back to building..
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-[#2563EB] p-3 shadow-xl text-shadow-lg px-6  text-xl rounded-xl text-white font-semibold hover:text-gray-400 transtion-all duration-200">
            Start free trail{" "}
          </button>
          <button className="flex items-center gap-2 border border-black p-3 rounded-lg border-dotted">
            Priceing <ArrowRight />
          </button>
        </div>
        <div className="mt-4">
          <h1 className="text-xl text-gray-400">
            Currently for US-based Deleware C-Corps
          </h1>
        </div>
      </div>

      <div className="mb-10 ml-20">
        <Image
          src={"/Screenshot (64).png"}
          alt={"Images"}
          height={500}
          width={600}
          className="rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
