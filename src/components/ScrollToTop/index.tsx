"use client";
import React, { useEffect } from "react";
import { isBrowser } from "@/utils";
import { motion, useScroll, useAnimationControls } from "framer-motion";

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
      <svg
        className="rotate-180 transition-all duration-200 group-hover:translate-y-[-2px]"
        width={13}
        height={"auto"}
        viewBox="0 0 342 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M192.333 21.3333C192.333 15.6754 190.086 10.2492 186.085 6.24839C182.084 2.24761 176.658 0 171 0C165.342 0 159.916 2.24761 155.915 6.24839C151.914 10.2492 149.667 15.6754 149.667 21.3333V311.168L36.7493 198.251C32.7258 194.365 27.337 192.214 21.7434 192.263C16.1499 192.312 10.7992 194.555 6.84385 198.511C2.88848 202.466 0.644872 207.817 0.596265 213.41C0.547659 219.004 2.69795 224.392 6.58399 228.416L155.917 377.749C159.918 381.749 165.343 383.995 171 383.995C176.657 383.995 182.082 381.749 186.083 377.749L335.416 228.416C339.302 224.392 341.452 219.004 341.404 213.41C341.355 207.817 339.111 202.466 335.156 198.511C331.201 194.555 325.85 192.312 320.257 192.263C314.663 192.214 309.274 194.365 305.251 198.251L192.333 311.168V21.3333Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
};

export default ScrollToTop;
