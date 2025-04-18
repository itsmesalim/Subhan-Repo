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
  src: string;
  title: string;
  description: string;
  footer: string | ReactNode;
}
export default function PostsCard({
  src,
  title,
  description,
  footer,
}: PostCardProps) {
  return (
    <>
      <Card className="w-[350px] ">
        <CardHeader>
          <img src={src} alt="image not found" />
          <CardTitle className="font-Bitter font-bold text-[18px] leading-6 text-center text-[#45818e] ">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between">{footer}</CardFooter>
      </Card>
    </>
  );
}
