"use client";
import Image from "next/image";
import feature1 from "@/public/feature1.png";
import feature2 from "@/public/feature2.png";
import feature3 from "@/public/feature3.png";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-24 bg-gray-950 text-gray-200 z-50">
      <div className="max-w-9xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 30, skewY: 3 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, skewY: 0 }}
          transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-20">
          <p className="text-sm tracking-[2.2px] font-semibold text-sky-400">
            FEATURES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mt-4 leading-tight">
            Everything You Need to{" "}
            <span className="bg-clip-text bg-linear-to-r from-sky-400 to-violet-400 text-transparent border-b-2 border-sky-400/30 pb-1">
              Succeed in Your Studies
            </span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            StudyOS offers a comprehensive suite of tools designed to help you
            master your studies, stay organized, and achieve your academic
            goals.
          </p>
        </motion.div>

        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mb-28">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 pl-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-sky-400 text-sm font-medium">01</span>
            </div>
            <h3 className="text-4xl font-bold leading-tight border-b-2 border-sky-400/30 pb-1 bg-clip-text bg-linear-to-r from-sky-200 to-violet-200 text-transparent">
              Powerful Study Analytics
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Visualize your progress with detailed insights, study trends, and
              performance metrics. Understand your habits and optimize your
              study sessions for maximum results.
            </p>
            <button className="text-sky-400 hover:text-sky-300 flex items-center gap-2 font-medium">
              Learn more →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={feature1}
                alt="Study Analytics Dashboard"
                width={620}
                height={480}
                className="rounded-3xl ml-16 shadow-2xl shadow-sky-500/20 border border-gray-800"
                priority
              />
              <div className="absolute -inset-6 bg-linear-to-r from-sky-500/10 to-violet-500/10 rounded-[2.75rem] -z-10 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Feature 2 - With Side Overflow */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20 mb-28"
        >
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-sky-400 text-sm font-medium">02</span>
            </div>
            <h3 className="text-4xl font-bold leading-tight border-b-2 border-sky-400/30 pb-1 bg-clip-text bg-linear-to-r from-sky-200 to-violet-200 text-transparent">
              Smart Session Tracking
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Plan focused study sessions, track your time, and build productive
              routines that keep your learning structured and efficient.
            </p>
            <button className="text-sky-400 hover:text-sky-300 flex items-center gap-2 font-medium">
              Learn more →
            </button>
          </motion.div>

          {/* Image Container with Side Overflow */}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative flex justify-center lg:justify-start"
          >
            <div className="relative -mr-12 lg:-mr-20 xl:-mr-24">
              {" "}
              {/* ← This creates the overflow */}
              <Image
                src={feature2}
                alt="Smart Session Tracking Interface"
                width={620}
                height={480}
                className="rounded-3xl shadow-2xl shadow-sky-500/30 border max-w-137.5 -ml-12 border-gray-800 hover:shadow-sky-500/50 transition-shadow duration-300"
                priority={false}
              />
              {/* Decorative Glow */}
              <div className="absolute -inset-8 bg-linear-to-r from-sky-500/10 to-violet-500/10 rounded-[2.75rem] -z-10 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Feature 3 - Ready for you to customize */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 pl-4"
            >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-sky-400 text-sm font-medium">03</span>
            </div>
            <h3 className="text-4xl font-bold leading-tight border-b-2 border-sky-400/30 pb-1 bg-clip-text bg-linear-to-r from-sky-200 to-violet-200 text-transparent">
              Smart Goal Setting
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Set meaningful academic goals, break them into actionable tasks,
              and track your progress with intelligent reminders and insights.
            </p>
            <button className="text-sky-400 hover:text-sky-300 flex items-center gap-2 font-medium">
              Learn more →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative -mr-12 lg:-mr-20 xl:-mr-24">
              <Image
                src={feature3}
                alt="Goal Setting Feature"
                width={630}
                height={480}
                className="rounded-3xl -mr-20 shadow-2xl shadow-sky-500/20 border border-gray-800"
              />
              <div className="absolute -inset-6 bg-linear-to-r from-sky-500/10 to-violet-500/10 rounded-[2.75rem] -z-10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
