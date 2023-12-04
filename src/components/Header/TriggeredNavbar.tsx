"use client";
import React, { useState, useContext } from "react";
import Header from ".";
import Button from "@/shared/Button/Button";
import { MEGAMENU, NavItemType } from "@/data/navigation";
import { GlobalContext } from "@/context/global";
import { useMediaQuery } from "react-responsive";

const TriggeredNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState<NavItemType[] | null>(null);
  const { openNavMenu } = useContext(GlobalContext);

  return (
    <div
      className={`fixed left-[0] top-[0] z-[1005] flex h-[100vh] w-full flex-col justify-between overflow-y-auto overflow-x-hidden bg-white transition-all duration-500 dark:bg-dark-site ${
        openNavMenu ? "visible" : "hidden"
      }`}
    >
      <div className="absolute right-[-5rem] top-[50%] h-[22.5rem] w-[22.5rem] translate-y-[-50%] rounded-full bg-black bg-gradient-to-t from-[rgb(255,206,236)] to-[rgb(152,150,240)] blur-3xl dark:hidden lg:h-[15rem] lg:w-[15rem]"></div>

      <Header />
      <div className="mb-5 mt-header grid grid-cols-12 gap-7 px-5 pt-5 sm:gap-0 sm:gap-y-4">
        {!selectedMenu?.length ? (
          <div className="col-span-3 sm:col-span-12">
            <ul>
              {MEGAMENU.map((item, i) => (
                <MenuItem
                  key={i}
                  item={item}
                  hasChildren={item?.children?.length ? true : false}
                  active={i === 0 ? true : false}
                  setMenu={setSelectedMenu}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="col-span-9 grid grid-cols-12 sm:col-span-12">
            <div className="col-span-3 sm:col-span-6 xs:col-span-12">
              <ul className="flex flex-col gap-1">
                <div
                  onClick={() => setSelectedMenu(null)}
                  className="text-blue mb-[1rem] inline-flex cursor-pointer items-center justify-start gap-1 py-2 text-sm font-semibold uppercase underline"
                >
                  <svg
                    className="rotate-180"
                    width={15}
                    height="auto"
                    viewBox="0 0 512 426"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M503.816 193.107L318.915 8.20165C313.637 2.92351 306.602 0.0263672 299.101 0.0263672C291.592 0.0263672 284.561 2.92768 279.283 8.20165L262.496 24.9934C257.222 30.2633 254.316 37.3022 254.316 44.8073C254.316 52.3082 257.222 59.5844 262.496 64.8542L370.364 172.96H27.6603C12.2088 172.96 0 185.057 0 200.512V224.251C0 239.707 12.2088 253.023 27.6603 253.023H371.588L262.5 361.733C257.226 367.011 254.32 373.858 254.32 381.363C254.32 388.86 257.226 395.807 262.5 401.081L279.287 417.819C284.566 423.097 291.596 425.974 299.105 425.974C306.606 425.974 313.641 423.06 318.919 417.782L503.821 232.88C509.111 227.586 512.021 220.518 512 213.004C512.017 205.466 509.111 198.394 503.816 193.107Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="shrink-0">go back</span>
                </div>

                {selectedMenu.map((item, i) => (
                  <li
                    className={`flex cursor-pointer gap-2 rounded-md p-2 text-sm font-semibold capitalize transition-all duration-300 hover:bg-light-contrast-200 dark:hover:bg-dark-contrast-300 ${
                      i === 0
                        ? "bg-light-contrast-200 dark:bg-dark-contrast-300"
                        : ""
                    }`}
                    key={i}
                  >
                    {item?.name}
                    {item?.isNew && (
                      <span className="flex items-center justify-center rounded-md bg-accent px-[.35rem] text-xs uppercase !leading-[0] text-white dark:text-dark-primary">
                        {item.isNew && "new"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="col-span-3"></div> */}
            {/* <div className="col-span-6"></div> */}
          </div>
        )}
      </div>

      <div className="max-w-[480px] px-5 pb-5">
        <span className="cursor-pointer font-semibold text-light-primary transition-colors hover:text-accent dark:text-dark-primary">
          manjiljunior@gmail.com
        </span>
        <p className="mt-2 text-xs font-semibold leading-[1.5] text-light-secondary dark:text-dark-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          similique totam vel molestias provident, culpa modi veniam nemo
          distinctio, odit molestiae. Aperiam sed molestiae aspernatur tempora
          tempore. Id, architecto cum!
        </p>

        <ul className="my-4 flex cursor-pointer items-center gap-4">
          <li
            className="flex items-center gap-[.25rem] text-light-secondary
hover:text-[#4267B2] dark:text-dark-contrast-900"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 266 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M172.651 512V278.47H251.006L262.761 187.432H172.651V129.318C172.651 102.968 179.938 85.0116 217.766 85.0116L265.933 84.9918V3.56429C257.603 2.4818 229.01 0 195.73 0C126.236 0 78.6594 42.4183 78.6594 120.301V187.432H0.0668945V278.47H78.6594V512H172.651Z"
                fill={"currentColor"}
              />
            </svg>

            <span className="text-xs font-medium uppercase">23</span>
          </li>

          <li className="flex items-center gap-[.25rem] text-light-secondary hover:text-[#C13584] dark:text-dark-contrast-900">
            <svg
              width={16}
              height={16}
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M511.5 150.529C510.3 123.324 505.901 104.622 499.598 88.4153C493.096 71.2129 483.094 55.8119 469.992 43.0084C457.187 30.0059 441.684 19.9019 424.681 13.5026C408.382 7.20141 389.776 2.80055 362.572 1.60231C335.163 0.300059 326.463 0 256.949 0C187.436 0 178.735 0.300059 151.429 1.50029C124.224 2.70053 105.522 7.10339 89.3194 13.4006C72.1121 19.9019 56.7111 29.9038 43.9076 43.0084C30.905 55.8109 20.8061 71.3139 14.4018 88.3173C8.10058 104.622 3.70072 123.224 2.50148 150.427C1.20023 177.836 0.89917 186.536 0.89917 256.05C0.89917 325.564 1.20023 334.265 2.39946 361.571C3.5997 388.776 8.00256 407.478 14.3048 423.685C20.8061 440.887 30.905 456.288 43.9076 469.092C56.7111 482.094 72.2141 492.198 89.2174 498.597C105.521 504.899 124.122 509.299 151.332 510.498C178.633 511.702 187.339 511.998 256.852 511.998C326.366 511.998 335.066 511.702 362.373 510.498C389.577 509.298 408.28 504.9 424.482 498.597C441.499 492.018 456.953 481.956 469.854 469.055C482.756 456.155 492.819 440.701 499.4 423.685C505.697 407.381 510.101 388.775 511.3 361.571C512.5 334.265 512.8 325.564 512.8 256.05C512.8 186.536 512.698 177.835 511.5 150.529ZM465.393 359.57C464.291 384.575 460.091 398.078 456.59 407.08C447.986 429.384 430.284 447.087 407.979 455.691C398.977 459.192 385.377 463.392 360.469 464.489C333.464 465.693 325.366 465.989 257.051 465.989C188.737 465.989 180.536 465.693 153.628 464.489C128.623 463.392 115.12 459.192 106.119 455.691C95.0196 451.588 84.9166 445.087 76.715 436.585C68.2133 428.284 61.712 418.282 57.6092 407.182C54.1086 398.18 49.9087 384.575 48.8115 359.672C47.6073 332.667 47.3112 324.563 47.3112 256.249C47.3112 187.935 47.6073 179.734 48.8115 152.831C49.9087 127.826 54.1086 114.323 57.6092 105.322C61.712 94.2174 68.2133 84.1164 76.817 75.9128C85.1146 67.4112 95.1166 60.9099 106.221 56.8121C115.223 53.3114 128.827 49.1106 153.73 48.0094C180.735 46.8091 188.839 46.5091 257.148 46.5091C325.565 46.5091 333.663 46.8091 360.571 48.0094C385.576 49.1116 399.079 53.3104 408.081 56.8111C419.18 60.9099 429.284 67.4112 437.484 75.9128C445.986 84.2155 452.487 94.2174 456.59 105.322C460.091 114.323 464.291 127.923 465.392 152.831C466.592 179.836 466.892 187.935 466.892 256.249C466.892 324.563 466.593 332.565 465.393 359.57Z"
                fill="currentColor"
              />
              <path
                d="M256.95 124.524C184.338 124.524 125.425 183.434 125.425 256.05C125.425 328.666 184.338 387.576 256.95 387.576C329.564 387.576 388.476 328.666 388.476 256.05C388.476 183.434 329.564 124.524 256.95 124.524ZM256.95 341.367C209.843 341.367 171.632 303.161 171.632 256.05C171.632 208.939 209.843 170.733 256.949 170.733C304.06 170.733 342.267 208.939 342.267 256.05C342.267 303.161 304.059 341.367 256.95 341.367ZM424.385 119.323C424.385 136.281 410.635 150.029 393.675 150.029C376.719 150.029 362.97 136.281 362.97 119.323C362.97 102.364 376.719 88.6194 393.676 88.6194C410.635 88.6194 424.385 102.363 424.385 119.323Z"
                fill="currentColor"
              />
            </svg>

            <span className="text-xs font-medium uppercase">23</span>
          </li>

          <li className="flex items-center gap-[.25rem] text-light-secondary hover:text-[#1DA1F2] dark:text-dark-contrast-900">
            <svg
              width={16}
              height={16}
              viewBox="0 0 502 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M298.662 216.797L485.167 0H440.971L279.029 188.242L149.686 0H0.504639L196.096 284.655L0.504639 512H44.7029L215.718 313.21L352.314 512H501.495L298.651 216.797H298.662ZM238.127 287.163L218.309 258.818L60.6281 33.2716H128.514L255.764 215.295L275.582 243.64L440.992 480.241H373.106L238.127 287.174V287.163Z"
                fill="currentColor"
              />
            </svg>

            <span className="text-xs font-medium uppercase">23</span>
          </li>
        </ul>

        <Button pattern="primary">Contact Us</Button>
      </div>
    </div>
  );
};

interface Props {
  item?: NavItemType;
  hasChildren?: boolean;
  active?: boolean;
  setMenu?: (val: NavItemType[] | null) => void;
}

const MenuItem = ({ item, hasChildren, active, setMenu }: Props) => {
  const mobile480 = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <li
      onClick={() => {
        if (hasChildren && setMenu && item?.children) {
          setMenu(item.children);
        }

        if (setMenu && !item?.children?.length) {
          setMenu(null);
        }
      }}
      onMouseEnter={() => {
        if (mobile480) {
          return;
        }
      }}
      className={`group flex cursor-pointer items-center justify-between pb-[.5rem] last:pb-[0]`}
    >
      <span
        className={`text-[2.5rem] font-extrabold capitalize tracking-tight group-hover:text-accent ${
          active ? "text-accent" : "text-light-primary dark:text-dark-primary"
        }`}
      >
        {item?.name}
      </span>

      {hasChildren && (
        <div
          className={`group-hover:text-accent ${
            active ? "text-accent" : "text-light-primary dark:text-dark-primary"
          }`}
        >
          <svg
            width="auto"
            height={17}
            viewBox="0 0 288 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.37332 457.373L210.745 256L9.37332 54.6271C3.43236 48.6135 0.112183 40.4935 0.137843 32.0403C0.163503 23.5871 3.53291 15.4874 9.51028 9.51003C15.4876 3.53267 23.5873 0.163259 32.0406 0.137599C40.4938 0.111939 48.6138 3.43211 54.6273 9.37308L278.627 233.373C284.628 239.374 288 247.513 288 256C288 264.487 284.628 272.626 278.627 278.627L54.6273 502.627C48.6138 508.568 40.4938 511.888 32.0406 511.863C23.5873 511.837 15.4876 508.468 9.51028 502.49C3.53291 496.513 0.163503 488.413 0.137843 479.96C0.112183 471.507 3.43236 463.387 9.37332 457.373Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </li>
  );
};

export default TriggeredNavbar;
