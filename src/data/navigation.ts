import { getAllCategories, getClient } from "@/lib/client";
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

export const fetchNavigationMenu = async () => {
  const client = getClient();
  const categories = await getAllCategories(client);

  return [
    {
      id: randomId(),
      name: "Home",
      href: "/",
    },
    {
      id: randomId(),
      name: "Categories",
      children: categories.map((item, i) => {
        return {
          id: randomId(),
          href: `/category/${item.slug}`,
          name: item.name,
          isNew: false,
        };
      }),
    },
    {
      id: randomId(),
      href: "/contact-us",
      name: "Contact us",
    },
    {
      id: randomId(),
      href: "/about-us",
      name: "About Us",
    },
  ] as NavItemType[];
};
