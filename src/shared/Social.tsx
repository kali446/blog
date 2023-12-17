import Image from "next/image";
import React from "react";

const SOCIAL_SHARE = [
  {
    name: "facebook",
    icon: "/icons/share/facebook.svg",
    size: {
      width: 15,
      height: 15,
    },
  },
  {
    name: "instagram",
    icon: "/icons/share/instagram.svg",
    size: {
      width: 15,
      height: 15,
    },
  },
  {
    name: "twitter",
    icon: "/icons/share/x.svg",
    size: {
      width: 13,
      height: 13,
    },
  },
  {
    name: "whatsapp",
    icon: "/icons/share/whatsapp.svg",
    size: {
      width: 15,
      height: 15,
    },
  },
  {
    name: "discord",
    icon: "/icons/share/discord.svg",
    size: {
      width: 18,
      height: 18,
    },
  },
  {
    name: "reddit",
    icon: "/icons/share/reddit.svg",
    size: {
      width: 17,
      height: 17,
    },
  },
];

const Social = () => {
  return (
    <ul className="flex cursor-pointer items-center gap-4 text-light-secondary dark:text-dark-secondary xs:gap-3">
      {SOCIAL_SHARE.map((item, i) => (
        <li key={i}>
          <Image
            className="invert opacity-60 hover:opacity-100 transition-all"
            height={item.size.height}
            width={item.size.width}
            src={item.icon}
            alt={`Share to ${item.name}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Social;
