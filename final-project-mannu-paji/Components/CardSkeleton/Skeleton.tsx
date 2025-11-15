import React from "react";
import { BadgeCheck } from "lucide-react";
import { Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Skeleton = () => {
  return (
    <div className="relative h-[300px] w-full">
      <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<BadgeCheck className="size-6" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using pproduct info,
        audience data, and past results."
        badge={<Badge text="1205" variant="warning" />}
      />
    </div>
  );
};

// dekh bhai kabhi bhi abb props pass kario to ek chiz ka dhyan rakhio like ki props agar koi value hai like string wali jaise
// text wagarh to hamm " " usko string m paas kardo okk!H but agar koi component hai to usko {} is bracket m dena padega okkh!..

export default Skeleton;

export const SkeletonCard = ({
  className,
  icon,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className: string;
}) => {
  return (
    <div className="mx-auto w-full rounded-lg border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-700">
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-bold">{title}</p>
        {badge}
      </div>
      <p className="mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <div className="rounded-sm bg-neutral-300 px-2 py-1 text-xs dark:bg-neutral-100">
          Googlde ads
        </div>

        <div className="rounded-sm bg-neutral-300 px-2 py-1 text-xs dark:bg-neutral-100">
          SassAd
        </div>

        <div className="rounded-sm bg-neutral-300 px-2 py-1 text-xs dark:bg-neutral-100">
          Content
        </div>
      </div>
    </div>
  );
};

// Ye above wala jo skeleto wala hai ye isse sirf first card hi banega okkh!..

// Ye appan n banaya hai okkh! to dhyan rakhio like ki ham bhi ye create kar sakte hai okkh!..

// export const Badge = () => {
//   return (
//     <div className="flex items-center rounded-lg border-0 bg-amber-200 px-2 py-1">
//       <Clock3 className="size-4 text-gray-500" />
//       <h1 className="text-sm text-gray-400">==</h1>
//     </div>
//   );
// };

export const Badge = ({
  variant,
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border p-1",
        variant === "danger" && "border border-red-400 bg-red-300 text-red-500",
        variant === "warning" &&
          "border border-yellow-500 bg-yellow-300 text-gray-500",
        variant === "success" &&
          "border border-green-500 bg-green-300 text-blue-500",
      )}
    >
      <Clock3 className={cn("size-3")} />
      <ArrowRight className={cn("size-3")} />
      <p className="text-xs font-normal">{text}</p>
    </div>
  );
};

// badge jo hai mai wo khud sbhi ban sakta tha okkh! but mughe todha first time good ui banana tha that's why maine Yha s dekha hai okkh!..
