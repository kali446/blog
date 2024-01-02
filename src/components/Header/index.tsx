"use client";
import React, { useEffect, useState, useContext } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";
import { useTheme } from "next-themes";
import { GlobalContext } from "@/context/global";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {
    setOpenNavMenu,
    openNavMenu,
    setPopupNewsletter,
    searchText,
    setSearchText,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (searchText.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchText]);

  const logoHeight = 100;
  const logoWidth = 250;

  return (
    <Headroom>
      <div
        className={`z-[1000] flex h-header w-full items-center justify-between bg-light-header px-6 dark:bg-dark-header sm:px-4 mobile414:px-2 ${
          openNavMenu && "bg-transparent dark:bg-dark-site"
        }`}
      >
        <div className="relative flex items-center">
          <div
            onClick={() => {
              setOpenNavMenu(!openNavMenu);
            }}
            className="cursor-pointer text-black dark:text-white"
          >
            {openNavMenu ? (
              <Image
                className="invert dark:invert-0"
                height={20}
                width={20}
                src="/icons/close.svg"
                alt="Close menu"
              />
            ) : (
              <Image
                className="dark:invert"
                height={20}
                width={20}
                src="/icons/menu.svg"
                alt="Close menu"
              />
            )}
          </div>

          {openNavMenu ? (
            <Link href={"/"} className="mx-4 block">
              <Image
                height={logoHeight}
                width={logoWidth}
                className="h-[1.85rem] w-auto"
                src="/images/logo.svg"
                alt="blog"
              />
            </Link>
          ) : (
            <Link href={"/"} className="mx-4 block sm:hidden">
              <Image
                height={logoHeight}
                width={logoWidth}
                className="h-[1.5rem] w-auto"
                src="/images/logo.svg"
                alt="blog"
              />
            </Link>
          )}

          <div className="border-x border-light-contrast-300 px-3 py-1  text-[.75rem] font-medium capitalize text-light-secondary dark:border-dark-contrast-500/40 dark:text-dark-contrast-800 lg:hidden">
            Your ultimate programming hub
          </div>
          {!openNavMenu && (
            <>
              {showSearch && <SearchInput close={() => setShowSearch(false)} />}
            </>
          )}
        </div>

        {!openNavMenu && (
          <div className="hidden sm:block">
            <Link href={"/"} className="mx-4">
              <Image
                height={logoHeight}
                width={logoWidth}
                className="h-[1.85rem] w-auto mobile414:h-[1.6rem]"
                src="/images/logo.svg"
                alt="blog"
              />
            </Link>
          </div>
        )}

        {!openNavMenu && (
          <>
            <div className="flex items-center gap-3 xs:gap-2">
              <div
                onClick={() => setPopupNewsletter(true)}
                className="mr-2 flex cursor-pointer items-center gap-1 text-[.875rem] font-bold uppercase text-light-secondary transition-colors duration-200 hover:text-accent dark:text-white dark:hover:text-accent sm:hidden"
              >
                <svg
                  width={18}
                  height="auto"
                  viewBox="0 0 448 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M277.888 15.9681C256.13 5.35729 232.223 -0.106249 208.016 5.72609e-05H207.984C166.704 5.72609e-05 130.768 13.8401 100.16 41.5201C69.552 69.2001 52.16 103.568 48.016 144.624L34.448 278.928C11.488 289.552 0 308.576 0 335.984V336.016C0 378.672 21.328 400 63.984 400H113.216C116.288 419.728 125.264 437.024 140.112 451.888C158.88 470.624 181.488 480 208 480C234.512 480 257.136 470.624 275.888 451.888C290.736 437.024 299.712 419.728 302.784 400H352.016C394.672 400 416 378.672 416 336.016V335.984C416 308.576 404.512 289.552 381.552 278.928L375.312 217.248L375.472 217.184C423.84 201.28 448 166.24 448 112C448 81.0721 437.072 54.6721 415.2 32.8001C393.328 10.9281 366.928 5.72609e-05 336 5.72609e-05C314.432 5.72609e-05 295.056 5.32806 277.888 15.9681ZM250.784 39.2481C232.928 59.8081 224 84.0481 224 112C224 142.928 234.928 169.328 256.8 191.2C278.672 213.072 305.072 224 336 224C338.64 224 341.248 223.92 343.808 223.76L350.688 291.888C350.987 294.995 352.208 297.942 354.192 300.352C356.139 302.787 358.769 304.587 361.744 305.52C376.576 310.256 384 320.4 384 335.984V336.016C384 344.848 380.88 352.384 374.624 358.624C368.368 364.864 360.848 368 352.016 368H63.984C42.656 368 32 357.344 32 336.016V335.984C32 320.416 39.424 310.256 54.24 305.52C57.221 304.589 59.8563 302.79 61.808 300.352C63.7954 297.938 65.0157 294.985 65.312 291.872L79.856 147.84C83.184 114.944 97.104 87.4241 121.616 65.2481C146.144 43.0881 174.928 32.0001 208 32.0001H208.032C222.912 32.0001 237.168 34.4161 250.784 39.2481ZM287.424 48.3361C284.615 50.5334 281.944 52.9005 279.424 55.4241C263.824 71.0561 256 89.9201 256 112C256 134.08 263.808 152.96 279.424 168.56C295.04 184.16 313.92 192 336 192C341.728 192 347.248 191.472 352.544 190.416C353.136 190.208 353.744 190.032 354.384 189.888C357.744 189.088 360.944 188.192 364.016 187.2C374.782 183.153 384.531 176.796 392.576 168.576C408.192 152.928 416 134.08 416 112C416 110.624 415.968 109.248 415.904 107.888C414.992 87.5681 407.216 70.0801 392.576 55.4241C376.944 39.8081 358.08 32.0001 336 32.0001H335.936C318.432 32.0001 302.656 37.2001 288.608 47.5361C288.23 47.8187 287.824 48.0856 287.424 48.3361ZM315.312 92.6881L320.976 98.3361L328 105.376L342.064 91.3121L364.688 68.6881C367.808 65.5681 371.568 64.0001 376 64.0001C380.432 64.0001 384.192 65.5681 387.312 68.6881C388.805 70.1682 389.988 71.9306 390.793 73.8727C391.598 75.8149 392.008 77.8978 392 80.0001C392.007 82.1022 391.597 84.1849 390.792 86.1269C389.987 88.0689 388.804 89.8314 387.312 91.3121L339.312 139.312C336.192 142.432 332.432 144 328 144C323.568 144 319.808 142.432 316.688 139.312L292.688 115.312C291.195 113.832 290.012 112.07 289.207 110.127C288.402 108.185 287.992 106.102 288 104C287.993 101.898 288.403 99.8153 289.208 97.8733C290.013 95.9313 291.196 94.1687 292.688 92.6881C295.808 89.5681 299.568 88.0001 304 88.0001C308.432 88.0001 312.192 89.5681 315.312 92.6881ZM208 448C171.04 448 150.096 432 145.152 400H270.848C265.888 432 244.944 448 208 448Z"
                    fill="currentColor"
                  />
                </svg>

                <span>subscribe</span>
              </div>

              <div
                onClick={() => {
                  setShowSearch(!showSearch);
                  setSearchText("");
                }}
                className={"cursor-pointer text-light-primary dark:text-white"}
              >
                <Image
                  className="dark:invert mobile414:h-auto mobile414:w-[1.15rem]"
                  height={22}
                  width={22}
                  src="/icons/search.svg"
                  alt="Close menu"
                />
              </div>

              <div
                onClick={() => {
                  if (theme === "light") {
                    setTheme("dark");
                  } else {
                    setTheme("light");
                  }
                }}
                className={
                  "flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-[.4rem] bg-light-contrast-200 shadow-sm transition-all hover:bg-light-contrast-300 dark:bg-dark-contrast-100 dark:text-dark-contrast-900 mobile414:h-[2.2rem] mobile414:w-[2.2rem] mobile414:rounded-md"
                }
              >
                <Image
                  className="dark:invert mobile414:h-auto mobile414:w-[1.15rem]"
                  height={22}
                  width={22}
                  src="/icons/dark-mode.svg"
                  alt="Close menu"
                />
              </div>
            </div>

            {showResults && (
              <SearchResults
                show={showResults}
                setShow={setShowResults}
                setShowSearch={setShowSearch}
              />
            )}
          </>
        )}
      </div>
    </Headroom>
  );
};

export default Header;
