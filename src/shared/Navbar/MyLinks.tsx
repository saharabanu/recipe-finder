import { Link } from "../../types/globaltypes";

export const links: Link[]  = [
  {
    name: "Pages",
    submenu: true,
    sublinks: [
      {
        Head: "Top Pages",
        sublink: [
          { name: "About Us", link: "/about" },
          { name: "Contact Us", link: "/contact" },
          { name: "NotFound", link: "*" },
        ],
      },
    ],
  },
  {
    name: "RECIPES",
    submenu: true,
    sublinks: [
      {
        Head: "Recipes",
        sublink: [
          { name: "Recipe Single", link: "/" },
          { name: "All Recipes", link: "/" },
        ],
      },
    ],
  },
  {
    name: "BLOG",
  },
  {
    name: "SHOP",
  },
  {
    name: "LANDING",
  },
];
