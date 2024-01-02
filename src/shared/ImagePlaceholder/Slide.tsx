"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  alt: string;
  size: {
    height: number;
    width: number;
  };
}

const Opacity = ({ size, src, alt }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="relative h-full w-full overflow-hidden" ref={ref}>
      <Image
        className={`h-full w-full object-cover opacity-0 transition-all duration-200 ease-linear ${
          inView && "opacity-100"
        }`}
        height={size.height}
        width={size.width}
        src={src}
        alt={alt}
      />

      <div
        className={`absolute left-0 top-0 z-10 h-full w-full bg-[#F2AFEF] transition-all duration-500 ${
          inView ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"
        }`}
      ></div>
    </div>
  );
};

export default Opacity;
