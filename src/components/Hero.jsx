import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/abhiket-profile(2).jpg";
import { motion } from "framer-motion";
import MarqueeText from "./Marquee";

const Hero = () => {
  const fullText = "Software Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayedText(fullText.slice(0, index + 1));
          setIndex((prev) => prev + 1);
          if (index === fullText.length) {
            setDeleting(true);
          }
        } else {
          setDisplayedText(fullText.slice(0, index - 1));
          setIndex((prev) => prev - 1);
          if (index === 0) {
            setDeleting(false);
          }
        }
      },
      deleting ? 70 : 120
    );

    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 px-8 md:px-[8rem]">
      <MarqueeText />
      <div className="flex flex-wrap">
        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:mt-8 items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-10 lg:pb-10 text-6xl font-thin tracking-tight lg:mt-4 lg:text-7xl"
            >
              Abhiket Roy
            </motion.h1>

            <div className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent h-[3rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </div>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-9">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="Profile"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
