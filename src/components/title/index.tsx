import { Separator } from "../ui/separator";

interface TitleProps {
  heading: string;
  title?: string;
}

export default function Title({ heading, title }: TitleProps) {
  return (
    <>
      <div className="grid grid-cols-3 pl-4 md:px-8 lg:pl-24 lg:pr-0">
        <div className="content-center col-span-3 py-4 space-y-5 lg:col-span-2">
          <h1 className="font-Bitter font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#45818e]">
            {heading}
          </h1>
          <h2 className="font-Bitter whitespace-pre-line text-[#45818e] font-normal text-[26px] leading-[29px]">
            {title}
          </h2>
        </div>

        <img
          src="/assets/images/subhan.png"
          alt="subhan"
          className="hidden justify-self-end rounded-full size-[345px] lg:inline-flex "
        />
      </div>

      <div className="px-4 md:px-8 lg:px-24">
        <Separator className="h-0.5" />
      </div>
    </>
  );
}
