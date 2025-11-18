import React from "react";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import Image from "next/image";

const SecondCardSkeleton = () => {
  return (
    <div className="rotateX(15deg) rotateY(20deg) absolute inset-x-0 flex h-full w-full flex-1 items-center justify-center gap-2 rounded-t-3xl bg-gray-400 p-2 dark:bg-white">
      <Circle className="rotate-[] flex transform items-center justify-center border-neutral-200 shadow-sm transition-all ease-in-out">
        <Medal size={80} className="text-neutral-500" />
      </Circle>
      <Circle className="z-8 flex size-66 items-center justify-center border-2 bg-gray-100 shadow-xs">
        <div className="relative flex size-8 items-center justify-center border border-transparent bg-white shadow-black/10">
          <Image src="/meta (1).svg" alt="meta" height={20} width={20} />
        </div>
      </Circle>
      <Circle className="relative z-7 flex size-72 items-center justify-center border-4 bg-neutral-100/30 shadow-xs">
        <div className="flex size-8 items-center justify-center border border-transparent bg-white shadow-black/10">
          <Image src="/github.svg" alt="meta" height={20} width={20} />
        </div>
      </Circle>
      <Circle className="z-6 flex size-82 items-center justify-center border-6 bg-neutral-100/50 shadow-xs"></Circle>
      <Circle className="z-5 flex size-90 items-center justify-center border-8 bg-neutral-100/90 shadow-xs"></Circle>
    </div>
  );
};

export default SecondCardSkeleton;

export const Circle = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: string;
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

// Bhai ispe images chal nahi rhi hai isko sahi s dekhio okkh!..
// Yha pe ek aur kaam kar liyo like moveing wala nahi wo like hai na jo tilted images todhe waisa banana hai bna liyo khud s okkh!..
// href jo hota hai wo next image , nahi ata and mai isme patth rakhta hu jaise http:localhost.com erc etc ye ayega ookkh!..
