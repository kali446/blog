import Social from "@/shared/Social";
import React from "react";

const Share = () => {
  return (
    <div className="xs:px-0 my-[5rem] flex flex-col items-center gap-4 rounded-xl bg-white px-[2rem] py-4 shadow-lg dark:bg-dark-layoutElement">
      <h1 className="xs:text-xl text-2xl font-bold lowercase text-light-primary first-letter:capitalize dark:text-dark-primary">
        Share this Article
      </h1>

      <Social />

      <div className="flex w-full flex-col items-center">
        <div className="relative mx-auto w-[90%] overflow-hidden rounded-md bg-light-contrast-200/50 py-1 dark:bg-dark-site">
          <input
            className="xs:text-xs w-[100%] bg-white/0 px-2 text-sm text-light-primary dark:text-dark-contrast-900"
            type="text"
            value="https://caards.codesupply.co/firmware/2023/02/23/the-coolest-gadgets-from-ces-2023/"
          />

          <div className="group absolute right-[0] top-[0] flex h-[100%] w-[2.75rem] cursor-pointer items-center justify-center bg-light-contrast-200 dark:bg-dark-site">
            <div className="text-light-secondary group-hover:text-light-primary dark:text-dark-contrast-900 dark:group-hover:text-white">
              <svg
                width={15}
                height="auto"
                viewBox="0 0 512 376"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M509.91 56.2288L192.455 373.683C191.791 374.348 191.003 374.875 190.135 375.235C189.268 375.594 188.338 375.779 187.398 375.779C186.459 375.779 185.529 375.594 184.661 375.235C183.794 374.875 183.005 374.348 182.342 373.683L2.09071 193.426C0.750632 192.086 -0.00219727 190.268 -0.00219727 188.372C-0.00219727 186.477 0.750632 184.659 2.09071 183.319L45.8893 139.52C47.2307 138.18 49.0495 137.427 50.946 137.427C52.8424 137.427 54.6612 138.18 56.0026 139.52L187.405 270.916L456.004 2.31686C457.346 0.976376 459.164 0.223389 461.061 0.223389C462.957 0.223389 464.776 0.976376 466.117 2.31686L509.91 46.1154C510.574 46.7792 511.101 47.5675 511.461 48.4351C511.821 49.3028 512.006 50.2328 512.006 51.1721C512.006 52.1114 511.821 53.0414 511.461 53.9091C511.101 54.7767 510.574 55.565 509.91 56.2288Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        <span className="py-1 text-xs font-medium text-light-secondary dark:text-dark-secondary">
          Shareable URL
        </span>
      </div>
    </div>
  );
};

export default Share;
