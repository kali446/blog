"use client";
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  return (
    <div className="fixed left-[0] top-[0] z-[1000] mb-5 h-[.3rem] w-full bg-light-contrast-300">
      <div
        style={{ width: width + "%" }}
        className="absolute left-[0] top-[0] h-[100%] w-[0] bg-accent"
      ></div>
    </div>
  );
};

export default ProgressBar;
