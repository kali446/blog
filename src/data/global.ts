export interface SoicalHandleItemType {
  icon: string;
  name: string;
}

export const SOCIAL_HANDLES: SoicalHandleItemType[] = [
  {
    icon: "/icons/facebook-b.svg",
    name: "facebook",
  },

  {
    icon: "/icons/x-b.svg",
    name: "x",
  },

  {
    icon: "/icons/instagram-b.svg",
    name: "instagram",
  },

  {
    icon: "/icons/pinterest-b.svg",
    name: "pinterest",
  },

  {
    icon: "/icons/youtube-b.svg",
    name: "youtube",
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
    name: "advertise",
    href: "#!",
  },
];
