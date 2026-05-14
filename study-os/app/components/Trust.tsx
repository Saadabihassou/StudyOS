import harvard from '@/public/harvard-university-seeklogo.png';
import Cambridge from "@/public/5842f8a5a6515b1e0ad75b2a.png";
import Stanford from "@/public/kisspng-stanford-university-school-of-medicine-imeasureu-e-5af45554a02521.432770231525962068656.jpg";
import MIT from "@/public/aa8haipmx.webp";
// import Oxford from "@/public/oxford-logo.png";
import Image from "next/image";

const Trust = () => {
  const universities = [
    { name: "Harvard", logo: harvard },
    { name: "Stanford", logo: Stanford },
    { name: "MIT", logo: MIT },
    // { name: "Oxford", logo: Oxford },
    { name: "Cambridge", logo: Cambridge },
    { name: "Yale", logo: "/logos/yale.png" },
    { name: "Princeton", logo: "/logos/princeton.png" },
    { name: "ETH Zurich", logo: "/logos/eth.png" },
    // Add more universities here
  ];

  return (
    <section className="py-16 bg-gray-100 border-t border-b border-gray-800 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm font-medium tracking-widest mb-10">
          TRUSTED BY STUDENTS FROM
        </p>

        {/* Infinite Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {universities.map((uni, i) => (
              <div
                key={i}
                className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex items-center"
              >
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={100}
                  height={100}
                  className="h-10 md:h-12 w-auto hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for seamless infinite loop */}
            {universities.map((uni, i) => (
              <div
                key={`dup-${i}`}
                className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex items-center"
              >
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={100}
                  height={100}
                  className="h-10 md:h-12 w-auto opacity-75 hover:opacity-100 transition-all duration-300 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
