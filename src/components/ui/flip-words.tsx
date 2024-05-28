"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

let interval: NodeJS.Timeout;

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  const startAnimation = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
  };

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index, words]);

  return (
    <div className="relative inline-block align-baseline">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%", position: "absolute" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "z-10 text-4xl md:text-5xl lg:text-6xl inline-block relative text-left text-[#0047AB] px-2 ml-1",
            className
          )}
          style={{ whiteSpace: "nowrap" }}
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: "100%", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
              exit={{ opacity: 0, y: "-100%", filter: "blur(8px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
