import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Link } from "react-router-dom";

export default function ResearchCollaborators() {
  return (
    <>
      <Header />
      <Title heading="Research collaborators" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
            Dr. Subhan Ullah welcomes research collaboration at the national and
            international levels. He currently extends his research
            collaboration with well-known professors and researchers in his
            field of interest listed below. Dr. Subhan Ullah is always open to
            ideas an discussion on research and development.
          </p>

          <h2 className="font-Bitter font-bold text-[26px] leading-[25px] text-[#45818e] mt-10">
            Research Partners
          </h2>

          <ul className="list-square square list-inside font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
            <li>
              <Link
                to="https://bernhardrinner.com/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Prof. Bernhard Rinner:
              </Link>
              &nbsp;Prof. Bernhard Rinner: Pervasive Computing,
              <Link
                to="https://nes.aau.at/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;Networked and Embedded Systems
              </Link>
              ,
              <Link
                to="https://www.aau.at/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                &nbsp;University of Klagenfurt
              </Link>
              , Austria.
            </li>
            <li>
              <Link
                to="https://www.mudassir.info/home"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Dr. Muddasir Aslam:
              </Link>
              &nbsp;Assistant Professor in Department of Cybersecurity, FAST
              School of Computing, FAST NUCES, Islamabad, Pakistan
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/tahir-ahmad-396aab55/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Dr. Tahir Ahmad:
              </Link>
              &nbsp;Center for Cybersecurity, Bruno Kessler Foundation, 38123
              Trento, Italy
            </li>
            <li>
              <Link
                to="https://www.uokajk.edu.pk/home/department/19"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Dr. Zahid Mahmood:
              </Link>
              &nbsp;University of Kotli Azad Jamo and Kashmir, Pakistan.
            </li>
            <li>
              <Link
                to="https://cs.uoch.edu.pk/faculty/teacher_single/3"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Dr. Nizamuddin:
              </Link>
              &nbsp;Assistant professor and Head Department of Computer Science
              University of Chitral, KPK, Pakistan.
            </li>
          </ul>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
