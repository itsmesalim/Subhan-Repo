import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";

export default function Tutorials() {
  return (
    <>
      <Header />
      <Title heading="Tutorials" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify my-3">
            Coming soon.....
          </p>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
