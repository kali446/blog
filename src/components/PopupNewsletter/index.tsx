import React from "react";
import Image from "next/image";
import Checkbox from "@/shared/Checkbox";
import { SOCIAL_HANDLES } from "@/data/global";
import CloseButton from "./CloseButton";

const PopupNewsletter = () => {
  return (
    <div className="fixed left-[50%] top-[50%] z-[1005] grid h-auto max-h-[70vh] w-[70%] translate-x-[-50%] translate-y-[-50%] grid-cols-12 overflow-hidden rounded-xl bg-white dark:bg-dark-layoutElement sm:w-[90%] md:overflow-y-auto lg:w-[80%]">
      <div className="relative col-span-6 flex flex-col gap-5 p-6 sm:px-4 sm:py-5 md:col-span-12 md:p-5">
        <div className="top-0 left-0 bg-red-500/10 absolute z-10 hidden h-full w-full md:block">
          <div className="top-0 left-0 absolute h-full w-full bg-black/[.5]"></div>
          <Image
            className="h-[100%] w-[100%] bg-center object-cover"
            src="/images/card4.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="relative z-20">
          <h1 className="text-4xl font-black text-light-primary dark:text-dark-primary md:text-3xl">
            Sign Up for Our <br /> Newsletter
          </h1>

          <div className="mt-6 md:mt-5">
            <form className="flex items-center gap-1 pb-2 sm:flex-col sm:items-start">
              <input
                className="h-[2.5rem] w-[70%] rounded-md bg-light-contrast-200 px-3 text-xs font-medium text-light-primary placeholder:font-semibold placeholder:capitalize placeholder:text-light-primary focus:outline-none sm:w-full"
                type="text"
                placeholder="Enter your name"
              />

              <button
                className="hover:buttonHoverContrast h-[2.5rem] rounded-md bg-button px-4 text-sm font-medium text-buttonContrast hover:bg-buttonHover"
                type="submit"
              >
                Subscribe
              </button>
            </form>

            <div className="mb-[5rem] w-[90%] md:mb-[4rem]">
              <Checkbox />
            </div>

            <ul className="flex items-center justify-center gap-5">
              {SOCIAL_HANDLES.map((item, i) => (
                <li
                  className={`h-[.925rem] w-auto overflow-hidden ${
                    item.name === "youtube" && "h-[.85rem]"
                  }`}
                  key={i}
                >
                  <img
                    className="h-full w-full dark:invert"
                    src={item.icon}
                    alt={item.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-6 h-full w-full md:hidden">
        <Image
          className="h-[100%] w-[100%] bg-center object-cover"
          src="/images/card4.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <CloseButton />
    </div>
  );
};

export default PopupNewsletter;
