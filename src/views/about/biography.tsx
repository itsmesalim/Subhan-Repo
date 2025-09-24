import PostsCard from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Link } from "react-router-dom";

export default function Biography() {
  return (
    <>
      <Header />
      <Title heading="Biography" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-flow-col grid-rows gap-[40px] ">
          <div className=" my-3">
            <h2 className="font-Bitter font-bold text-[26px] leading-[25px] text-[#45818e] pb-5">
              Assistant Professor and researcher!
            </h2>

            <p className="font-Bitter font-normal text-[17px] leading-normal text-[#5A5A5A] text-justify py-5">
              <Link
                to="https://www.linkedin.com/in/subhan-ullah/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Dr. Subhan Ullah
              </Link>
              &nbsp;is an Assistant Professor and researcher at the school of
              computing, department of Computer Networks and Cybersecurity, Fast
              School of Computing,
              <Link
                to="https://www.nu.edu.pk/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;FAST, National University of Computer and Emerging
                Sciences,
              </Link>
              &nbsp;Islamabad.
            </p>

            <p className="font-Bitter font-normal text-[17px] leading-normal text-[#5A5A5A] text-justify">
              He has completed his Ph.D. from
              <Link
                to="https://www.nu.edu.pk/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;Institute of networked and embedded systems (NES),
                University of Klagenfurt, Austria
              </Link>
              &nbsp;in collaboration with the
              <Link
                to="https://unige.it//"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;University of Genoa,
              </Link>
              &nbsp;Italy, in 2019, under Erasmus Mundus Joint Doctorate Program
              for Interactive and Cognitive Environments (EMJD-ICE). Previously,
              he studied Joint International Master (Computer Science) from
              <Link
                to="https://h-da.de/en/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;University of Applied Sciences, Darmstadt,
              </Link>
              &nbsp;Germany in 2014, and also received his MS in Computer
              Science (MSCS) from the
              <Link
                to="https://www.iiu.edu.pk/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;International Islamic University,
              </Link>
              &nbsp;Islamabad, Pakistan in 2013. He also received his BS degree
              in Computer Science from the
              <Link
                to="https://uom.edu.pk/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;University of Malakand,
              </Link>
              &nbsp;Dir Lower in 2008. His research interest includes securing
              the Internet of Things (IoT) applications. Currently, his research
              focuses on the development of lightweight security and data
              protection approaches and his goal to develop lightweight security
              techniques for resource-limited smart devices for IoT
              applications. He is very much a kind at heart, loves to cook,
              loves cycling, and travels whenever he can.
            </p>
          </div>

          <PostsCard
            src="/assets/images/subhan nu.jpg"
            title={
              <>
                <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                  Email:&nbsp;
                </span>
                <Link
                  to="mailto:subhan.ullah@nu.edu.pk"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  subhan.ullah@nu.edu.pk
                </Link>

                <br />

                <Link
                  to="https://www.linkedin.com/in/subhan-ullah/"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  https://www.linkedin.com/in/subhan-ullah/
                </Link>

                <br />

                <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                  NUCES:&nbsp;
                </span>
                <Link
                  to="http://www.nu.edu.pk/ "
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  http://www.nu.edu.pk/
                </Link>

                <br />

                <Link
                  to="http://www.aau.at"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  http://www.aau.at
                </Link>

                <br />

                <Link
                  to="https://unige.it"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  https://unige.it
                </Link>
              </>
            }
            cardClassName="w-[270px] border-none shadow-none"
            titleClassName="p-2 font-Bitter font-bold text-[20px] leading-[22px] text-[#45818e] text-start justify-center]"
          />
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
