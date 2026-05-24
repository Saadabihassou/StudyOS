"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-32 max-w-2/3 justify-center items-center gap-10">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <motion.p
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-200"
          >
            Study
            <span className="text-sky-400 font-extrabold">OS</span>
          </motion.p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
