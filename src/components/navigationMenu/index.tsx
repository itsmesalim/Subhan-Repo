import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const navlinkClass =
  "text-white text-nowrap px-4 py-2 hover:text-gray-300 inline-block";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuItem className={navlinkClass}>
        <NavigationMenuLink asChild>
          <Link to="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className={navlinkClass}>
        <NavigationMenuTrigger>
          <Link to="/about">About</Link>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-full">
            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/biography">
                  Biography
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/awards">
                  Awards
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/countries-visited">
                  Countries Visited
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/contact">
                  Contact
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className={navlinkClass}>
        <Link to="/team">
          <NavigationMenuTrigger>Team</NavigationMenuTrigger>
        </Link>
        <NavigationMenuContent>
          <ul className="grid w-full">
            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/group">
                  Group
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/alumni">
                  Alumni
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/research-collaborators">
                  Research Collaborators
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/development-team">
                  Development Team
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className={navlinkClass}>
        <Link to="/research">
          <NavigationMenuTrigger>Research</NavigationMenuTrigger>
        </Link>
        <NavigationMenuContent>
          <ul className="grid w-full">
            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/research-interest">
                  Research Interest
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/publications">
                  Publications
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/collaborations">
                  Collaborations
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/thesis-supervision">
                  Thesis supervision
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className={navlinkClass}>
        <Link to="/teaching">
          <NavigationMenuTrigger>Teaching</NavigationMenuTrigger>
        </Link>
        <NavigationMenuContent>
          <ul className="grid w-full">
            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/current-courses">
                  Current Courses
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/previous-courses">
                  Previous Courses
                </Link>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink asChild>
                <Link className={navlinkClass} to="/tutorials">
                  Tutorials
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className={navlinkClass}>
        <Link to="/news">News</Link>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
