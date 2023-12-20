import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface Props {
  width: number;
  height: number;
  alt: string;
  src: string;
}

export default async function ColorPlaceholderBlur({
  width,
  height,
  alt,
  src,
}: Props) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { color } = await getPlaiceholder(buffer);

  return (
    <div
      style={{
        backgroundColor: color.hex,
      }}
      className={`h-full w-full overflow-hidden shadow-md`}
    >
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
