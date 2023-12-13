"use client";
import React, { useEffect } from "react";
import { isBrowser } from "@/utils";
import { motion, useScroll, useAnimationControls } from "framer-motion";
import Image from "next/image";

const ScrollToTopContainerVariants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const ScrollToTop = () => {
  const goToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.12) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.div
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={goToTop}
      className="group fixed bottom-[1rem] right-[1rem] z-[1000] flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-full bg-light-contrast-200 text-light-primary shadow-sm transition-all hover:bg-light-contrast-400 hover:text-black dark:bg-dark-contrast-400/60 dark:text-dark-primary hover:dark:bg-dark-contrast-400/80"
    >
      <Image
        className="h-auto w-[1rem] rotate-[-90deg] dark:invert"
        height={20}
        width={20}
        src={"/icons/arrow.svg"}
        alt="Scroll to top"
      />
    </motion.div>
  );
};

export default ScrollToTop;
