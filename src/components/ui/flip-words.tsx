"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

let interval: NodeJS.Timeout;

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    startAnimation();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const startAnimation = () => {
    interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setCurrentWord(words[nextIndex]);
        return nextIndex;
      });
    }, duration);
  };

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
            "z-10 inline-block text-left text-neutral-900 dark:text-neutral-100",
            className
          )}
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: "100%", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
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
