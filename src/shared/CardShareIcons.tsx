import Image from "next/image";
import React from "react";

interface Props {
  color?: string;
  darkInvert?: boolean;
}

const ITEMS = [
  {
    name: "facebook",
    icon: "/icons/share/facebook.svg",
  },

  {
    name: "x.com",
    icon: "/icons/share/x.svg",
  },

  {
    name: "whatsapp",
    icon: "/icons/share/whatsapp.svg",
  },
];

const CardShareIcons = ({ color, darkInvert }: Props) => {
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
      {ITEMS.map((item, i) => (
        <li key={i} className="flex items-center">
          <Image
            className={`${
              item.name === "x.com" ? "w-[14px]" : "w-[17px]"
            } h-auto ${color === "black" && "invert"}  ${
              darkInvert && "dark:invert-0"
            }`}
            height={14}
            width={14}
            src={item.icon}
            alt={`Share to ${item.name}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardShareIcons;
