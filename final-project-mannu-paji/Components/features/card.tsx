import React from "react";
import { cn } from "@/lib/utils";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;

// Ye jo tarikha hai isse hamm actaully div k andar chikdren paas karenge okkh!..

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("text-lg font-bold md:text-xl", className)}>
      {children}
    </div>
  );
};

// abb mai yha s like card Title k according bhi mai chize kar sakta hu like
// Card k andar chikdren add kar sakta huu okkh!..

export const CardContent = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("px-4, pb-4", className)}>{children}</div>;
};

export const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("min-h-40 md:min-h-60", className)}>{children}</div>
  );
};
