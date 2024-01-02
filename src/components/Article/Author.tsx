import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Author } from "@/lib/queries";
import { generateImageUrl } from "@/utils";
import Description from "@/shared/Description";

interface Props {
  data?: Author;
}

const Author = ({ data }: Props) => {
  const authorImageUrl = generateImageUrl({
    thumbnail: data?.avatar,
    size: {
      height: 250,
      width: 250,
    },
  });

  return (
    <div className="mb-[5rem] flex flex-col items-center gap-4 border-b border-light-contrast-300 px-[4rem] pb-5 dark:border-dark-contrast-300/50 sm:px-[2rem] xs:px-0">
      <div className="h-[6rem] w-[6rem] overflow-hidden rounded-full">
        <Image
          className="h-[100%] w-[100%] bg-cover bg-center object-cover"
          src={authorImageUrl}
          width={250}
          height={250}
          alt={data?.name || ""}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <ul className="flex cursor-pointer items-center gap-3">
          {data?.sociallinks.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.url} target="_blank">
                  <Image
                    height={40}
                    width={40}
                    className={`h-[auto]  w-[1rem] invert transition-all duration-150 hover:translate-y-[-3px] dark:invert-0`}
                    src={`/icons/share/${item.name}.svg`}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <h1 className="text-xl font-bold capitalize text-light-primary hover:text-accent hover:underline dark:text-dark-primary">
          <Link href={`/author/${data?.slug}`}>{data?.name}</Link>
        </h1>
      </div>

      <div>
        <Description description={data?.bio || ""} limit={300} align="center" />
      </div>
    </div>
  );
};

export default Author;
