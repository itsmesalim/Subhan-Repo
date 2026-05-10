import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import { menuData } from "./menu-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useNavigate } from "react-router-dom";

interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-white bg-transparent border-white lg:hidden hover:bg-white hover:text-black"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-0 text-white border-r w-72 bg-slate-600 border-slate-500"
      >
        <SheetTitle className="sr-only">Mobile menu</SheetTitle>

        <SheetDescription className="sr-only">
          Navigation links for mobile and tablet screens
        </SheetDescription>

        <ScrollArea className="h-full">
          <div className="p-4">
            {children}
            <div className="space-y-2">
              {menuData.map((item) => {
                if (item.children && item.children.length > 0) {
                  return (
                    <Accordion
                      key={item.title}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem
                        value={item.title}
                        className="border-b border-slate-400"
                      >
                        <div className="flex items-center justify-between py-3">
                          <button
                            type="button"
                            onClick={() => navigate(item.href)}
                            className="text-base font-semibold text-left text-white"
                          >
                            {item.title}
                          </button>

                          <AccordionTrigger className="p-0 ml-2 text-white hover:no-underline" />
                        </div>

                        <AccordionContent className="pb-2">
                          <div className="pl-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                to={child.href}
                                className="block py-1 text-white/90 hover:text-white hover:underline"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    to={item.href!}
                    className="block py-3 text-base font-semibold text-white hover:text-white hover:underline"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
