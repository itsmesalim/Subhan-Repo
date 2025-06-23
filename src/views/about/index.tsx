import PostsCard from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header />
      <Title heading="About me" title="This is my about page." />

      <div className="gap-9 mx-48 my-8">
        <div className="grid grid-flow-col grid-rows-1 gap-[120px] ">
          <PostsCard
            src="/assets/images/subhan nu.jpg"
            title={
              <>
                <span className="font-Bitter font-normal text-[16px] text-[#000000] text-start">
                  Email:&nbsp;
                </span>
                <Link
                  to="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[16px] text-[#000000] text-start"
                >
                  subhan.ullah@nu.eud.pk
                </Link>
              </>
            }
            description={
              <>
                <p className="font-Bitter font-normal text-[16px] text-[#000000] text-center  ">
                  Cell phone: 00923439733083
                </p>
                <p className="font-Bitter font-normal text-[16px] text-[#000000] text-center ">
                  Love to hear from you...
                </p>
              </>
            }
            footer={
              <button className=" font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 w-full rounded">
                <Link to="/contact" target="blank">
                  Read more
                </Link>
              </button>
            }
          />
          <div className="grid grid-rows-1 gap-4 my-3 ">
            <Separator className="h-1" />
            <h2 className="py-8 font-Bitter font-bold mt-2 text-[20px] leading-[25px] text-[#45818e] ">
              Hi Everyone! you may know more about Dr. Subhan Ullah here...
            </h2>
            <Separator className="h-1" />
            <p className="pt-3 font-Bitter font-normal text-[17px] leading-[20px] text-[#000000] text-justify">
              This website has been started to share the story of educational,
              professional and technical journey of Subhan Ullah. He believes
              that sharing is caring and life-giving. There is still a long way
              to go, where this website will record his educational,
              professional and technical progress. Here, you will find some of
              his thoughts, research, teaching and some useful materials. Hope,
              you will spend a nice time here, so go grab yourself a cup of
              coffee and feel free to look around!
            </p>

            <p className="pt-1 font-Bitter font-normal text-[17px] leading-[22px] text-[#000000] text-justify">
              Subhan Ullah is an Assistant Professor and a proactive researcher
              at the Department of Computer Networks and Cybersecurity, FAST
              School of Computing, National University of Computer and Emerging
              Sciences, Islamabad.
            </p>
            <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 w-full rounded ">
              <Link to="/biography" target="blank">
                Read more
              </Link>
            </button>

            <p className="font-Bitter font-normal text-[17px] leading-[22px] text-[#000000] text-justify">
              He has received his early education from GHSS Samar bagh,
              Intermediate education from GDC Timergara, and Bachelor Degree in
              Computer Science (BSCS) from Malakand University, District Dir
              lower, KPK. Then he moved to Islamabad and completed his MS
              (Computer Science) from the International Islamic University
              (IIU), Islamabad. He also studied Joint International Master (JIM)
              in Computer Science from Darmstadt, University of Applied
              Sciences, Darmstadt, Germany. Finally, he received his Ph.D.
              Degree from Austria in collaboration with the University of Genoa,
              Italy.
            </p>

            <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 w-full rounded">
              <Link to="/biography" target="blank">
                Read more
              </Link>
            </button>

            <p className="font-Bitter font-normal text-[17px] leading-[22px] text-[#000000] text-justify">
              Dr. Subhan received talent scholarship from Worker Welfare Board
              Pakistan during his BS and MS study. Thanks to Worker Welfare
              Board, and Erasmus Mundus Scholarship programs for supporting all
              his educational expenses from BS degree to Ph.D. degree.
            </p>

            <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 w-full rounded">
              <Link to="/awards" target="blank">
                Read more
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
