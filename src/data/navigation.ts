import _ from "lodash";

const randomId = _.uniqueId;

export interface NavItemType {
  id: string;
  name: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  href?: string;
  isNew?: boolean;
}

export const MEGAMENU: NavItemType[] = [
  {
    id: randomId(),
    name: "Demos",
    children: [
      { id: randomId(), href: "/", name: "Demo 1" },
      { id: randomId(), href: "/home-2", name: "Demo 2", isNew: true },
      { id: randomId(), href: "/home-3", name: "Demo 3" },
      { id: randomId(), href: "/home-4", name: "Demo 4" },
    ],
  },
  {
    id: randomId(),
    name: "Categories",
    children: [
      { id: randomId(), href: "/", name: "News" },
      { id: randomId(), href: "/home-2", name: "Technology", isNew: true },
      { id: randomId(), href: "/home-3", name: "Robotics" },
      { id: randomId(), href: "/home-4", name: "Computer" },
    ],
  },
  {
    id: randomId(),
    href: "/archive/demo-slug",
    name: "Courses",
  },
  {
    id: randomId(),
    href: "/archive/demo-slug",
    name: "Contacts",
  },
];
