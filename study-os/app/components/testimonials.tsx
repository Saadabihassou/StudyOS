"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Information Engineering Student",
    university: "University of Padua",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "StudyOS replaced my notes app, flashcards, and task manager. Everything is finally in one place.",
  },
  {
    name: "Sara M.",
    role: "Computer Science Student",
    university: "Mohammed V University",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "My study sessions became much more focused. I waste less time organizing and more time learning.",
  },
  {
    name: "Youssef A.",
    role: "Software Engineering Student",
    university: "University of Padua",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "The AI study tools helped me prepare for exams in half the time I usually needed.",
  },
  {
    name: "Maria R.",
    role: "Data Science Student",
    university: "Politecnico di Milano",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The organization system is incredibly intuitive. I finally feel in control of my semester.",
  },
  {
    name: "Omar B.",
    role: "Software Engineering Student",
    university: "University of Bologna",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "The focus tools and AI summaries save me hours every single week.",
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center tracking-[2px] text-sm text-blue-400 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Loved by students who want to <span className="bg-clip-text bg-linear-to-r from-sky-400 to-violet-400 text-transparent border-b-2 border-sky-400/30 pb-1">study smarter</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Thousands of productive study sessions powered by StudyOS.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold text-white">10K+</h3>
            <p className="text-gray-400 mt-2">Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">50K+</h3>
            <p className="text-gray-400 mt-2">Study Sessions</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">4.9/5</h3>
            <p className="text-gray-400 mt-2">Rating</p>
          </div>
        </div>

        {/* Carousel */}

        <div className="pt-20 pb-3 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  md:min-w-[50%]
                  lg:min-w-[33.333%]
                  px-4
                "
              >
                <div
                  className="
                    h-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500/30
                    hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
                  "
                >
                  {/* Stars */}

                  <div className="text-yellow-400 text-lg">
                    ★★★★★
                  </div>

                  {/* Testimonial */}

                  <p className="mt-6 text-gray-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* User */}

                  <div className="mt-8 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />

                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>

                      <p className="text-xs text-gray-500">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Pills */}

        <div className="mt-10 flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2 rounded-full transition-all duration-500
                ${
                  index === selectedIndex
                    ? "w-12 bg-blue-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}