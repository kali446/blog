import React from "react";
import Image from "next/image";

const CardArticle6 = () => {
  return (
    <div className="group flex cursor-pointer items-start gap-3 rounded-lg bg-white p-3 shadow-md transition-shadow hover:shadow-lg dark:bg-dark-layoutElement">
      <div className="lg:h-[8rem] lg:w-[8rem] h-[6rem] w-[6rem] shrink-0 overflow-hidden">
        <Image
          className="h-full w-full bg-center object-cover transition-all duration-300 group-hover:scale-110"
          src="/images/card3.jpeg"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>

      <div>
        <h2 className="pb-3 text-[1.025rem] font-bold leading-[1.15] text-light-primary transition-colors duration-300 hover:text-accent dark:text-white dark:hover:text-accent">
          The Best Smart Thermostats for Your Home
        </h2>

        <p className="relative h-[1rem] overflow-hidden  text-xs uppercase text-light-secondary dark:text-dark-contrast-600">
          <p className="flex gap-3 transition-all group-hover:translate-y-[-100%]">
            <span>2 min read</span>
            <span>1.1k views</span>
          </p>

          <span className="absolute left-[0] top-full transition-all group-hover:top-[0]">
            read more
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardArticle6;
