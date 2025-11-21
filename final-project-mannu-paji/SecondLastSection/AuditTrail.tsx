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
                Track every agent action with full input-output <br /> visiblity
                and timestamps.
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
    <div className="h-full rounded-2xl border-2 border-neutral-200 bg-white">
      <div className="flex items-center gap-2 divide-y divide-neutral-200 border-b p-2 pl-6">
        <BellElectric size={20} />
        <h1 className="text-xl font-semibold">Recent Activity</h1>
      </div>
    </div>
  );
};
