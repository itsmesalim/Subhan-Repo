export type MenuChild = {
  title: string;
  href: string;
};

export type MenuItem = {
  title: string;
  href: string;
  children?: MenuChild[];
};

export const menuData: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Biography", href: "/biography" },
      { title: "Awards", href: "/awards" },
      { title: "Countries Visited", href: "/countries-visited" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Team",
    href: "/team",
    children: [
      { title: "Group", href: "/group" },
      { title: "Alumni", href: "/alumni" },
      { title: "Research Collaborators", href: "/research-collaborators" },
      { title: "Development Team", href: "/development-team" },
    ],
  },
  {
    title: "Research",
    href: "/research",
    children: [
      { title: "Research Interest", href: "/research-interest" },
      { title: "Publications", href: "/publications" },
      { title: "Collaborations", href: "/collaborations" },
      { title: "Thesis Supervision", href: "/thesis-supervision" },
    ],
  },
  {
    title: "Teaching",
    href: "/teaching",
    children: [
      { title: "Current Courses", href: "/current-courses" },
      { title: "Previous Courses", href: "/previous-courses" },
      { title: "Tutorials", href: "/tutorials" },
    ],
  },
  {
    title: "News",
    href: "/news",
  },
];
