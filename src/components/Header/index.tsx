"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import Link from "next/link";
import Featured from "./Featured";
import { useTheme } from "next-themes";
import { GlobalContext } from "@/context/global";

const Header = () => {
  const inputRef = useRef();
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showDropdown, setShowDropdown] = useState("");

  const { setOpenNavMenu, openNavMenu, setPopupNewsletter } =
    useContext(GlobalContext);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  return (
    <>
      <div className="fixed left-[0] top-[0] z-[1000] flex h-header w-full items-center justify-between bg-light-header px-6 dark:bg-dark-header sm:px-4">
        <div className="relative flex items-center">
          <div
            onClick={() => {
              setOpenNavMenu(!openNavMenu);
            }}
            className="cursor-pointer text-black dark:text-white"
          >
            {openNavMenu ? (
              <svg
                width={18}
                height={18}
                viewBox="0 0 449 449"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.72007 444.28C6.20604 445.768 7.97065 446.948 9.91302 447.753C11.8554 448.558 13.9374 448.973 16.0401 448.973C18.1427 448.973 20.2247 448.558 22.1671 447.753C24.1095 446.948 25.8741 445.768 27.3601 444.28L224 247.64L420.72 444.28C423.722 447.282 427.794 448.969 432.04 448.969C436.286 448.969 440.358 447.282 443.36 444.28C446.362 441.278 448.049 437.206 448.049 432.96C448.049 428.714 446.362 424.642 443.36 421.64L246.64 225L443.28 28.2801C446.282 25.2778 447.969 21.2059 447.969 16.9601C447.969 12.7142 446.282 8.64232 443.28 5.64007C440.278 2.63782 436.206 0.951172 431.96 0.951172C427.714 0.951172 423.642 2.63782 420.64 5.64007L224 202.36L27.2801 5.72007C24.2192 3.09885 20.282 1.72915 16.2552 1.88469C12.2284 2.04023 8.40856 3.70954 5.55905 6.55906C2.70954 9.40857 1.04022 13.2284 0.884686 17.2552C0.729147 21.282 2.09884 25.2192 4.72007 28.2801L201.36 225L4.72007 421.72C1.74005 424.718 0.0673828 428.773 0.0673828 433C0.0673828 437.227 1.74005 441.282 4.72007 444.28Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width={20}
                height={20}
                viewBox="0 0 428 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.666992 128.667H427.334V171.333H0.666992V128.667ZM0.666992 0.666687H427.334V43.3334H0.666992V0.666687ZM0.666992 256.667H427.334V299.333H0.666992V256.667Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>

          <Link href={"/"} className="mx-4 block sm:hidden">
            <img
              className="h-[1.85rem] w-auto"
              src="/images/logo.png"
              alt="blog"
            />
          </Link>
          <div className="border-x border-light-contrast-300 px-3 py-1  text-[.75rem] font-medium capitalize text-light-secondary dark:border-dark-contrast-500/40 dark:text-dark-contrast-800 lg:hidden">
            Discover your next gadget review
          </div>
          {!openNavMenu && (
            <>
              <div
                onMouseEnter={() => {
                  setShowDropdown("featured");
                }}
                onClick={() => {
                  if (showDropdown === "featured") {
                    setShowDropdown("");
                  } else {
                    setShowDropdown("featured");
                  }
                }}
                className="lg:px-0 group h-header cursor-pointer px-4 text-light-primary hover:text-accent dark:text-white sm:hidden"
              >
                <svg
                  className="transition-all group-hover:rotate-90"
                  width={18}
                  height="auto"
                  viewBox="0 0 416 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M208 0C181.536 0 160 21.536 160 48C160 74.464 181.536 96 208 96C234.464 96 256 74.464 256 48C256 21.536 234.464 0 208 0ZM48 0C21.536 0 0 21.536 0 48C0 74.464 21.536 96 48 96C74.464 96 96 74.464 96 48C96 21.536 74.464 0 48 0ZM368 0C341.536 0 320 21.536 320 48C320 74.464 341.536 96 368 96C394.464 96 416 74.464 416 48C416 21.536 394.464 0 368 0Z"
                    fill="currentColor"
                  />
                </svg>

                <Featured show={showDropdown} setShow={setShowDropdown} />
              </div>

              {showSearch && (
                <SearchInput value={searchQuery} setValue={setSearchQuery} />
              )}
            </>
          )}
        </div>

        <div className="hidden sm:block">
          <Link href={"/"} className="mx-4">
            <img
              className="h-[1.85rem] w-auto"
              src="/images/logo.png"
              alt="blog"
            />
          </Link>
        </div>

        {!openNavMenu && (
          <>
            <div className="flex items-center gap-3">
              <div
                onClick={() => setPopupNewsletter(true)}
                className="mr-2 flex cursor-pointer items-center gap-1 text-[.875rem] font-bold uppercase text-light-secondary transition-colors duration-200 hover:text-accent dark:text-white sm:hidden"
              >
                <svg
                  width={18}
                  height="auto"
                  viewBox="0 0 448 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M277.888 15.9681C256.13 5.35729 232.223 -0.106249 208.016 5.72609e-05H207.984C166.704 5.72609e-05 130.768 13.8401 100.16 41.5201C69.552 69.2001 52.16 103.568 48.016 144.624L34.448 278.928C11.488 289.552 0 308.576 0 335.984V336.016C0 378.672 21.328 400 63.984 400H113.216C116.288 419.728 125.264 437.024 140.112 451.888C158.88 470.624 181.488 480 208 480C234.512 480 257.136 470.624 275.888 451.888C290.736 437.024 299.712 419.728 302.784 400H352.016C394.672 400 416 378.672 416 336.016V335.984C416 308.576 404.512 289.552 381.552 278.928L375.312 217.248L375.472 217.184C423.84 201.28 448 166.24 448 112C448 81.0721 437.072 54.6721 415.2 32.8001C393.328 10.9281 366.928 5.72609e-05 336 5.72609e-05C314.432 5.72609e-05 295.056 5.32806 277.888 15.9681ZM250.784 39.2481C232.928 59.8081 224 84.0481 224 112C224 142.928 234.928 169.328 256.8 191.2C278.672 213.072 305.072 224 336 224C338.64 224 341.248 223.92 343.808 223.76L350.688 291.888C350.987 294.995 352.208 297.942 354.192 300.352C356.139 302.787 358.769 304.587 361.744 305.52C376.576 310.256 384 320.4 384 335.984V336.016C384 344.848 380.88 352.384 374.624 358.624C368.368 364.864 360.848 368 352.016 368H63.984C42.656 368 32 357.344 32 336.016V335.984C32 320.416 39.424 310.256 54.24 305.52C57.221 304.589 59.8563 302.79 61.808 300.352C63.7954 297.938 65.0157 294.985 65.312 291.872L79.856 147.84C83.184 114.944 97.104 87.4241 121.616 65.2481C146.144 43.0881 174.928 32.0001 208 32.0001H208.032C222.912 32.0001 237.168 34.4161 250.784 39.2481ZM287.424 48.3361C284.615 50.5334 281.944 52.9005 279.424 55.4241C263.824 71.0561 256 89.9201 256 112C256 134.08 263.808 152.96 279.424 168.56C295.04 184.16 313.92 192 336 192C341.728 192 347.248 191.472 352.544 190.416C353.136 190.208 353.744 190.032 354.384 189.888C357.744 189.088 360.944 188.192 364.016 187.2C374.782 183.153 384.531 176.796 392.576 168.576C408.192 152.928 416 134.08 416 112C416 110.624 415.968 109.248 415.904 107.888C414.992 87.5681 407.216 70.0801 392.576 55.4241C376.944 39.8081 358.08 32.0001 336 32.0001H335.936C318.432 32.0001 302.656 37.2001 288.608 47.5361C288.23 47.8187 287.824 48.0856 287.424 48.3361ZM315.312 92.6881L320.976 98.3361L328 105.376L342.064 91.3121L364.688 68.6881C367.808 65.5681 371.568 64.0001 376 64.0001C380.432 64.0001 384.192 65.5681 387.312 68.6881C388.805 70.1682 389.988 71.9306 390.793 73.8727C391.598 75.8149 392.008 77.8978 392 80.0001C392.007 82.1022 391.597 84.1849 390.792 86.1269C389.987 88.0689 388.804 89.8314 387.312 91.3121L339.312 139.312C336.192 142.432 332.432 144 328 144C323.568 144 319.808 142.432 316.688 139.312L292.688 115.312C291.195 113.832 290.012 112.07 289.207 110.127C288.402 108.185 287.992 106.102 288 104C287.993 101.898 288.403 99.8153 289.208 97.8733C290.013 95.9313 291.196 94.1687 292.688 92.6881C295.808 89.5681 299.568 88.0001 304 88.0001C308.432 88.0001 312.192 89.5681 315.312 92.6881ZM208 448C171.04 448 150.096 432 145.152 400H270.848C265.888 432 244.944 448 208 448Z"
                    fill="currentColor"
                  />
                </svg>

                <span>subscribe</span>
              </div>

              <div
                onClick={() => {
                  setShowSearch(!showSearch);
                  setSearchQuery("");
                }}
                className={"cursor-pointer text-light-primary dark:text-white"}
              >
                <svg
                  width={22}
                  height={"auto"}
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M507.147 484.145L374.957 354.067C409.573 316.458 430.842 266.718 430.842 211.985C430.826 94.9017 334.387 0 215.415 0C96.4434 0 0.00488281 94.9017 0.00488281 211.985C0.00488281 329.069 96.4434 423.971 215.415 423.971C266.819 423.971 313.966 406.191 350.999 376.632L483.702 507.222C490.168 513.592 500.666 513.592 507.132 507.222C508.67 505.72 509.892 503.926 510.727 501.945C511.562 499.964 511.993 497.837 511.995 495.687C511.996 493.537 511.568 491.409 510.735 489.427C509.903 487.445 508.683 485.649 507.147 484.145ZM215.415 391.356C114.752 391.356 33.1488 311.049 33.1488 211.985C33.1488 112.922 114.752 32.6152 215.415 32.6152C316.079 32.6152 397.682 112.922 397.682 211.985C397.682 311.049 316.079 391.356 215.415 391.356Z"
                    fill="currentColor"
                  />
                </svg>
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
                  "flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-[.4rem] bg-light-contrast-200 shadow-sm transition-all hover:bg-light-contrast-300 dark:bg-dark-contrast-100 dark:text-dark-contrast-900"
                }
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 512 511"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M499.897 290.363C494.662 289.054 489.428 290.363 484.848 293.635C467.835 308.03 448.206 319.807 426.613 327.659C406.33 335.511 384.083 339.437 360.528 339.437C307.528 339.437 259.109 317.844 224.43 283.166C189.751 248.487 168.159 200.068 168.159 147.068C168.159 124.821 172.085 103.229 178.628 83.5995C185.826 62.6614 196.295 43.6863 210.035 27.3284C215.924 20.1309 214.615 9.66188 207.418 3.77305C202.838 0.501472 197.603 -0.807159 192.369 0.501472C136.752 15.5507 88.3326 48.9208 53.6538 93.4142C20.2838 137.253 0 191.562 0 251.104C0 322.425 28.7899 387.202 75.9006 434.312C123.011 481.423 187.788 510.213 259.109 510.213C319.306 510.213 374.923 489.275 419.416 454.596C464.564 419.263 497.28 368.881 511.02 311.301C514.292 301.486 509.057 292.326 499.897 290.363ZM399.787 427.115C361.836 457.213 313.417 475.534 260.417 475.534C198.257 475.534 141.986 450.016 101.419 409.448C60.8513 368.881 35.333 312.61 35.333 250.45C35.333 198.759 52.3452 151.648 81.7894 113.698C102.073 87.5254 127.591 65.933 157.036 50.8837C153.764 58.0812 150.492 65.2787 147.875 73.1305C139.369 96.6858 135.443 121.55 135.443 147.722C135.443 209.882 160.962 266.808 201.529 307.375C242.097 347.943 299.022 373.461 361.182 373.461C388.663 373.461 414.836 368.881 439.045 359.721C447.552 356.449 456.058 353.177 463.909 349.251C448.206 379.35 426.613 406.177 399.787 427.115Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {showResults && <SearchResults />}
          </>
        )}
      </div>
    </>
  );
};

export default Header;
