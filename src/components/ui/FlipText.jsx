// SlightFlip.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export function SlightFlip({
  word,
  duration = 0.5,
  delayMultiple = 0.1,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}) {
  return (
    <div className="flex space-x-1">  
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-md", className)}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
