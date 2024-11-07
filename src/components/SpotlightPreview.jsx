import React from "react";
import { Spotlight } from "./ui/Spotlight";
"use client";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { TypewriterEffectSmoothDemo } from "./ui/TypewriterEffectSmoothDemo";

export function SpotlightPreview() {
  return (
    (<div
      className="h-screen w-full flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div
        className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-neutral-950">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="relative z-20 py-5 font-sans text-2xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-white md:text-4xl lg:text-6xl md:py-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="text-[42px] mb-1 font-bold text-center text-transparent bg-opacity-50 md:text-6xl bg-clip-text bg-gradient-to-b from-orange-300 via-pink-600 to-purple-200"

          >
            Roman
          </motion.h1>
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: "easeInOut",
          }}
          className="max-w-xl mx-auto text-sm text-center md:text-lg text-neutral-400"
        >
          <p className="max-w-lg mx-auto mt-1 text-xs font-normal text-center md:text-lg text-neutral-300">
            Software Engineer || Full Stack Developer
          </p>
        </motion.p> */}
        <TypewriterEffectSmoothDemo/>

        <div className="w-[40rem] h-40 relative mt-5">
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div
            className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div
            className="absolute top-0 w-1/4 h-[2px] inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <div>

          </div>
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={1}
            particleDensity={1000}
            className="w-full h-[100%]"
            particleColor="#FFFFFF" />

          <div
            className="absolute inset-0 w-full h-full bg-neutral-950 [mask-image:radial-gradient(200px_100px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>)
  );
}
