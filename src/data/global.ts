export interface SoicalHandleItemType {
  icon: string;
  name: string;
  size?: {
    width: number;
    height: number;
  };
}

export const SOCIAL_SHARE = [
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

export interface pageItemType {
  name: string;
  href: string;
}

export const SIDEBAR_PAGES: pageItemType[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "contact us",
    href: "/contact-us",
  },
  {
    name: "privacy policy",
    href: "/privacy-policy",
  },
  {
    name: "disclaimer",
    href: "/disclaimer",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
  {
    name: "advertise",
    href: "#!",
  },
];

export const FOOTER_PAGES_1: pageItemType[] = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "terms",
    href: "/terms",
  },
  {
    name: "disclaimer",
    href: "/disclaimer",
  },
  {
    name: "contact us",
    href: "/contact-us",
  },
  {
    name: "about us",
    href: "/about-us",
  },
];

export const FOOTER_PAGES_2: pageItemType[] = [
  {
    name: "Home",
    href: "/privacy-policy",
  },
  {
    name: "categories",
    href: "/terms",
  },
  {
    name: "authors",
    href: "/disclaimer",
  },
  {
    name: "popular",
    href: "/contact-us",
  },
  {
    name: "latest",
    href: "/about-us",
  },
];
