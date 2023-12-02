import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white">
      <div className="relative flex items-center justify-between p-4">
        <div className="absolute left-[0] top-[0] z-10 h-[100%] w-[100%]">
          <Image
            className="h-[100%] w-[100%] bg-cover bg-center object-cover"
            src="/images/card3.jpeg"
            width={400}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className="absolute left-[0] top-[0] z-20 h-[100%] w-[100%] bg-light-overlay/20" />

        <div className="relative z-30 flex w-full items-center justify-between text-white">
          <h1 className="text-2xl font-semibold capitalize">computers</h1>

          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-xl bg-black/40">
            <span className="text-sm font-medium text-white">11</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between p-4">
        <div className="absolute left-[0] top-[0] z-10 h-[100%] w-[100%]">
          <Image
            className="h-[100%] w-[100%] bg-cover bg-center object-cover"
            src="/images/card4.jpeg"
            width={400}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className="absolute left-[0] top-[0] z-20 h-[100%] w-[100%] bg-light-overlay/20" />

        <div className="relative z-30 flex w-full items-center justify-between text-white">
          <h1 className="text-2xl font-semibold capitalize">gaming</h1>

          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-xl bg-black/40">
            <span className="text-sm font-medium text-white">11</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between p-4">
        <div className="absolute left-[0] top-[0] z-10 h-[100%] w-[100%]">
          <Image
            className="h-[100%] w-[100%] bg-cover bg-center object-cover"
            src="/images/card5.jpeg"
            width={400}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className="absolute left-[0] top-[0] z-20 h-[100%] w-[100%] bg-light-overlay/20" />

        <div className="relative z-30 flex w-full items-center justify-between text-white">
          <h1 className="text-2xl font-semibold capitalize">electronics</h1>

          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-xl bg-black/40">
            <span className="text-sm font-medium text-white">11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
