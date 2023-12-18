import { FOOTER_PAGES_1, FOOTER_PAGES_2 } from "@/data/global";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-light-footer dark:bg-dark-footer">
      <div className="mx-auto flex w-[60%] flex-col items-center gap-4 py-7 text-center md:w-[80%] xs:w-full xs:px-2">
        <div>
          <Image
            height={100}
            width={250}
            className="h-[1.8rem] w-auto"
            src="/images/logo.svg"
            alt="blog"
          />
        </div>
        <ul className="mobile414:text-xs flex cursor-pointer flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-medium capitalize dark:text-dark-contrast-900">
          {FOOTER_PAGES_1.map((item, i) => (
            <Link key={i} href={item.href}>
              <li className="relative capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:origin-right before:bg-accent before:opacity-0 before:transition-all before:duration-300 hover:text-accent hover:before:w-full hover:before:opacity-100">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <p className="text-[.78rem] font-medium leading-relaxed text-light-secondary dark:text-dark-contrast-600 xs:px-2">
          Welcome to our gadgets blog, your go-to source for the latest tech
          news, product reviews, and insights. From smartphones to laptops,
          earbuds to wearables, we cover it all. Stay informed, discover new
          products, and join our community of tech enthusiasts. Explore our site
          and join us on this exciting journey.
        </p>
      </div>

      <div className="flex justify-center border-t border-light-contrast-200 py-3 dark:border-dark-contrast-200/40">
        <p className="xs:text-xs mobile414:text-[.7rem] mobile375:text-[.6rem] text-sm text-light-secondary dark:text-dark-secondary">
          Copyright © {year} ClonedVerse. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
