import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-4", className)}>{children}</div>
  );
};

export default Container;

// Yha p jo acatully children hai wo like div ya fir jsx m hi ate hai taht's why hamm unko React.ReactNode m rakhte hai okkh!>.
// cn lene ka asli maksd yahi hai like ki hamm yah p acatully sara data jo hai wo ek chiz m rakh lenge okkh!..
// uske baad agar dono m kuch same chize to wo ek hi lega bina error hai jo accha hoga whai lega that reason cn ka use karne ka okkh!>.
