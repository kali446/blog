import React from "react";
import Image from "next/image";

interface Props {
  text: string;
}

const ButtonV2 = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="group relative inline-flex h-[4rem] items-center justify-start rounded-full bg-black pl-4 pr-[8rem] text-xs font-light uppercase tracking-[2px] text-white drop-shadow-sm transition-all duration-300 hover:tracking-[0px] xs:h-[3.5rem] xs:pr-[5.5rem] xs:text-[.65rem]"
    >
      <span className="relative z-20">{text}</span>
      <div className="absolute right-[.5rem] top-[.5rem] z-10 flex h-[3rem] w-[3rem] origin-center items-center justify-center rounded-full bg-accent text-white transition-all duration-700 group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full xs:right-[.35rem] xs:top-[.35rem] xs:h-[2.75rem] xs:w-[2.75rem]"></div>

      <div className="absolute right-[.5rem] top-[.5rem] z-20  flex h-[3rem] w-[3rem] items-center justify-center overflow-hidden bg-transparent xs:right-[.35rem] xs:top-[.35rem] xs:h-[2.75rem] xs:w-[2.75rem]">
        <Image
          height={40}
          width={40}
          className="absolute left-[50%] top-[50%] h-auto w-[1.25rem] translate-x-[-50%] translate-y-[-50%] invert transition-all duration-500 group-hover:left-[150%]"
          src="/icons/arrow.svg"
          alt=""
        />

        <Image
          height={40}
          width={40}
          className="absolute left-[-150%] top-[50%] h-auto w-[1.25rem] translate-y-[-50%] invert transition-all duration-500 group-hover:left-[50%]"
          src="/icons/arrow.svg"
          alt=""
        />
      </div>
    </button>
  );
};

export default ButtonV2;
