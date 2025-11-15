import React from "react";
import { BadgeCheck } from "lucide-react";
import { Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Skeleton = () => {
  return (
    <div>
      <SkeletonCard />
    </div>
  );
};

export default Skeleton;

export const SkeletonCard = ({}) => {
  return (
    <div className="mx-auto w-full rounded-lg border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-700">
      <div className="flex items-center gap-3">
        <BadgeCheck className="size-6" />
        <p className="text-sm font-bold">Campaign Planner</p>
        <Badge text="1205" variant="warning" />
      </div>
      <p className="mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        Creates clear, ready-to-use campaign briefs using pproduct info,
        audience data, and past results.
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
