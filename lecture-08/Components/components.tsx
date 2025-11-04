import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Components = () => {
  return (
    <div
      className={cn(
        "min-h-80 rounded-2xl bg-neutral-200 w-full dark:bg-neutral-900",
        "bg-[radial-gradient(var(--color-red-300)_1px,transparent_1px)]",
        "bg-size-[10px_10px]",
        "p-8 flex flex-col items-center justify-center"
      )}
    >
      <h2 className="text-3xl mb-4 font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r  from-pink-500 via-red-300 to-pink-700 ">
        Easily modify with tailwind
      </h2>

      <p></p>

      <div
        className={cn(
          "bg-neutral-100 rounded-2xl h-40 w-50",
          "bg-[radial-gradient(var(--color-gray-300)_1px,transparent_1px)]",
          "bg-size-[10px_10px]",
          "shadow-2xl relative",
          "prespective-distant transform-3d"
        )}
      >
        <Image
          src="/Acertinity-Logo.png"
          alt="Acertinity"
          height={200}
          width={200}
          className="h-5xl w-full transform hover:rotate-x-20 hover:rotate-y-20 hover:translate-z-20 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Components;

// Hamm yha p acatully ye add kar rhe hai like backkground dots etc kuch okkh!..
