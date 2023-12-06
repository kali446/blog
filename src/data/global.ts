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
