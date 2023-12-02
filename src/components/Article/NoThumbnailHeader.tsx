import React from "react";

const NoThumbnailHeader = () => {
  return (
    <div className="bg-light-primary py-[6rem]">
      <div className="mx-auto w-[80%] text-white">
        <div className="w-[60%]">
          <div className="mb-2 flex cursor-pointer items-center gap-2 text-[.825rem] capitalize text-light-contrast-600">
            <span className="transition-colors duration-300 hover:text-white">
              Home
            </span>
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

            <span className="transition-colors duration-300 hover:text-white">
              Computer
            </span>

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

            <span className="transition-colors duration-300 hover:text-white">
              Macbook & Iphones
            </span>
          </div>

          <h1 className="mb-5 text-5xl font-semibold leading-[1.15]">
            How to Run a Successful One-Person Business
          </h1>

          <span className="text-sm capitalize text-light-contrast-500">
            updated Aug 23, 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoThumbnailHeader;
