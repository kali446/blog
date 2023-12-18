import React from "react";
import CardShareIcons from "./CardShareIcons";

interface Props {
  article: {
    estimatedReadingTime: number;
    title: string;
    url: string;
  };
  darkInvert?: boolean;
}

const CardFooterV3 = ({
  article: { estimatedReadingTime, title, url },
  darkInvert,
}: Props) => {
  return (
    <div
      className={`relative h-[2.75rem] overflow-hidden border-t border-light-contrast-200/30 text-[.735rem] font-medium uppercase text-dark-secondary transition-all dark:text-dark-contrast-900`}
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

export default CardFooterV3;
