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
    if (!titleRef.current) return;

    // Split Text Animation
    const title = titleRef.current;
    const text = title.innerText;
    title.innerHTML = "";

    // Create spans for each character
    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char; // Preserve spaces
      span.style.display = "inline-block";
      return span;
    });

    chars.forEach((span) => title.appendChild(span));

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -60,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.1,
        stagger: 0.025, // Beautiful character stagger
      }
    )
      // Subtitle
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.7"
      )
      // Buttons
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.8"
      )
      // Hero Image
      .fromTo(
        imageRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4 },
        "-=0.9"
      );
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-5 text-center mt-28">
        <h1
          ref={titleRef}
          className="text-6xl font-extrabold text-gray-100 mb-4 leading-tight"
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
            className="bg-sky-500 hover:skew-2 hover:bg-linear-to-b from-sky-500 to-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="border border-sky-500 hover:skew-2 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
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
          className="w-[85%] max-w-5xl justify-self-center rounded-3xl shadow-2xl shadow-sky-400/30"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;