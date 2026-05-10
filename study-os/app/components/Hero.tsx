"use client";

import Link from "next/link";
import her from "@/public/ChatGPT Image May 8, 2026, 10_08_37 PM.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-5 text-center mt-28">
        <h1 className="text-6xl font-extrabold text-gray-100 mb-4">
          Master Your Studies with{" "}
          <span className="bg-clip-text bg-linear-to-r from-sky-400 to-violet-300 text-transparent">
            StudyOS
          </span>
        </h1>
        <p className="text-xl text-gray-300 font-semibold max-w-3xl">
          Unlock your potential and excel in your academic journey. Track your
          study sessions, analyze your habits, and achieve your goals with
          StudyOS.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Link
            href="/get-started"
            className="bg-sky-500 hover:bg-linear-to-b from-sky-500 to-sky-600 text-white font-bold py-3 px-6 hover:skew-2 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="border border-sky-500 hover:skew-2 hover:text-white text-gray-300 font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-16">
        <Image
          src={her}
          alt="Hero Image"
          className="w-[70%] justify-self-center rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
