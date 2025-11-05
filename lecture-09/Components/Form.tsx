import React from "react";

const Foam = () => {
  return (
    <form className="min-h-6xl my-auto rounded-2xl min-w-2xl mx-auto bg-gray-100 px-8 py-14">
      <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-900 text-center">
        This is a{" "}
        <span className="inline-block bg-red-600 text-white skew-x-6 p-1">
          {" "}
          crazy
        </span>{" "}
        good foam
      </h1>

      <div className="my-4 flex flex-col gap-8 max-w-sm mx-auto">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xl font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            FirstName
          </label>
          <input
            name="firstName"
            type="text"
            placeholder="Enter your FirstName"
            className="focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-4 px-2 py-2 bg-white rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xl font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-4 px-2 py-2 bg-white rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xl font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Company
          </label>
          <input
            name="Company"
            type="text"
            placeholder="Enter your Company"
            className="focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-4 px-2 py-2 bg-white rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xl font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Messages
          </label>
          <input
            name="Message"
            type="text"
            placeholder="Meesages here!.."
            className="focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-4 px-2 py-2 bg-white rounded-lg shadow-xl"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md">
          Send that text now
        </button>
      </div>
    </form>
  );
};

export default Foam;

// Yha p hamm kahi kahi p after wali bat chit bhi karte hai okkh!..
// Ek chize jo ayega yha p actauly woo hai ye like after: content-['*']
