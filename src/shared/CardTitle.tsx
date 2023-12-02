import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardTitle = ({ children }: Props) => {
  return (
    <div className="border-b border-light-contrast-200 pb-2 dark:border-dark-contrast-300/30">
      <span className="text-[.75rem] uppercase text-light-primary dark:text-white">
        {children}
      </span>
    </div>
  );
};

export default CardTitle;
