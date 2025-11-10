import React from "react";
import { cn } from "@/lib/utils";

const SubHeading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-semibold max-w-xl",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
