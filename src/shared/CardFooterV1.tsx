import React from "react";
import CardShareIcons from "./CardShareIcons";

interface Props {
  article: {
    estimatedReadingTime: number;
    title: string;
    url: string;
  };
  color?: string;
  darkInvert?: boolean;
  className?: string;
}

const CardFooterV1 = ({
  article: { estimatedReadingTime, title, url },
  color = "white",
  darkInvert,
  className,
}: Props) => {
  return (
    <div
      className={`relative h-[2.75rem] overflow-hidden border-t border-light-contrast-200 text-[.735rem] font-medium uppercase text-light-secondary transition-all group-hover:border-light-contrast-300/[.25] dark:border-dark-contrast-200 dark:text-dark-contrast-900 md:border-light-contrast-300/[.25] md:text-white ${
        color === "white" && "group-hover:text-white"
      } ${
        color === "black" &&
        "group-hover:text-black dark:group-hover:text-white"
      } ${className}`}
    >
      <div className="flex h-[100%] items-center justify-between transition-all group-hover:translate-y-[-150%] md:translate-y-[-100%]">
        <div className="flex gap-3">
          <span>{estimatedReadingTime || 1} min read</span>
        </div>

        <div>share</div>
      </div>

      <div className="absolute left-[0] top-[0] flex h-[100%] w-[100%] translate-y-[150%] items-center justify-between transition-all group-hover:translate-y-[0%] md:translate-y-[0%]">
        <span>Read more</span>
        <CardShareIcons
          color={color || "white"}
          darkInvert={darkInvert || false}
          article={{
            title,
            url,
          }}
        />
      </div>
    </div>
  );
};

export default CardFooterV1;
