import AccordionCard from "@/components/accordian";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Header />
      <Title heading="Contact Information " />

      <div className="gap-9 mx-24 my-8">
        <AccordionCard
          imageSrc="/assets/images/Subhan.jpg"
          title="Love to hear from you!"
          description={
            <>
              <p className="font-Bitter font-normal text-[17px] leading-[18px] text-[#5A5A5A] text-justify">
                Please send me your message whenever you want. I am just an
                email away from you.
              </p>
              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                Email:&nbsp;
                <Link
                  to="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  subhan.ullah@nu.eud.pk
                </Link>
              </span>
              <br />

              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                Cell Phone: 00923439733083
              </span>
              <br />

              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                LinkedIn:&nbsp;
                <Link
                  to="https://www.linkedin.com/in/subhan-ullah"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  linkedin.com/in/subhan-ullah
                </Link>
              </span>
              <br />

              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                <Link
                  to="https://orcid.org/0000-0002-3925-621X"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  https://orcid.org/0000-0002-3925-621X
                </Link>
              </span>
              <br />
            </>
          }
          imageClassName="w-[365px] h-[290px]"
          titleClassName="font-Bitter font-bold text-[22px] leading-[24px] text-[#45818e] py-8"
          cardClassName="w-auto border-none shadow-none"
          innerClassName="flex items-start justify-start gap-80 w-full px-1 py-1"
          descriptionClassName="font-Bitter font-normal text-[17px] text-[#5A5A5A] leading-[32px]"
        />
        <Separator className="h-0.5 my-7" />

        <div className="w-full min-h-screen bg-gray-50 p-1 border border-red-500">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 border border-blue-500">
            {/* LEFT SIDE — CONTACT FORM */}
            <div className="bg-white shadow-lg p-1 border border-green-500">
              <div className="bg-white shadow-md p-1 mb-5 border border-purple-800">
                <h3 className="text-xl font-semibold mb-4">Office Address</h3>
                <p className="font-Bitter font-normal text-[15px] leading-[18px] text-[#5A5A5A] text-justify">
                  Office 204B, Second floor, Department of Computer Science,
                  <br />
                  FAST National University of Computer & Emerging Sciences,
                  <br />
                  Islamabad Campus, 3 A. K. Brohi Road, Sector H-11/4,
                  Islamabad, Pakistan.
                  <br />
                  Office: +92 (051) 111 128 128 Ext. 644
                </p>
              </div>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_Bovw202LRHFQBH0vrAbA9G9bgzgh6UDUI-_yrPLr4ofq8Q/viewform?embedded=true"
                className="w-full h-[600px] rounded-md border border-pink-800"
              ></iframe>
            </div>

            {/* RIGHT SIDE — LOCATION + CALENDAR */}
            <div className="flex flex-col gap-8 border border-yellow-800">
              {/* LOCATION MAP */}
              <div className="bg-white shadow-md p-1 justify-items-center border">
                <h3 className="text-xl font-semibold">My Location</h3>
                <p className="font-Bitter font-normal text-[15px] leading-[18px] text-[#5A5A5A] p-5 text-justify">
                  Find my location here...
                </p>

                {/* google map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d5249.702396200143!2d73.016452!3d33.655509!3m2!1i1024!2i768!4f13.1!2m1!1sG54-A%2C%20FAST-NU%D8%8C%2C%20A.K.%20Brohi%20Road%2C%20H-11%2F4%20H%2011%2F4%20H-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e1!3m2!1sen!2sus!4v1763921518050!5m2!1sen!2sus"
                  className="w-full h-96"
                  loading="lazy"
                ></iframe>
              </div>

              {/* GOOGLE CALENDAR */}
              <div className="bg-white shadow-md p-1 rounded-xl border">
                <h3 className="text-xl font-semibold p-5">My Calendar</h3>

                <iframe
                  src="https://calendar.google.com/calendar/embed?src=subhan.ullah%40nu.edu.pk&ctz=Asia%2FKarachi"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
