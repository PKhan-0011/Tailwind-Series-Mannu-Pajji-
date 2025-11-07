import Image from "next/image";
import Navbar from "@/Navbar/navbar";
import HomePage from "@/Common/HomePage";
import About from "@/Common/About";

export default function Home() {
  return (
    <>
      <div className="max-w-4xl h-screen mx-auto bg-gray-50 dark:bg-black border dark:border-gray-100 rounded">
        <HomePage />
      </div>
    </>
  );
}

// Yha p jo hai like file based routing hoti hai okkh and mughe like is route p
// agar jana hua jaise /about to mai app wale folder m ek about folder create
// karnga and uske andar page.tsx rakh denge okkh!..

//Note** Yha p folder m like page.tsx likhna jarrori hi hota hai okkh!..
// Home page to tera global page.tsx m hi ban jayega but agle jo hai like /about etc etc to ye hame like about folder and uske nadra page.tsx m banane padenge okkkh!...
