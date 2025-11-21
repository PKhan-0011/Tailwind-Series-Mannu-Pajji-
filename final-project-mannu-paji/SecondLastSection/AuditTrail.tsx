// "use clinet";
// import React from "react";
// import Container from "@/Components/Container";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import FirstCard from "./CardSkeleton02/FirstCard";
// import SecondCard from "./CardSkeleton02/SecondCard";
// import ThirdCard from "./CardSkeleton02/ThirdCard";
// import SecondCardSkeleton from "@/Components/CardSkeleton/SecondCard/SecondCardSkeleton";

// const FeatureSecondary = () => {
//   return (
//     <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
//       <Container className="mb-2">
//         <div className="grid grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-neutral-800">
//               Agents Studio
//             </h2>
//             <CardDescription className="">
//               Design, launch and customize AI agents for maketing, sales,
//               support and ops, built around your workflows
//             </CardDescription>
//             <CardSkeleton>
//               {""}{" "}
//               <CardSkeleton01>
//                 <FirstCard />
//                 <SecondCard />
//                 <ThirdCard />
//               </CardSkeleton01>
//             </CardSkeleton>
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-neutral-800">
//               Ai Agents Orchestration..
//             </h2>
//             <CardDescription className="">
//               Design, launch and customize AI agents for maketing, sales,
//               support and ops, built around your workflows
//             </CardDescription>

//             <CardSkeleton>
//               <SecondCardSkeleton />
//             </CardSkeleton>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export const CardDescription = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "mt-2 max-w-sm text-sm text-balance text-neutral-600",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const CardSkeleton = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative inset-x-0 flex h-80 flex-col overflow-hidden perspective-distant sm:h-60 md:h-100",
//         className,
//       )}
//     >
//       {children}
//       {/* ye dhyan rtakh like kii iske andar sara data skeleton ayega card hai teen wo okkh!..*/}
//     </div>
//   );
// };

// // abb yha s mai actully carrd sakelton s chote chote components banunga okh!..

// export const CardSkeleton01 = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "absolute inset-0 mx-auto mt-4 h-full w-full max-w-sm flex-1 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-px",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

"use client";

import React from "react";
import Container from "@/Components/Container";
import { cn } from "@/lib/utils";
import { BellElectric } from "lucide-react";
import { MailPlus } from "lucide-react";
import { Tv } from "lucide-react";
import { CircleFadingPlus } from "lucide-react";
import { Activity } from "lucide-react";
import { Donut } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { ClockFading } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { motion } from "motion/react";

const AuditTrail = () => {
  return (
    <section className="relative mt-10 min-h-100 w-full overflow-hidden lg:mt-40">
      <Container className="mb-2">
        <div className="grid grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
          <div className="flex flex-col gap-2 overflow-hidden">
            <div className="flex flex-col gap-2 p-4">
              <h1 className="text-xl font-bold text-neutral-800">
                Audit Trail
              </h1>
              <CardDescription className="">
                <p>
                  Track every agent action with full input-output <br />{" "}
                  visiblity and timestamps.
                </p>
              </CardDescription>
            </div>
            <Card className="relative h-70 overflow-hidden p-1">
              <CardMaterials />
            </Card>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h1 className="text-xl font-bold text-neutral-800">
              Role-Based Access
            </h1>
            <CardDescription className="">
              <p>
                Controls who can launch, review, or manage agents <br /> based
                on roles.
              </p>
            </CardDescription>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AuditTrail;

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div className={cn("text-sm font-semibold text-gray-400", className)}>
        {children}
      </div>
    </>
  );
};

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "ml-7 w-90 overflow-hidden rounded-tl-2xl border-t-2 border-l-2 border-gray-200 bg-gray-100 lg:ml-22",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardMaterials = () => {
  return (
    <motion.div
      className="h-full cursor-pointer divide-y divide-neutral-200 overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: 4,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -10,
        scale: 1,
      }}
    >
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <BellElectric size={20} />
        <h1 className="text-xl font-semibold">Recent Activity</h1>
      </div>
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <MailPlus size={20} className="rounded bg-blue-600 p-1 text-white" />
        <h1 className="font-display text-sm text-gray-600">
          Personalize Email
        </h1>
        <Button className="text-2xs ml-20" variant="outline">
          {" "}
          <ClockFading /> 15s
        </Button>
      </div>
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <Tv className="rounded bg-purple-500 p-1 text-white" size={20} />
        <h1 className="font-display text-sm text-gray-600">Peer Review</h1>
        <Button
          className="ml-10 bg-red-400 text-sm text-white"
          variant="outline"
        >
          {" "}
          <LoaderCircle /> 3
        </Button>
        <button className="ml-4 rounded bg-red-400 p-2 px-4 text-sm text-white">
          Failed
        </button>
      </div>
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <CircleFadingPlus
          size={20}
          className="rounded bg-blue-600 p-1 text-white"
        />
        <h1 className="font-display text-sm text-gray-600">Content Drafting</h1>
        <button className="ml-20 rounded bg-amber-200 p-1 text-sm text-yellow-600">
          processing
        </button>
      </div>
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <Activity size={20} className="rounded bg-black p-1 text-white" />
        <h1 className="text-sm text-gray-600">Admin Approval</h1>
        <button className="ml-20 rounded bg-amber-200 p-1 text-sm text-yellow-600">
          processing
        </button>
      </div>
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <Donut size={20} className="rounded bg-purple-500 p-1 text-white" />
        <h1 className="text-sm text-gray-600">Weekly Campaign Reports</h1>
        <Button className="text-2xs ml-20" variant="outline">
          {" "}
          <ClockFading /> 15s
        </Button>
      </div>
      <div className="flex items-center gap-2 border-b p-2 pl-6">
        <Donut size={20} className="rounded bg-green-500 p-1 text-white" />
        <h1 className="text-sm text-gray-600">Seo Audit</h1>
      </div>
    </motion.div>
  );
};

// mailPlus {..props} aisa pass kiya hoga uske baad hi hamm ye sab kar sakte hai okkh!.
