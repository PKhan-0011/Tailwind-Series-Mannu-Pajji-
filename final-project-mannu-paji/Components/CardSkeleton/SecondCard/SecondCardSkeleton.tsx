import React from "react";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";

const SecondCardSkeleton = () => {
  return (
    <div className="absolute inset-x-0 flex h-full w-full flex-1 items-center justify-center gap-2 rounded-t-3xl p-2">
      <Circle className="flex items-center justify-center border-neutral-200 shadow-sm">
        <Medal size={80} className="text-neutral-500" />
      </Circle>
      <Circle className="z-8 flex size-66 items-center justify-center border-2 bg-gray-100 shadow-xs"></Circle>
      <Circle className="z-7 flex size-72 items-center justify-center border-2 bg-neutral-100/30 shadow-xs"></Circle>
      <Circle className="z-6 flex size-82 items-center justify-center border-2 bg-neutral-100/50 shadow-xs"></Circle>
      <Circle className="z-5 flex size-90 items-center justify-center border-2 bg-neutral-100/90 shadow-xs"></Circle>
    </div>
  );
};

export default SecondCardSkeleton;

export const Circle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-x-0 z-10 m-auto size-40 rounded-full border border-transparent bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};
