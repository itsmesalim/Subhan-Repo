import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Separator } from "@/components/ui/separator";
// import { Link } from "react-router-dom";

export default function Group() {
  return (
    <>
      <Header />
      <Title heading="Group" />

      <div className="grid gap-12 mx-24 my-32">
        <div className="grid grid-cols-[auto_1fr] gap-[40px]">
          <img
            src="/assets/images/Sohail.jpeg"
            alt="subhan_nu"
            className=" w-64 h-72"
          />

          <div>
            <Separator className="h-1" />
            <h2 className="py-5 font-Bitter font-bold mt-0 text-[48px] leading-[25px] text-[#45818e]">
              Muhammad Sohail
            </h2>
            <Separator className="h-1" />
            <p className="pt-6 font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
              Muhammad Sohail (Ph.D Student) is working on Intrusion Detection
              in the Internet of Things (IoT) Using Machine Learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-[40px]">
          <img
            src="/assets/images/boy.png"
            alt="subhan_nu"
            className=" w-64 h-72"
          />

          <div>
            <Separator className="h-1" />
            <h2 className="py-5 font-Bitter font-bold mt-0 text-[48px] leading-[25px] text-[#45818e]">
              Saqlain Ahmad Bhatti
            </h2>
            <Separator className="h-1" />
            <p className="pt-6 font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
              Saqlain Ahmad Bhatti (MS student) is working on Detection of
              Adversarial Attack in IOT enabled UAV'S.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-[40px]">
          <img
            src="/assets/images/girl.png"
            alt="subhan_nu"
            className=" w-64 h-72"
          />

          <div>
            <Separator className="h-1" />
            <h2 className="py-5 font-Bitter font-bold mt-0 text-[48px] leading-[25px] text-[#45818e]">
              Saman Hanif
            </h2>
            <Separator className="h-1" />
            <p className="pt-6 font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
              Saman Hanif (MS Student) is working on security of Smart Door
              Facial Recognition from backdoor attacks in IOT Applications.
            </p>
          </div>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
