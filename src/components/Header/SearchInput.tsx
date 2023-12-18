import React, { useRef, useEffect, useContext, useCallback } from "react";
import { GlobalContext } from "@/context/global";

interface Props {
  close?: () => void;
}

const SearchInput = ({ close }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { searchText, setSearchText } = useContext(GlobalContext);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className="z-[100] absolute left-[0px] top-[0px] h-[100%] md:fixed md:h-header md:border-b md:border-black/10">
      <input
        ref={ref}
        type="text"
        placeholder="Enter keyword"
        className="h-[100%] w-[50vw] text-xl font-light text-black outline-none placeholder:text-light-secondary dark:bg-dark-layoutElement dark:text-white dark:placeholder:text-white/50 lg:w-[60vw] md:w-[100vw] md:px-6 sm:px-4"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div
        onClick={() => {
          close?.();
        }}
        className={
          "absolute right-6 top-[50%] hidden h-[2.5rem] w-[2.5rem] translate-y-[-50%] cursor-pointer items-center justify-center rounded-[.4rem] bg-light-contrast-200 text-light-primary shadow-sm transition-all hover:bg-light-contrast-300 dark:bg-dark-contrast-100 dark:text-dark-contrast-900 md:flex sm:right-4"
        }
      >
        <svg
          width={17}
          height="auto"
          viewBox="0 0 449 449"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.72007 444.28C6.20604 445.768 7.97065 446.948 9.91302 447.753C11.8554 448.558 13.9374 448.973 16.0401 448.973C18.1427 448.973 20.2247 448.558 22.1671 447.753C24.1095 446.948 25.8741 445.768 27.3601 444.28L224 247.64L420.72 444.28C423.722 447.282 427.794 448.969 432.04 448.969C436.286 448.969 440.358 447.282 443.36 444.28C446.362 441.278 448.049 437.206 448.049 432.96C448.049 428.714 446.362 424.642 443.36 421.64L246.64 225L443.28 28.2801C446.282 25.2778 447.969 21.2059 447.969 16.9601C447.969 12.7142 446.282 8.64232 443.28 5.64007C440.278 2.63782 436.206 0.951172 431.96 0.951172C427.714 0.951172 423.642 2.63782 420.64 5.64007L224 202.36L27.2801 5.72007C24.2192 3.09885 20.282 1.72915 16.2552 1.88469C12.2284 2.04023 8.40856 3.70954 5.55905 6.55906C2.70954 9.40857 1.04022 13.2284 0.884686 17.2552C0.729147 21.282 2.09884 25.2192 4.72007 28.2801L201.36 225L4.72007 421.72C1.74005 424.718 0.0673828 428.773 0.0673828 433C0.0673828 437.227 1.74005 441.282 4.72007 444.28Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
