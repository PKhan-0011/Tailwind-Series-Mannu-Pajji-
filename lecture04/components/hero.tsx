import React from "react";

const Hero = () => {
  return (
    <div className="my-40">
      <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the Power of intutuive finance
      </h1>
      <p className="text-2xl text-gray-600 selection:bg-neutral-300">
        If you’re already good with JavaScript or Python, then yes — you can
        become job/project ready in 2 months.
      </p>

      <div className="mt-8 flex justify-center">
        <button className="relative">
          <div className="absolute inset-x-0 bottom-px h-px w-full bg-linear-to-r from-transparent via-sky-500 to-transparent" />
          Join waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;

// agar mughe gradinet text m lagana hota hai to mai bg-clip-text karta hu sabse pehle okkh!.. and uska baad  text-transparent karte hai okkh!..
