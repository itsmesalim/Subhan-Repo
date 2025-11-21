import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface profileProps {
  src?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
}

export default function Profile({ src, title, description }: profileProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-[40px]">
      <img
        src={src ? src : "/assets/images/boy.png"}
        alt="subhan_nu"
        className=" w-64 h-72"
      />

      <div>
        <Separator className="h-1" />
        <h2 className="py-5 font-Bitter font-bold mt-0 text-[48px] leading-[25px] text-[#45818e]">
          {title}
        </h2>
        <Separator className="h-1" />
        <p className="pt-6 font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
