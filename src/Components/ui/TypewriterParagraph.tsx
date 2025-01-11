"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterParagraph = ({ text, className }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingSpeed = 45; // Decrease this value to increase speed
    const interval = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.div
      className={` text-3xl font-thin leading-relaxed ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block w-[4px] h-8 bg-orange-600 ml-1"
      ></motion.span>
    </motion.div>
  );
};