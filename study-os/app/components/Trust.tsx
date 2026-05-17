"use client";

import Image from "next/image";

import harvard from '@/public/harvard-university-seeklogo.png';
import cambridge from "@/public/5842f8a5a6515b1e0ad75b2a.png";
import stanford from "@/public/kisspng-stanford-university-school-of-medicine-imeasureu-e-5af45554a02521.432770231525962068656.jpg";
import mit from "@/public/aa8haipmx.webp";

const Trust = () => {
  const universities = [
    { name: "Harvard", logo: harvard },
    { name: "Stanford", logo: stanford },
    { name: "MIT", logo: mit },
    { name: "Cambridge", logo: cambridge },
  ];

  return (
    <section className="py-12 z-50 bg-gray-950 border-2 rounded-lg border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center bg-clip-text bg-linear-to-r from-sky-400 to-violet-400 text-transparent border-b-2 border-sky-400/30 pb-1 w-fit justify-self-center px-3 text-sm font-medium tracking-widest mb-10">
          TRUSTED BY STUDENTS FROM
        </p>

        {/* Infinite Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div 
            className="flex animate-marquee whitespace-nowrap gap-16 items-center hover:[animation-play-state:paused]"
          >
            {/* First set */}
            {universities.map((uni, i) => (
              <Logo key={i} uni={uni} />
            ))}

            {/* Duplicate set for seamless loop */}
            {universities.map((uni, i) => (
              <Logo key={`dup-${i}`} uni={uni} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Logo Component for cleaner code
const Logo = ({ uni }: { uni: { name: string; logo: any } }) => (
  <div className="shrink-0 flex items-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
    <Image
      src={uni.logo}
      alt={`${uni.name} logo`}
      width={140}
      height={60}
      className="h-10 md:h-12 w-auto opacity-100 transition-all duration-300"
      unoptimized // Recommended for logos (especially SVGs or irregular sizes)
    />
  </div>
);

export default Trust;