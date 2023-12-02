"use client";
import React, { useContext } from "react";
import PopupNewsletter from "../PopupNewsletter";
import { GlobalContext } from "@/context/global";
import { Backdrop } from "@/shared/Backdrop";

const ModalsWrapper = () => {
  const { popupNewsletter, setPopupNewsletter } = useContext(GlobalContext);
  return (
    <>
      {popupNewsletter && (
        <>
          <Backdrop close={() => setPopupNewsletter(false)} />
          <PopupNewsletter />
        </>
      )}
    </>
  );
};

export default ModalsWrapper;
