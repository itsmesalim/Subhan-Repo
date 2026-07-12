import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface profileProps {
  src?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  srcClassName?: string;
  descriptionClassName?: string;
}

const Profile = ({ src, title, description, srcClassName, descriptionClassName }: profileProps) => {
  return (
    <div className="flex flex-col w-full gap-4 pb-5 lg:flex-row lg:items-end">
      <img
        src={src ? src : "/assets/images/boy.png"}
        alt="subhan_nu"
        className={srcClassName ? srcClassName : "w-64 h-72 self-center lg:self-auto"}
      />

      <div className={descriptionClassName ? descriptionClassName : ""}>
        
        <h2 className="py-5 font-Bitter font-bold mt-0 text-[48px] leading-[40px] text-[#45818e]">
          {title}
        </h2>
        <Separator className="h-1" />
        <p className="pt-6 font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
          {description}
        </p>
        <Separator className="h-1" />
      </div>
    </div>
  );
}

export default Profile;
