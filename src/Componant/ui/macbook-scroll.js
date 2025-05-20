"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[288vh]  shrink-0 scale-[0.60] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80">
      
      
      
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate} />
      {/* Base area */}
      <div
        className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div
          className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div
            className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2">
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]">
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}

        
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2">
        <div className="w-[50%] h-full float-left bg-slate-50 "> 
        {/* Core Technical Skills */}
      <section>
        <h2 className="text-sm font-bold mb-6 border-b-2 border-gray-300 inline-block">Core Technical Skills</h2>
        <div className="space-y-3">

          <Skill label="HTML, CSS and JavaScript" percent={80} />
          <Skill label="CSS Framework" percent={60} />
          <Skill label="JavaScript Framework & Libraries" percent={65} />
          <Skill label="Responsive Design" percent={50} />
          <Skill label="Version Control" percent={45} />

        </div>
      </section>


        </div>
        <div className="w-[50%] h-full float-left bg-orange-200" >
              {/* Soft Skills */}
      <section>
        <h2 className="text-sm font-bold mb-6 border-b-2 border-gray-300 inline-block">
        Professional Development
        </h2>
        <div className="space-y-3">
          <Skill label="Problem Solving" percent={65} />
          <Skill label="Attention to Detail" percent={50} />
          <Skill label="Collaboration & Communication" percent={70} />
          <Skill label="Time Management" percent={60} />
          <Skill label="Continuous Learning" percent={65} />
        
        </div>
      </section>
        </div>
       
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}></div>
  );
};

export const Keypad = () => {
  return (
    <div
      className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform] w-ful">
        <img src="/ke.png"/>
     
    </div>
  );
};


export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}></div>
  );
};

export const OptionKey = ({
  className
}) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns=""
      viewBox="0 0 32 32"
      className={className}>
      <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none" />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns=""
      className="h-3 w-3 text-white">
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round" />
    </svg>
  );
};

const Skill = ({ label, percent }) => {
    return (
      <motion.div
        whileHover="hover"
        className="mb-4"
      >
        <p className="text-sm ml-1 font-medium text-gray-800">{label}</p>
        <div className="w-full bg-gray-200 rounded h-4 mt-1 overflow-hidden">
          <motion.div
            className="bg-[#a539d0] h-4 rounded text-white text-xs flex justify-end pr-2 items-center cursor-pointer"
            initial={{ width: "0%" }}
            animate={{ width: `${percent}%` }}
            variants={{
              hover: {
                width: `${percent + 5}%`, // optional overfill effect
                transition: { duration: 0.5 },
               
              },
            }}
            transition={{ duration: 1 }}
          >
            {percent}%
          </motion.div>
        </div>
      </motion.div>
    );
  };