import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface PostCardProps {
  src?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  footer?: string | ReactNode;
  cardClassName?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  footerClassName?: string;
}
export default function PostsCard({
  src,
  title,
  description,
  footer,
  cardClassName,
  descriptionClassName,
  titleClassName,
  footerClassName,
}: PostCardProps) {
  return (
    <Card
      className={
        cardClassName ? cardClassName : "w-[355px] border-none shadow-none"
      }
    >
      <CardHeader className="p-0">
        <img src={src} alt="image not found" />
        <CardTitle
          className={
            titleClassName
              ? titleClassName
              : "p-6 font-Bitter font-bold text-[20px] leading-[26px] text-[#45818e] text-center justify-center]"
          }
        >
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <CardDescription
          className={
            descriptionClassName
              ? descriptionClassName
              : "px-3 font-Bitter font-normal text-[16.5px] leading-[26px] text-[#2F2F2F] text-center justify-center"
          }
        >
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter
        className={
          footerClassName
            ? footerClassName
            : "p-6 font-Bitter font-normal text-[16.5px] leading-[26px] text-[#2F2F2F] text-center justify-center"
        }
      >
        {footer}
      </CardFooter>
    </Card>
  );
}
