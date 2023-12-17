import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_SHARE } from "@/data/global";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  LinkedinShareButton,
} from "react-share";

interface Props {
  url: string;
}

const Social = ({ url }: Props) => {
  return (
    <ul className="flex cursor-pointer items-center gap-4 text-light-secondary dark:text-dark-secondary xs:gap-3">
      {SOCIAL_SHARE.map((item, i) => {
        if (item.name === "facebook") {
          return (
            <FacebookShareButton key={i} url={url}>
              <li>
                <Link href={url} target="_blank">
                  <Image
                    className="opacity-60 invert transition-all hover:opacity-100"
                    height={item.size.height}
                    width={item.size.width}
                    src={item.icon}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            </FacebookShareButton>
          );
        }

        if (item.name === "instagram") {
          return (
            <InstapaperShareButton key={i} url={url}>
              <li>
                <Link href={url} target="_blank">
                  <Image
                    className="opacity-60 invert transition-all hover:opacity-100"
                    height={item.size.height}
                    width={item.size.width}
                    src={item.icon}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            </InstapaperShareButton>
          );
        }

        if (item.name === "twitter") {
          return (
            <TwitterShareButton key={i} url={url}>
              <li>
                <Link href={url} target="_blank">
                  <Image
                    className="opacity-60 invert transition-all hover:opacity-100"
                    height={item.size.height}
                    width={item.size.width}
                    src={item.icon}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            </TwitterShareButton>
          );
        }

        if (item.name === "whatsapp") {
          return (
            <WhatsappShareButton key={i} url={url}>
              <li>
                <Link href={url} target="_blank">
                  <Image
                    className="opacity-60 invert transition-all hover:opacity-100"
                    height={item.size.height}
                    width={item.size.width}
                    src={item.icon}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            </WhatsappShareButton>
          );
        }

        if (item.name === "reddit") {
          return (
            <RedditShareButton key={i} url={url}>
              <li>
                <Link href={url} target="_blank">
                  <Image
                    className="opacity-60 invert transition-all hover:opacity-100"
                    height={item.size.height}
                    width={item.size.width}
                    src={item.icon}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            </RedditShareButton>
          );
        }

        if (item.name === "linkedin") {
          return (
            <LinkedinShareButton key={i} url={url}>
              <li>
                <Link href={url} target="_blank">
                  <Image
                    className="opacity-60 invert transition-all hover:opacity-100"
                    height={item.size.height}
                    width={item.size.width}
                    src={item.icon}
                    alt={`Share to ${item.name}`}
                  />
                </Link>
              </li>
            </LinkedinShareButton>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default Social;
