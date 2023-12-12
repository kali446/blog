"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/global";
import Image from "next/image";

const CloseButton = () => {
  const { setPopupNewsletter } = useContext(GlobalContext);
  return (
    <div
      onClick={() => setPopupNewsletter(false)}
      className="absolute right-4 top-4 cursor-pointer"
    >
      <Image
        width={40}
        height={40}
        className="h-auto w-[1.25rem]"
        src="/icons/close.svg"
        alt=""
      />
    </div>
  );
};

export default CloseButton;
