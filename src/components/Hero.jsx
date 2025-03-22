import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/profile1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MarqueeText from "./Marquee";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 px-8 md:px-[8rem]">
      <MarqueeText/>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:mt-8 items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="py-10 lg:pb-10 text-6xl font-thin tracking-tight lg:mt-4 lg:text-7xl"
            >
              Abhiket Roy
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          {/* <Link to="/contact">
            <button className="font-bold h-12 w-40 rounded-lg bg-gradient-to-r from-pink-500 via-slate-700 to-purple-700">
              Let&apos;s Connect
            </button>
          </Link> */}
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-9">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
