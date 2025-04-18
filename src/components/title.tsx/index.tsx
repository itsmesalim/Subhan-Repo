import { Separator } from "../ui/separator";

interface TitleProps {
  heading: string;
  title?: string;
}

export default function Title({ heading, title }: TitleProps) {
  return (
    <>
      <div className="ml-48 grid grid-cols-3 justify-items-start">
        <div className=" col-span-2 space-y-5 content-center">
          <h1 className="font-Bitter font-bold text-6xl leading-tight text-[#45818e]">
            {heading}
          </h1>
          <p className="font-Bitter whitespace-pre-line text-[#45818e] font-normal text-[26px] leading-[29px]">
            {title}
          </p>
        </div>

        <img
          src="/src/assets/images/subhan.png"
          alt="subhan"
          className="justify-self-end rounded-full size-[345px]"
        />
      </div>

      <div className="mx-48">
        <Separator className="h-0.5" />
      </div>
    </>
  );
}
