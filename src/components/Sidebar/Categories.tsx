import React from "react";
import Image from "next/image";
import { Category } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";
import Link from "next/link";

interface Props {
  data: Category[];
}

const Categories = ({ data }: Props) => {
  return (
    <div className="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white">
      {data?.map((item, i) => {
        const thumbnailHeight = 100;
        const thumbnailWidth = 300;
        const thumbnailUrl = generateImageUrl({
          thumbnail: item.thumbnail,
          size: {
            height: thumbnailHeight,
            width: thumbnailWidth,
          },
        });

        return (
          <Link key={i} href={`/category/${item.slug}`}>
            <div className="group relative flex items-center justify-between p-4">
              <div className="absolute left-[0] top-[0] z-10 h-[100%] w-[100%]">
                <Image
                  className="h-[100%] w-[100%] bg-cover bg-center object-cover"
                  src={thumbnailUrl}
                  width={thumbnailWidth}
                  height={thumbnailHeight}
                  alt={item.name}
                />
              </div>

              <div className="absolute left-[0] top-[0] z-20 h-[100%] w-[100%] bg-light-overlay/20" />

              <div className="relative z-30 flex w-full items-center justify-between text-white">
                <h1 className="text-[1.1rem] font-bold capitalize drop-shadow-sm transition-all group-hover:underline">
                  {item.name.length > 20
                    ? truncateString(item.name, 20) + "..."
                    : item.name}
                </h1>

                <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-xl bg-black/40">
                  <span className="text-sm font-medium text-white">
                    {item.total || 0}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
