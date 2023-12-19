"use client";
import React, { useState, useContext, useEffect } from "react";
import Header from ".";
import Button from "@/shared/Button/Button";
import { NavItemType, fetchNavigationMenu } from "@/data/navigation";
import { GlobalContext } from "@/context/global";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

const TriggeredNavbar = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<NavItemType[] | null>(null);
  const { openNavMenu, setOpenNavMenu } = useContext(GlobalContext);
  const [menu, setMenu] = useState<NavItemType[] | null>(null);

  useEffect(() => {
    // 🆗 Ship it
    (async () => {
      if (!menu) {
        const menu = await fetchNavigationMenu();
        setMenu(menu);
      }
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  const mobile480 = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div
      className={`fixed left-[0] top-[0] z-[1005] flex h-[100vh] w-full flex-col justify-between overflow-y-auto overflow-x-hidden bg-white transition-all duration-500 dark:bg-dark-site ${
        openNavMenu ? "visible" : "hidden"
      }`}
    >
      <div className="absolute right-[-5rem] top-[50%] h-[22.5rem] w-[22.5rem] translate-y-[-50%] rounded-full bg-black bg-gradient-to-t from-[rgb(255,206,236)] to-[rgb(152,150,240)] blur-3xl dark:hidden lg:h-[15rem] lg:w-[15rem]"></div>

      <Header />
      <div className="mb-5 mt-header grid grid-cols-12 gap-7 px-5 pt-5 sm:gap-0 sm:gap-y-4">
        {mobile480 ? (
          !selectedMenu?.length && (
            <div className="col-span-3 sm:col-span-12">
              <ul>
                {menu?.map((item, i) => (
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
          )
        ) : (
          <div className="col-span-3 sm:col-span-12">
            <ul>
              {menu?.map((item, i) => (
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
        )}

        <div className="col-span-9 grid grid-cols-12 sm:col-span-12">
          <div className="col-span-3 sm:col-span-6 xs:col-span-12">
            <ul className="flex flex-col gap-1">
              {selectedMenu?.length && mobile480 && (
                <>
                  <div
                    onClick={() => setSelectedMenu(null)}
                    className="mb-[1rem] inline-flex cursor-pointer items-center justify-start gap-1 py-2 text-sm font-semibold uppercase text-blue-600 underline"
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
                </>
              )}

              {selectedMenu?.map((item, i) => (
                <li
                  onClick={() => {
                    router.push(item?.href || "/");
                    setOpenNavMenu(false);
                  }}
                  className={`flex cursor-pointer gap-2 rounded-md p-2 text-sm font-semibold capitalize transition-all duration-300 hover:bg-light-contrast-200 dark:hover:bg-dark-contrast-300 ${
                    i === 0
                      ? "bg-light-contrast-200 dark:bg-dark-contrast-300"
                      : ""
                  }`}
                  key={i}
                >
                  {item?.name}
                  {item?.isHighlighted && (
                    <span className="flex items-center justify-center rounded-[3px] bg-accent px-[.3rem] text-[.55rem] uppercase tracking-wide text-white dark:text-dark-primary">
                      {item.isHighlighted && "new"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="col-span-3"></div> */}
          {/* <div className="col-span-6"></div> */}
        </div>
      </div>

      <div className="max-w-[480px] px-5 pb-5">
        <span className="cursor-pointer text-[1.35rem] font-semibold text-light-primary transition-colors hover:text-accent dark:text-dark-primary">
          manjiljunior@gmail.com
        </span>
        <p className="mb-4 mt-2 text-sm font-medium leading-[1.6] text-light-secondary dark:text-dark-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          similique totam vel molestias provident, culpa modi veniam nemo
          distinctio, odit molestiae. Aperiam sed molestiae aspernatur tempora
          tempore. Id, architecto cum!
        </p>

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
  const { setOpenNavMenu } = useContext(GlobalContext);
  const router = useRouter();
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
          router.push(item?.href || "/");
          setOpenNavMenu(false);
        }
      }}
      onMouseEnter={() => {
        if (mobile480) {
          return;
        }

        if (hasChildren && setMenu && item?.children) {
          setMenu(item.children);
        }

        if (setMenu && !item?.children?.length) {
          setMenu(null);
        }
      }}
      className={`group flex cursor-pointer items-center justify-between pb-[.5rem] last:pb-[0]`}
    >
      <span
        className={`text-[2.5rem] font-extrabold capitalize tracking-[-1px] group-hover:text-accent ${
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
