import React from "react";
import Image from "next/image";
import Link from "next/link";

const type = [
  {
    title: "Guide",
    link: "/guide",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "LogIn",
    link: "/Login",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 ">
      <Link href={"/"}>
        <Image
          src={"/Acertinity-Logo.png"}
          alt={"#Finto"}
          height={30}
          width={30}
        />
      </Link>

      <div className="flex gap-6 items-center ">
        {type.map((items) => (
          <Link href={items.link} key={items.title} className="">
            <span className="text-xl font-semibold text-black hover:text-gray-500 transition-all duration-200">
              {items.title}
            </span>
          </Link>
        ))}
        <button className="bg-[#2563EB] p-3 shadow-xl text-shadow-lg px-6  text-xl rounded-xl text-white font-semibold hover:text-gray-400 transtion-all duration-200">
          start free trail
        </button>
      </div>
    </div>
  );
};

export default Navbar;
