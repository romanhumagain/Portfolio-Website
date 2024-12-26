import React from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.3, 
            ease: [0.42, 0, 0.58, 1], // smooth easing function
          }}
          className="text-white"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
