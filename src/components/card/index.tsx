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
}
export default function PostsCard({
  src,
  title,
  description,
  footer,
}: PostCardProps) {
  return (
    <Card className="w-[355px] border-none shadow-none">
      <CardHeader className="p-0">
        <img src={src} alt="image not found" />
        <CardTitle className="p-6 font-Bitter font-bold text-[20px] leading-[26px] text-[#45818e] text-center justify-center]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <CardDescription className="px-3 font-Bitter font-normal text-[16.5px] leading-[26px] text-[#000000] text-center justify-center">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="p-6 font-Bitter font-normal text-[16.5px] leading-[26px] text-[#000000] text-center justify-center">
        {footer}
      </CardFooter>
    </Card>
  );
}
