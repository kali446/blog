import { SIDEBAR_PAGES } from "@/data/global";
import Button from "@/shared/Button/Button";
import Link from "next/link";
import React from "react";
import Content from "../Article/Content";

interface Props {
  content?: any;
  title: string;
  children?: React.ReactNode;
}

const PageLayout = ({ content, title, children }: Props) => {
  return (
    <div className="mx-auto grid min-h-screen w-[80%] grid-cols-12 gap-2 py-6">
      <div className="col-span-8 border-r border-black/[.1] pr-5">
        <h1 className="mb-[2rem] border-l-[4px] border-accent pl-[1.5rem] text-left text-[2.75rem] font-bold capitalize leading-none text-accent">
          {title}
        </h1>

        {content && <Content data={content} />}
        {children}
      </div>

      <div className="col-span-4 px-5">
        <Button
          pattern="primary"
          layout="full"
          className="mb-[3.5rem] !rounded-none !py-[1rem] !font-semibold !uppercase drop-shadow-lg"
        >
          Write for us
        </Button>

        <ul className="w-full">
          {SIDEBAR_PAGES.map((item, i) => (
            <li className="mb-1 border-b border-black/[.2] py-[.75rem] text-sm font-light capitalize text-light-primary drop-shadow-sm first:border-t last:mb-0">
              <Link
                className="group transition-all hover:font-semibold hover:text-accent"
                href={item.href}
              >
                <div className="absolute left-0 top-[50%] translate-y-[-50%] scale-0 text-accent opacity-0 transition-all group-hover:block group-hover:scale-100 group-hover:opacity-100">
                  <svg
                    width={7}
                    height="auto"
                    viewBox="0 0 302 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M293.231 236.022L65.3843 8.17945C60.1145 2.90547 53.0798 0 45.5788 0C38.0779 0 31.0432 2.90547 25.7733 8.17945L8.99403 24.9546C-1.92438 35.8855 -1.92438 53.6513 8.99403 64.5656L200.322 255.894L8.78174 447.434C3.51193 452.708 0.602295 459.739 0.602295 467.236C0.602295 474.741 3.51193 481.771 8.78174 487.05L25.5611 503.821C30.835 509.095 37.8656 512 45.3666 512C52.8675 512 59.9022 509.095 65.1721 503.821L293.231 275.77C298.513 270.479 301.414 263.416 301.398 255.906C301.414 248.368 298.513 241.308 293.231 236.022Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="transition-all group-hover:px-[.95rem]">
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageLayout;
