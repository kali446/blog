import { SOCIAL_SHARE } from "@/data/global";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
}

const Social = ({ url }: Props) => {
  return (
    <ul className="flex cursor-pointer items-center gap-4 text-light-secondary dark:text-dark-secondary xs:gap-3">
      {SOCIAL_SHARE.map((item, i) => (
        <li key={i}>
          <Link href={url} target="_blank">
            <Image
              className="opacity-60 invert transition-all hover:opacity-100"
              height={item.size.height}
              width={item.size.width}
              src={item.icon}
              alt={`Share to ${item.name}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
