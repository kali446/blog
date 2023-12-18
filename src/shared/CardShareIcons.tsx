"use client";
import Image from "next/image";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface Props {
  article: {
    url: string;
    title: string;
  };
  color?: string;
  darkInvert?: boolean;
}

const ITEMS = [
  {
    name: "facebook",
    icon: "/icons/share/facebook.svg",
  },

  {
    name: "twitter",
    icon: "/icons/share/x.svg",
  },

  {
    name: "whatsapp",
    icon: "/icons/share/whatsapp.svg",
  },
];

const CardShareIcons = ({ color, darkInvert, article }: Props) => {
  const renderColor = () => {
    switch (color) {
      case "white":
        return `text-white`;
      case "black":
        return `text-black`;
      default:
        return "text-light-primary";
    }
  };

  return (
    <ul className={`flex items-center gap-3 font-light ${renderColor()}`}>
      {ITEMS.map((item, i) => {
        if (item.name === "facebook") {
          return (
            <FacebookShareButton
              url={article.url}
              title={article.title}
              key={i}
            >
              <li className="flex items-center">
                <Image
                  className={`h-auto w-[17px] ${
                    color === "black" && "invert"
                  }  ${darkInvert && "dark:invert-0"}`}
                  height={14}
                  width={14}
                  src={item.icon}
                  alt={`Share to ${item.name}`}
                />
              </li>
            </FacebookShareButton>
          );
        }

        if (item.name === "twitter") {
          return (
            <TwitterShareButton url={article.url} title={article.title} key={i}>
              <li className="flex items-center">
                <Image
                  className={`h-auto w-[14px] ${
                    color === "black" && "invert"
                  }  ${darkInvert && "dark:invert-0"}`}
                  height={14}
                  width={14}
                  src={item.icon}
                  alt={`Share to ${item.name}`}
                />
              </li>
            </TwitterShareButton>
          );
        }

        if (item.name === "whatsapp") {
          return (
            <WhatsappShareButton
              url={article.url}
              title={article.title}
              key={i}
            >
              <li className="flex items-center">
                <Image
                  className={`h-auto w-[17px] ${
                    color === "black" && "invert"
                  }  ${darkInvert && "dark:invert-0"}`}
                  height={14}
                  width={14}
                  src={item.icon}
                  alt={`Share to ${item.name}`}
                />
              </li>
            </WhatsappShareButton>
          );
        }
      })}
    </ul>
  );
};

export default CardShareIcons;
