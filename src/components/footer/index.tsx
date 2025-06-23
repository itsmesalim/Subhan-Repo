interface FooterProps {
  footer?: string;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <>
      <div className="mx-48 my-8">
        <div className=" col-span-2 space-y-5 content-center">
            <h1 className="font-Bitter font-normal text-[16px] leading-[24px] text-[#000000] text-start">
            {footer}
          </h1>
        </div>
      </div>
    </>
  );
}
