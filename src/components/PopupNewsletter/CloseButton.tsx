'use client'
import React, {useContext} from "react";
import { GlobalContext } from "@/context/global";

const CloseButton = () => {
    const {  setPopupNewsletter} = useContext(GlobalContext)
  return (
    <div onClick={() => setPopupNewsletter(false)} className="absolute right-4 top-4 cursor-pointer">
      <img className="h-auto w-[1.25rem]" src="/icons/close.svg" alt="" />
    </div>
  );
};

export default CloseButton;
