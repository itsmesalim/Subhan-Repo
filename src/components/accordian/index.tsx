import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface AccordionCardProps {
  imageSrc?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  expandContent?: ReactNode;
  cardClassName?: string;
  innerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  open?: boolean;
  onToggle?: () => void;
}

export default function AccordionCard({
  imageSrc,
  title,
  description,
  expandContent,
  cardClassName,
  innerClassName,
  imageClassName,
  titleClassName,
  descriptionClassName,
  open,
  onToggle,
}: AccordionCardProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = open !== undefined ? open : internalOpen;

  const handleToggle = () => {
    if (onToggle) onToggle();
    else setInternalOpen(!internalOpen);
  };

  return (
    <Card className={cardClassName ? cardClassName : "w-[355px]"}>
      <>
        <div className={innerClassName ? innerClassName : "flex items-start justify-start gap-8 w-full px-1 py-1"}>
          <div className="w-auto">
            <div className="flex items-center justify-center relative">
              <img
                src={imageSrc}
                alt="image not found"
                className={
                  imageClassName
                    ? imageClassName
                    : "w-[100px] h-[100px] rounded-md "
                }
              />

              {expandContent && (
                <button
                  className={`flex items-center justify-center transition-transform duration-300 opacity-80 bg-[#2d2d2d] hover:bg-[#4d4d4d] rounded-full size-10 absolute bottom-2 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  onClick={handleToggle}
                >
                  <ChevronDown size={24} className="text-white" />
                </button>
              )}
            </div>

            {expandContent && (
              <div
                className={`transition-all duration-500 overflow-hidden p-2 ${
                  isOpen
                    ? "max-h-[200px] opacity-100 mt-4 p-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                {expandContent}
              </div>
            )}
          </div>

          <div className="flex-1 w-[260px]">
            <CardTitle
              className={
                titleClassName
                  ? titleClassName
                  : "font-Bitter font-bold text-[22px] leading-[24px] text-[#45818e] py-5"
              }
            >
              {title}
            </CardTitle>

            <CardDescription
              className={
                descriptionClassName
                  ? descriptionClassName
                  : "font-Bitter font-normal text-[17px] text-[#5A5A5A]"
              }
            >
              {description}
            </CardDescription>
          </div>
        </div>
      </>
    </Card>
  );
}
