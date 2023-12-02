import React from "react";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ButtonPrimary = ({ children, onClick }: Props) => {
  return (
    <button
      className="group relative h-[2.15rem] overflow-hidden rounded-full bg-light-contrast-300/80 px-[1.25rem] text-[.785rem] font-bold uppercase leading-none text-light-primary"
      onClick={onClick}
    >
      <div className="absolute left-[0] top-[0] z-10 h-full w-full translate-y-[101%] bg-accent transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-[0] group-hover:rounded-full"></div>
      <span className="relative z-20 transition-colors group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default ButtonPrimary;
