"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

export default function SparklesPreview() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 py-2 font-sans text-2xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-white md:text-4xl lg:text-6xl md:py-5"
      >
        Roman Humagain
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="max-w-xl mx-auto text-sm text-center md:text-lg text-neutral-400"
      >
        Software Engineer || Full Stack Developer.
      </motion.p>

      <div className="w-[40rem] h-40 relative mt-5">
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.2}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-[100%]"
          particleColor="#FFFFFF" />

        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
