import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-5xl mx-auto bg-neutral-100 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
