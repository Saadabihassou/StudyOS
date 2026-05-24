/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex === null) {
      setIndicatorStyle({
        width: 0,
        left: 0,
        opacity: 0,
      });
      return;
    }

    const activeLink = linkRefs.current[hoveredIndex];
    if (!activeLink || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    setIndicatorStyle({
      width: linkRect.width,
      left: linkRect.left - navRect.left,
      opacity: 1,
    });
  }, [hoveredIndex]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sessions", label: "Sessions" },
    { href: "/analytics", label: "Analytics" },
    { href: "/features", label: "About Us" },
  ];

  return (
    <nav className="flex justify-between items-center mt-5 py-3 px-6 mx-11 relative z-20">
      {/* Logo */}
      <motion.p
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-200"
      >
        Study
        <span className="text-sky-400 font-extrabold">OS</span>
      </motion.p>

      {/* Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
        ref={navRef}
      >
        {/* Sliding Card */}
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-sky-500/10 border border-sky-400/30 rounded-xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            width: indicatorStyle.width,
            left: indicatorStyle.left,
            height: "42px",
            opacity: indicatorStyle.opacity,
          }}
        />
        <div
          className="flex space-x-6 font-semibold text-[17px] text-gray-100 relative z-10"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              className="py-2 px-4 transition-colors hover:text-sky-400 relative"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <Link
          href="/login"
          className="text-gray-300 hover:bg-gray-900 rounded-lg px-4 py-1 hover:text-sky-400 transition mr-4"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-sky-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-sky-600 transition"
        >
          Sign Up
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;