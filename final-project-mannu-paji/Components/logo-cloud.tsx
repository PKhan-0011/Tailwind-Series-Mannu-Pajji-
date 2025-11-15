import React from "react";
import Image from "next/image";
import Container from "./Container";

const LogoCloud = () => {
  const logos = [
    {
      title: "Google",
      src: "/google.webp",
    },
    {
      title: "Hired",
      src: "/microsoft.webp",
    },
    {
      title: "Granola",
      src: "/netflix (1).png",
    },
    {
      title: "Character Ai",
      src: "/microsoft.webp",
    },

    {
      title: "Oracle",
      src: "/google.webp",
    },
    {
      title: "Portola",
      src: "/netflix (1).png",
    },
  ];

  return (
    <Container className="mt-40 mb-10 border-t p-4">
      <section className="">
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-wide text-black dark:text-gray-100">
            Trusted modern operators across industries.
          </h2>
          <h3 className="text-lg text-gray-400 dark:text-gray-200">
            From pilot to scale without chaos
          </h3>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 ml-10">
          {logos.map((items) => (
            <div key={items.title} className=" ml-20">
              <Image
                src={items.src}
                alt={"#LogoItems"}
                height={20}
                width={30}
                className="size-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default LogoCloud;

// Ek Aur chhiz hai like ki hammre pass src hai auur ek href hai okkh!..
// to jo href hai uske andar mughe http//localhostt aise dena padta hai okkh!..
// but in src mughe path denna padta hai okh! like /pohoto.png okkh!...
//
