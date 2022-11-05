interface MenuData {
  name: string;
  to: string;
  details?: string[];
}

export const MENU_DATA: Array<MenuData> = [
  { name: "About", to: "/about", details: ["Archive"] },
  {
    name: "Projects",
    to: "/projects",
    details: [
      "Portfolio",
      "Airline ticket site",
      "Product register page",
      "Furniture commerce site",
    ],
  },
  {
    name: "Skills",
    to: "/skills",
    details: [
      "Javascript",
      "Typescript",
      "React",
      "Redux",
      "Nodejs",
      "Sass",
      "Styled-components",
      "Aws",
      "Git",
    ],
  },

  { name: "Contact", to: "/contact" },
];
