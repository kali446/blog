"use client";
import React, { useEffect, useState } from "react";
import Social from "@/shared/Social";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  slug: string;
}

const Share = ({ slug }: Props) => {
  const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${slug}`;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  console.log(url, "fas");

  return (
    <div className="my-[5rem] flex flex-col items-center gap-4 rounded-xl bg-white px-[2rem] py-4 shadow-lg dark:bg-dark-layoutElement xs:px-0">
      <h1 className="text-2xl font-bold lowercase text-light-primary first-letter:capitalize dark:text-dark-primary xs:text-xl">
        Share this Article
      </h1>

      <Social url={url} />

      <div className="flex w-full flex-col items-center">
        <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
          <div className="group relative mx-auto w-[90%] overflow-hidden rounded-md border bg-light-contrast-200/50 py-1 hover:border-green-500/50 dark:bg-dark-site">
            <input
              className="w-[100%] bg-white/0 px-2 text-sm text-light-primary dark:text-dark-contrast-900 xs:text-xs"
              type="text"
              value={url}
            />

            <div className="group absolute right-[0] top-[0] flex h-[100%] w-[2.75rem] cursor-pointer items-center justify-center bg-light-contrast-200 dark:bg-dark-site">
              <div className="text-light-secondary group-hover:text-green-600 dark:text-dark-contrast-900 dark:group-hover:text-white">
                {!copied ? (
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 225 225"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_5_10"
                      style={{
                        maskType: "luminance",
                      }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="225"
                      height="225"
                    >
                      <path d="M0 0H225V225H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_5_10)">
                      <path
                        d="M140.625 9.375H37.5C27.1875 9.375 18.75 17.8125 18.75 28.125V150C18.75 155.156 22.9687 159.375 28.125 159.375C33.2813 159.375 37.5 155.156 37.5 150V37.5C37.5 32.3437 41.7187 28.125 46.875 28.125H140.625C145.781 28.125 150 23.9063 150 18.75C150 13.5937 145.781 9.375 140.625 9.375ZM178.125 46.875H75C64.6875 46.875 56.25 55.3125 56.25 65.625V196.875C56.25 207.188 64.6875 215.625 75 215.625H178.125C188.438 215.625 196.875 207.188 196.875 196.875V65.625C196.875 55.3125 188.438 46.875 178.125 46.875ZM168.75 196.875H84.375C79.2187 196.875 75 192.656 75 187.5V75C75 69.8437 79.2187 65.625 84.375 65.625H168.75C173.906 65.625 178.125 69.8437 178.125 75V187.5C178.125 192.656 173.906 196.875 168.75 196.875Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                ) : (
                  <Image
                    height={15}
                    width={15}
                    src={"/icons/tick.svg"}
                    alt="copy article url"
                  />
                )}
              </div>
            </div>
          </div>
        </CopyToClipboard>

        <span
          className={`${
            copied && "!text-green-600"
          } py-1 text-xs font-medium text-light-secondary dark:text-dark-secondary`}
        >
          {copied ? "Link copied" : "Shareable URL"}
        </span>
      </div>
    </div>
  );
};

export default Share;
