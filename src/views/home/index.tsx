//import PostsCard from "@/components/card";
import PostsCard from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <Title
        heading="Subhan Ullah"
        title={`Associate Professor${"\n"} FAST, National University of Computer and Emerging Sciences, Islamabad.`}
      />
      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-flow-col grid-rows-1 gap-9">
          <img
            src="/assets/images/subhan nu.jpg"
            alt="subhan_nu"
            className=" w-72 h-72"
          />

          <div className="grid grid-rows-1 gap-4 my-3  ">
            <h2 className="font-Bitter font-bold mb-2 text-[20px] leading-[25px] text-[#45818e] ">
              Welcome and glad to have you here...
            </h2>
            <p className="font-Bitter font-normal text-[18px] leading-[24px] text-[#000000] text-justify">
              <Link
                to="/biography"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Dr. Subhan Ullah
              </Link>
              &nbsp;is an Associate Professor in FAST Computing, Department of
              Computer Networks and Cybersecurity, Fast School of Computing,
              <Link
                to="http://www.nu.edu.pk"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;FAST, National University of Computer and Emerging
                Science,
              </Link>
              &nbsp;Islamabad. He is actively involved in teaching, research and
              also coordinating MS research committee (MSRC) in the Department
              of Computer Networks and Cybersecurity, and previously remained
              the part of other relevant committees in the department (e.g.,
              Disciplinary Committee, Program Committee, Students Advisory
              Committees).
            </p>

            <p className="font-Bitter font-normal text-[18px] leading-[24px] text-[#000000] text-justify">
              His
              <Link
                to="/research"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;research
              </Link>
              &nbsp; includes security and privacy for the Internet of Things
              (IoT) applications in various use-cases (e.g., smart home, smart
              parking, VANETs, and UAVs) composed of sensors, smart cameras,
              UAVs and drones. Currently, he focuses on the development and
              analysis of lightweight cryptographic solutions for securing the
              IoT applications. He is also interested in Federated Learning, and
              other relevant AI and Machine Learning (ML)-based approaches for
              Malware, and Intrusion Detection.
            </p>
          </div>
        </div>

        <Separator className="h-0.5 my-8" />

        <h2 className="font-Bitter font-bold my-8 text-[20px] leading-[25px] text-[#45818e] ">
          Current activities, collaborations and research posts
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <PostsCard
            src="/assets/images/Inam phd.jpeg"
            title="As External Examiner for Ph.D. Evaluation"
            description="Appointment as an external examiner for the Ph.D thesis defense of Inam Ur Rehman at the University of Malakand, Dir Lower (KPK)."
            footer="January 19, 2022"
          />

          <PostsCard
            src="/assets/images/examiner.png"
            title="As External Examiner for Ph.D. Evaluation"
            description="Appointment as an external examiner for the Ph.D thesis defense of Saeed Ullah Jan at the University of Malakand, Dir Lower (KPK). "
            footer="November 30, 2021"
          />

          <PostsCard
            src="/assets/images/Convocation 2021.JPG"
            title="67th Convocation, FAST, NUCES, Islamabad"
            description="Participated in 67th Convocation, at FAST, National University of Computer and Emerging Sciences, Islamabad. "
            footer="November 20-21, 2021"
          />

          <PostsCard
            src="/assets/images/CTI.jpg"
            title="Cyber Threat Intelligence Summit"
            description="Attended 4th International conference on Cyber threat Intelligence at Marriot hotel, Islamabad."
            footer="November 17, 2021"
          />

          <PostsCard
            src="/assets/images/BOS_Chitral.jpg"
            title="Member Board of Studies"
            description="Invited to the Board of Studies meeting at the University of Chitral (KPK). "
            footer="November 12, 2021"
          />

          <PostsCard
            src="/assets/images/GulzarPhD.jpg"
            title="As External Examiner for Ph.D. Evaluation"
            description="Appointment as an external examiner for the Ph.D thesis defense of Gulzar Mehmood at the University of Malakand, Dir Lower (KPK). "
            footer="March 5, 2021"
          />

          <PostsCard
            src="/assets/images/defense-SUllah.jpg"
            title="Ph.D Defense "
            description="Successfully depended my Ph.D. from University of Klagenfurt, Austria and University of Genoa, Italy. "
            footer="April 23, 2019"
          />

          <PostsCard
            src="/assets/images/IoT.png"
            title="More cyber security for intelligent cameras "
            description="To simplify our daily routines, devices designed for the “Internet of Things (IoT)” are usually equipped with cameras that can record images and videos, and transmit these to other devices. Subhan ..."
            footer={
              <button className="border border-headercolor bg-white text-headercolor hover:bg-[#e8e9ea] p-1.5 w-full rounded">
                <Link to="https://bernhardrinner.com/?p=6245" target="blank">
                  Learn more...
                </Link>
              </button>
            }
          />

          <PostsCard
            src="/assets/images/Bilbao conference.jpg"
            title="Global Internet of Things Summit (GIoTS) "
            description={
              <>
                Presented research in the&nbsp;
                <Link
                  to="https://globaliotsummit.org/giots-2018-bilbao/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  Global Internet of Things Summit (GIoTS)
                </Link>
                &nbsp;endorsed by IEEE, and driven by the IEEE Subcommittee on
                IoT and the IoT Forum in Bilbao, Spain.
              </>
            }
            footer="June 4-7, 2018"
          />

          <PostsCard
            src="/assets/images/graz.jpg"
            title="IACR Cryptology Spring School on Security & Correctness in the Internet of Things (IoT) "
            description={
              <>
                Attended&nbsp;
                <Link
                  to="https://www.securityweek.at/_archive/2017/school/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  IACR Cryptology Spring School on Security & Correctness in the
                  Internet of Things (IoT)&nbsp;
                </Link>
                and presented (research work in progress). It was organized by
                the research center&nbsp;
                <Link
                  to="https://www.securityweek.at/_archive/2017/school/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  "Dependable Internet of Things"&nbsp;
                </Link>
                , located at Graz University of Technology, Graz, Austria.
              </>
            }
            footer="May 8-12, 2017"
          />

          <PostsCard
            src="/assets/images/IoT Switzerland.jpg"
            title="Global Internet of Things Summit (GIOTS) Geneva "
            description={
              <>
                Presented research in the&nbsp;
                <Link
                  to="https://globaliotsummit.org/giots-2018-bilbao/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  Global Internet of Things Summit (GIoTS)
                </Link>
                &nbsp;in international conference and IoT Week at the
                International Conference Centre in Geneva, Switzerland.
              </>
            }
            footer="June 6-9, 2017"
          />

          <PostsCard
            src="/assets/images/Cavelase.jpg"
            title="EMJD-ICE Summer School"
            description={
              <>
                Presented research (work in progress) in
                <Link
                  to="https://globaliotsummit.org/giots-2018-bilbao/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;IEEE-EURASIP Summer School on Signal Processing
                  (S3P-2016)
                </Link>
                &nbsp;Organized by the
                <Link
                  to="https://signalprocessingsociety.org/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;IEEE SPS Italy Chapter
                </Link>
                &nbsp;and
                <Link
                  to="http://www.gtti.it/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;GTTI
                </Link>
                &nbsp;with the sponsorship of
                <Link
                  to="https://www.ieee.org/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;IEEE
                </Link>
                &nbsp;and
                <Link
                  to="https://eurasip.org/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;EURASIP.
                </Link>
              </>
            }
            footer="September 4-10, 2016"
          />

          <PostsCard
            src="/assets/images/Summer school uk.JPG"
            title="EMJD-ICE Summer School on Intelligent Sensing  2015"
            description={
              <>
                Presented research (work in progress) in EMJD-ICE Summer School
                of
                <Link
                  to="https://cis.eecs.qmul.ac.uk/school2015.html"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;Intelligent Sensing Summer School for Interactive and
                  Cognitive Environments
                </Link>
                &nbsp;at
                <Link
                  to="https://www.qmul.ac.uk/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;Queen Mary University
                </Link>
                &nbsp;of London, UK.
              </>
            }
            footer="September 1-4, 2015"
          />

          <PostsCard
            src="/assets/images/h_da Germany.jpg"
            title="h_da IDEAS Erasmus Mundus Exchange Program 2014"
            description={
              <>
                First day of Joining IDEAS Exchange program
                <Link
                  to="https://h-da.de/en/"
                  target="_blank"
                  className="text-[#4A86E8] hover:text-[#3d72c9]"
                >
                  &nbsp;Darmstadt University of Applied Science (h_da),
                </Link>
                &nbsp;Germany
              </>
            }
            footer="September 11, 2014"
          />
        </div>

        <Separator className="h-0.5 my-8" />
        <button className="font-Bitter font-normal text-[16px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 w-full rounded mb-8">
          <Link to="https://bernhardrinner.com/?p=6245" target="blank">
            Learn more...
          </Link>
        </button>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
