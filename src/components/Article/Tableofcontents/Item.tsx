import React from "react";

interface Props {
  text: string;
  level: number;
  id: string;
  active: boolean;
  num: number;
}

const Item = ({ text, id, level, active, num }: Props) => {
  return (
    <li
      className={`
     group relative cursor-pointer px-4 py-[.1rem] text-sm transition-all duration-200
      ${
        active
          ? "relative mb-1  text-accent"
          : "pb-3 text-light-contrast-600 hover:text-accent dark:text-dark-contrast-900"
      }`}
    >
      <div
        className={`absolute left-[0] top-[0] h-[0] w-[3px] bg-accent opacity-0 transition-all duration-300 ${
          active && "!h-full !opacity-100"
        }`}
      ></div>

      <span className="pr-1 text-[1rem]">{num}.</span>
      <a
        className={`group-hover:underline ${active && "underline"}`}
        href={`#${id}`}
      >
        {text}
      </a>
    </li>
  );
};

export default Item;
