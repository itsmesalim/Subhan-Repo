interface FooterProps {
  footer?: string;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <>
      <div className="px-4 my-8 md:px-8 lg:px-24">
        <div className="content-center col-span-2 space-y-5 ">
          <h1 className="font-Bitter font-normal text-[16px] leading-[24px] text-[#5A5A5A] text-start">
            {footer}
          </h1>
        </div>
      </div>
    </>
  );
}
