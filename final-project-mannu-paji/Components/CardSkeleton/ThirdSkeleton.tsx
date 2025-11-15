import React from "react";
import { DottedGlowBackground } from "../ui/dotted-glow-background";

import { ShieldAlert } from "lucide-react";

const ThirdSkeleton = () => {
  return (
    <div className="relative h-[300px] w-full items-center justify-center">
      <ShieldAlert />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-70% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="#444"
        glowColorLightVar="#777"
        colorDarkVar="#777"
        glowColorDarkVar="#0ea5e9"
        backgroundOpacity={0.4}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};

export default ThirdSkeleton;

// colorLightvar="--color-neutral-500"
// glowColorLightVar="--color-neutral-700"
// colorDarkVar="--color-neutral-700"
// glowColorDarkVar="--color-sky-900"

// yha p kuch dikkate ho rahi hai like sheild bich m nahi aa rha hai and ,uch moore chize ho rahi hai yha p okkh!..
