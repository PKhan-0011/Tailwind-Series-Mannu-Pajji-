import React from "react";

const Keyboard = () => {
  return (
    <div className="h-[25em] w-4xl md:w-3xl rounded-2xl bg-neutral-900 shadow-lg">
      <div className="p-1">
        <button className="text-white px-10 mx-2 mt-2 py-3 bg-neutral-900 shadow-[0_0px_20px_8hpx_rgba(107,114,128,0.4)] rounded-lg ">
          <span className="">Esc</span>
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
