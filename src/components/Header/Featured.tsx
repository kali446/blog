import React from "react";
import FeaturedCard from "@/components/Cards/CardArticle3";
import { Article } from "@/sanity/queries";

interface Props {
  data: Article[] | null;
  show: string;
  setShow: (val: string) => void;
}

const Featured = ({ show, setShow, data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <div
      onMouseLeave={() => {
        setShow("");
      }}
      className={`fixed left-[0] top-header z-[900] w-full translate-y-[0%] rounded-b-md bg-light-site px-[4rem] py-4 shadow-sm dark:bg-dark-submenu md:px-[1rem] ${
        show === "featured"
          ? "opacity-1 translate-y-0"
          : "translate-y-[-150%] opacity-0"
      } ${
        show === "featured" ? "visible" : "hidden"
      } transition-all duration-300`}
    >
      <div className="mx-[1.5rem] w-full border-b border-light-contrast-300/60 pb-2 dark:border-dark-contrast-600/50">
        <span className="text-[.75rem] uppercase text-light-primary dark:text-dark-primary">
          popular
        </span>
      </div>

      <div className="mt-3 grid grid-cols-12 gap-4">
        {data?.map((item, i) => (
          <div key={i} className="col-span-3 lg:col-span-6">
            <FeaturedCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
