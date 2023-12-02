import React from "react";
import Image from "next/image";

const ThumbnailHeader = () => {
  return (
    <div className="pt-3">
      <div className="md:w-[90%] mx-auto w-[60%]">
        <div className="dark:border-dark-contrast-400/50 dark:text-dark-primary mb-4 flex  cursor-pointer items-center gap-3 border-b border-light-contrast-300 py-4 text-[1rem] font-light capitalize text-black">
          <div className="transition-colors duration-300">Home</div>
          <div>
            <svg
              width={6}
              height="auto"
              viewBox="0 0 302 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M293.231 236.022L65.3843 8.17945C60.1145 2.90547 53.0798 0 45.5788 0C38.0779 0 31.0432 2.90547 25.7733 8.17945L8.99403 24.9546C-1.92438 35.8855 -1.92438 53.6513 8.99403 64.5656L200.322 255.894L8.78174 447.434C3.51193 452.708 0.602295 459.739 0.602295 467.236C0.602295 474.741 3.51193 481.771 8.78174 487.05L25.5611 503.821C30.835 509.095 37.8656 512 45.3666 512C52.8675 512 59.9022 509.095 65.172 503.821L293.231 275.77C298.513 270.479 301.414 263.416 301.398 255.906C301.414 248.368 298.513 241.308 293.231 236.022Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="transition-colors duration-300">Computer</div>

          <div>
            <svg
              width={6}
              height="auto"
              viewBox="0 0 302 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M293.231 236.022L65.3843 8.17945C60.1145 2.90547 53.0798 0 45.5788 0C38.0779 0 31.0432 2.90547 25.7733 8.17945L8.99403 24.9546C-1.92438 35.8855 -1.92438 53.6513 8.99403 64.5656L200.322 255.894L8.78174 447.434C3.51193 452.708 0.602295 459.739 0.602295 467.236C0.602295 474.741 3.51193 481.771 8.78174 487.05L25.5611 503.821C30.835 509.095 37.8656 512 45.3666 512C52.8675 512 59.9022 509.095 65.172 503.821L293.231 275.77C298.513 270.479 301.414 263.416 301.398 255.906C301.414 248.368 298.513 241.308 293.231 236.022Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <span className="dark:text-dark-contrast-700 text-light-secondary transition-colors duration-300">
            Macbook & Iphones
          </span>
        </div>

        <h1 className="dark:text-dark-primary mb-4 text-4xl font-semibold text-light-primary">
          Bye bye Instagram Guides
        </h1>

        <p className="dark:text-dark-primary mb-6 text-[1.1rem] font-light text-light-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          architecto odit molestiae accusantium, velit dolorem porro voluptate
          vero expedita veniam, placeat, a excepturi! Corrupti, aspernatur!
        </p>

        <div className="mb-5 flex items-center justify-between">
          <div className="cursor-pointer rounded-full border border-accent bg-accent/20 px-3 py-2 font-semibold capitalize leading-none text-accent">
            Weekly Brief
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full">
                <Image
                  className="h-[100%] w-[100%] bg-cover bg-center"
                  src="/images/card2.jpeg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>

              <span className="dark:text-dark-primary text-[1.05rem] font-light capitalize text-light-primary">
                Alassy B.
              </span>
            </div>
            <div className="h-[4px] w-[4px] rounded-full bg-light-contrast-500"></div>
            <div className="dark:text-dark-contrast-700 text-sm font-light text-light-secondary">
              November 20, 2024
            </div>
          </div>
        </div>
      </div>

      <div className="aspect-[4/3] w-[100%] overflow-hidden">
        <Image
          src="/images/card4.jpeg"
          width={1920}
          height={1080}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default ThumbnailHeader;
