import PostsCard from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <>
      <Header />
      <Title heading="News" />

      <div className="gap-9 mx-24 my-8">
        <h1 className="font-Bitter font-bold my-10 text-[24px] leading-[25px] text-[#45818e] pb-4">
          News and updates
        </h1>

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

        <Separator className="h-0.5 my-10" />
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
