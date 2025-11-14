import React from "react";
import Image from "next/image";

const LogoCloud = () => {
  const logos = [
    {
      title: "Open Ai",
      src: "/OpenAI-Logo-removebg-preview.png",
    },
    {
      title: "Hello Pateint",
      src: "/Character.ai_logo-removebg-preview.png",
    },
    {
      title: "Granola",
      src: "/oracle-logosvg-removebg-preview.png",
    },
    {
      title: "Character Ai",
      src: "/Character.ai_logo-removebg-preview.png",
    },

    {
      title: "Oracle",
      src: "oracle-logosvg-removebg-preview.png",
    },
    {
      title: "Portola",
      src: "oracle-logosvg-removebg-preview.png",
    },
  ];

  return (
    <section>
      <h2></h2>

      {logos.map((items) => (
        <Image
          src={"/src"}
          alt={"#images"}
          height={20}
          width={30}
          key={items.title}
          className="size-20 object-contain"
        />
      ))}
    </section>
  );
};

export default LogoCloud;

// Ek Aur chhiz hai like ki hammre pass src hai auur ek href hai okkh!..
// to jo href hai uske andar mughe http//localhostt aise dena padta hai okkh!..
// but in src mughe path denna padta hai okh! like /pohoto.png okkh!...
//
