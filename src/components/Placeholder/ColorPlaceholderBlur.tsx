import React from "react";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
  alt: string;
  src: string;
}

export default function ColorPlaceholderBlur({
  width,
  height,
  alt,
  src,
}: Props) {
  return (
    <div className={`h-full w-full overflow-hidden shadow-md`}>
      <Image
        className="h-full w-full bg-center object-cover"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
}
