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
    <div ref={ref} className="bg-accent">
      <Image
        className={`h-full w-full object-cover opacity-0 transition-all duration-200 ease-linear ${
          inView && "opacity-100"
        }`}
        height={size.height}
        width={size.width}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Opacity;
