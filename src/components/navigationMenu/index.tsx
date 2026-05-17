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
    <NavigationMenu className="hidden lg:flex ">
      {menuData.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <NavigationMenuItem
              key={item.title}
              className="relative inline-block px-4 py-2 text-white list-none text-nowrap hover:text-gray-300"
            >
              <NavigationMenuTrigger onClick={() => navigate(item.href)}>
                {item.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-full gap-1 ">
                  {item.children.map((child) => (
                    <li key={child.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block px-3 py-2 text-white rounded-md hover:bg-white/10 hover:text-white "
                          to={child.href}
                        >
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
          <NavigationMenuItem
            key={item.title}
            className="inline-block px-4 py-2 text-white list-none text-nowrap hover:text-gray-300"
          >
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
