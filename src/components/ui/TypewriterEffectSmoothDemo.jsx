"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Software Engineer ",
    },
  
    {
      text: "|| ",
    },
    {
      text: "Full Stack Developer",
    },
    
    
    
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-auto ">
      <TypewriterEffectSmooth words={words} />
    </div>)
  );
}
