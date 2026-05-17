"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import her from "@/public/ChatGPT Image May 8, 2026, 10_08_37 PM.png";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Title animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2 }
    )
      // Subtitle
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      // Buttons
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.6"
      )
      // Image
      .fromTo(
        imageRef.current,
        { opacity: 0, y: 80, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4 },
        "-=0.9"
      );
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 overflow-hidden pb-12">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-5 text-center mt-28">
        <h1
          ref={titleRef}
          className="text-6xl font-extrabold text-gray-100 mb-4"
        >
          Master Your Studies with{" "}
          <span className="bg-clip-text bg-linear-to-r from-sky-400 to-violet-300 text-transparent">
            StudyOS
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl text-gray-300 font-semibold max-w-3xl"
        >
          Unlock your potential and excel in your academic journey. Track your
          study sessions, analyze your habits, and achieve your goals with
          StudyOS.
        </p>

        {/* Call to Action Buttons */}
        <div ref={buttonsRef} className="flex gap-4 mt-6">
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
      <div ref={imageRef} className="mt-16">
        <Image
          src={her}
          alt="Hero Image"
          className="w-[90%] justify-self-center rounded-2xl shadow-2xl shadow-sky-300/50"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;