import React from "react";

interface Props {
  type?: string;
  placeholder?: string;
  value?: string | number;
}

const Input = ({ type, placeholder, value }: Props) => {
  return (
    <input
      className="placeholder:text- h-[2.35rem] w-full rounded-md bg-light-contrast-200/70 px-3 text-[.775rem] placeholder:font-medium placeholder:text-light-primary/90 dark:bg-dark-contrast-100 dark:placeholder:text-dark-contrast-700"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
