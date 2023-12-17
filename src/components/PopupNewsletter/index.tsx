import React from "react";
import Image from "next/image";
import CloseButton from "./CloseButton";
import Form from "./Form";
import Social from "@/shared/Social";
import { HomeSEO } from "@/data/seo";

const PopupNewsletter = () => {
  return (
    <div className="fixed left-[50%] top-[50%] z-[1005] grid h-auto max-h-[70vh] w-[70%] translate-x-[-50%] translate-y-[-50%] grid-cols-12 overflow-hidden rounded-xl bg-white dark:bg-dark-layoutElement lg:w-[80%] md:overflow-y-auto sm:w-[90%]">
      <div className="relative col-span-6 flex flex-col gap-5 p-6 md:col-span-12 md:p-5 sm:px-4 sm:py-5">
        <div className="absolute left-0 top-0 z-10 hidden h-full w-full bg-red-500/10 md:block">
          <div className="absolute left-0 top-0 h-full w-full bg-black/[.5]"></div>
          <Image
            className="h-[100%] w-[100%] bg-center object-cover"
            src="/images/card4.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="relative z-20">
          <h1 className=" text-4xl font-black text-light-primary dark:text-dark-primary md:text-3xl sm:text-dark-primary">
            Sign Up for Our <br /> Newsletter
          </h1>

          <div className="mt-6 md:mt-5">
            <Form />
            <div className="flex items-center justify-center">
              <Social
                url={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/`}
                title={HomeSEO.sitename}
              />
            </div>
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
