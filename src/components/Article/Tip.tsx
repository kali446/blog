import React from "react";

const Tip = () => {
  return (
    <div className="my-[1rem] overflow-hidden rounded-lg bg-accent pl-3 shadow-sm">
      <div className="flex items-center justify-between px-2 py-2">
        <span className="text-xl font-black capitalize italic text-white">
          Did you know ?
        </span>

        <div className="text-white">
          <svg
            width={18}
            height={18}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 0C114.842 0 0 114.843 0 256.002C0 397.16 114.842 512 256 512C397.158 512 512 397.16 512 256.002C512 114.843 397.158 0 256 0ZM256 465.455C140.505 465.455 46.5455 371.495 46.5455 256.002C46.5455 140.508 140.505 46.5455 256 46.5455C371.495 46.5455 465.455 140.508 465.455 256.002C465.455 371.495 371.493 465.455 256 465.455Z"
              fill="currentColor"
            />
            <path
              d="M255.997 108.606C238.89 108.606 224.973 122.532 224.973 139.65C224.973 156.753 238.89 170.667 255.997 170.667C273.104 170.667 287.021 156.753 287.021 139.65C287.021 122.532 273.104 108.606 255.997 108.606ZM256 217.212C243.147 217.212 232.727 227.632 232.727 240.485V380.121C232.727 392.974 243.147 403.394 256 403.394C268.853 403.394 279.273 392.974 279.273 380.121V240.485C279.273 227.632 268.853 217.212 256 217.212Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="rounded-lg rounded-b-none rounded-r-none bg-white p-4">
        <div className="text-[.975rem] leading-relaxed tracking-wide text-light-primary">
          Freelancers need to report
          <a href="" className="!mx-[.25rem]">
            Self-employment
          </a>
          income to the IRS, so make sure you stay on top of your taxes.
        </div>
      </div>
    </div>
  );
};

export default Tip;
