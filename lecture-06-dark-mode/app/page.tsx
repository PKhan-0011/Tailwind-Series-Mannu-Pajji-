import Image from "next/image";

import {
  Gemini,
  Gemini02,
  Gemini03,
  Gemini04,
  Gemini05,
} from "@/context/Layouts";

export const Icons = [
  {
    title: "Gemini",
    size: "",
    icon: <Gemini />,
  },

  {
    title: "Google",
    size: "",
    icon: <Gemini02 />,
  },

  {
    title: "Facebook",
    size: "",
    icon: <Gemini03 />,
  },

  {
    title: "Api",
    size: "",
    icon: <Gemini04 />,
  },
  {
    title: "Gemini02",
    size: "",
    icon: <Gemini05 />,
  },
];

export default function Home() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="absolute h-90 w-80 shadow-2xl border-neutral-200 rounded-xl">
        <div className="flex items-center gap-4 justify-center">
          {Icons.map((items) => (
            <div
              key={items.title}
              className="flex items-center justify-center mt-20"
            >
              {items.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
