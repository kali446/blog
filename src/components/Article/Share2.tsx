"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
} from "react-share";

interface Props {
  url: string;
  title: string;
  layout?: "horizontal" | "vertical";
}

const Share2 = ({ url, title, layout }: Props) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  const itemClasses = `dark:text-dark-secondary dark:border-dark-contrast-300 group relative flex h-[2.75rem] w-[2.75rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-light-contrast-400 text-light-secondary hover:border-none`;

  const itemIcon1Classes = `relative z-20 transition-all delay-75 duration-200 group-hover:translate-x-[200%]`;
  const itemIcon2Classes = `absolute left-[-50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] text-white transition-all delay-75 duration-200 group-hover:left-[50%]`;

  return (
    <div
      className={`flex ${
        layout && layout === "horizontal"
          ? "items-center gap-2"
          : "flex-col gap-2"
      }`}
    >
      <span className="text-xs uppercase text-light-primary dark:text-dark-secondary">
        share
      </span>

      {/* facebook */}
      <FacebookShareButton url={url} title={title}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <Image
              className="opacity-60 invert dark:opacity-100 dark:invert-0"
              height={18}
              width={18}
              src={"/icons/share/facebook.svg"}
              alt={`Share to Facebook`}
            />
          </div>

          <div className={itemIcon2Classes}>
            <Image
              height={18}
              width={18}
              src={"/icons/share/facebook.svg"}
              alt={`Share to Facebook`}
            />
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-[#4a99e9] transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </FacebookShareButton>

      {/* instagram */}
      <InstapaperShareButton url={url} title={title}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <Image
              className="opacity-60 invert dark:opacity-100 dark:invert-0"
              height={17}
              width={17}
              src={"/icons/share/instagram.svg"}
              alt={`Share to Instagram`}
            />
          </div>

          <div className={itemIcon2Classes}>
            <Image
              height={17}
              width={17}
              src={"/icons/share/instagram.svg"}
              alt={`Share to Instagram`}
            />
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-[#d62976] transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </InstapaperShareButton>

      {/* twitter */}
      <TwitterShareButton url={url} title={title}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <Image
              className="opacity-60 invert dark:opacity-100 dark:invert-0"
              height={15}
              width={15}
              src={"/icons/share/x.svg"}
              alt={`Share to Twitter`}
            />
          </div>

          <div className={itemIcon2Classes}>
            <Image
              height={15}
              width={15}
              src={"/icons/share/x.svg"}
              alt={`Share to Twitter`}
            />
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-black transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <Image
              className="opacity-60 invert dark:opacity-100 dark:invert-0"
              height={16}
              width={16}
              src={"/icons/share/whatsapp.svg"}
              alt={`Share to Whatsapp`}
            />
          </div>

          <div className={itemIcon2Classes}>
            <Image
              height={16}
              width={16}
              src={"/icons/share/whatsapp.svg"}
              alt={`Share to Whatsapp`}
            />
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-[#25d366] transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </WhatsappShareButton>

      {/* link */}
      <CopyToClipboard
        text={url}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <div className="relative">
          <div
            className={`absolute left-[50%] top-[50%] w-[7.5rem] translate-x-[-50%] translate-y-[-50%] scale-0 rounded-md bg-green-600 py-1 text-center text-sm font-semibold text-white opacity-0 drop-shadow-sm transition-all duration-200 ${
              copied && "left-[115%] translate-x-0 scale-100 opacity-100"
            }`}
          >
            Link copied!
          </div>

          <div className={itemClasses}>
            <div className={itemIcon1Classes}>
              <Image
                className="opacity-60 invert dark:opacity-100 dark:invert-0"
                height={17}
                width={17}
                src={"/icons/share/link.svg"}
                alt={`Copy article link`}
              />
            </div>

            <div className={itemIcon2Classes}>
              <Image
                height={17}
                width={17}
                src={"/icons/share/link.svg"}
                alt={`Copy article link`}
              />
            </div>

            <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-accent transition-all duration-300 group-hover:scale-100"></div>
          </div>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Share2;
