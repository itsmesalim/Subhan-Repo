import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "../side-bar/menu-data";

const navlinkClass =
  "text-white text-nowrap px-4 py-2 hover:text-gray-300 inline-block";

export function NavigationMenuDemo() {
  const navigate = useNavigate();

  return (
    <NavigationMenu className="hidden lg:inline-flex">
      {menuData.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <NavigationMenuItem key={item.title} className={navlinkClass}>
              <NavigationMenuTrigger onClick={() => navigate(item.href)}>
                {item.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-full">
                  {item.children.map((child) => (
                    <li key={child.title}>
                      <NavigationMenuLink asChild>
                        <Link className={navlinkClass} to={child.href}>
                          {child.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        }

        return (
          <NavigationMenuItem key={item.title} className={navlinkClass}>
            <NavigationMenuLink asChild>
              <Link className={navlinkClass} to={item.href}>
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenu>
  );
}
