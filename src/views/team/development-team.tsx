import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Link } from "react-router-dom";

export default function DevelopmentTeam() {
  return (
    <>
      <Header />
      <Title heading="Development Team " />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <h2 className="font-Bitter font-bold text-[26px] leading-[25px] text-[#45818e] mt-10">
            Software Development Team
          </h2>

          <ul className="list-square square font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
            <li>
              <Link
                to="https://www.linkedin.com/in/ibrahim66/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Ibrahim:
              </Link>
              &nbsp;MCP, MCSA, Azure Developer Associate, .NET & React.js
              Developer Saudi Arabia.
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/fath-ullah-asad/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Fath Ullah:
              </Link>
              &nbsp;Android, Java, Kotlin, Flutter Developer at&nbsp;
              <Link
                to="https://www.linkedin.com/company/fhk-cash/posts/?feedView=all"
                target="blank"
                className="underline"
              >
                FHK Soft
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/noorkhan92/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Noor Khan:
              </Link>
              &nbsp;Software Engineer at DBank, Islamabad.
            </li>

            <li>
              <Link
                to="https://cs.uoch.edu.pk/faculty/teacher_single/3"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Abdullah Khan:
              </Link>
              &nbsp;Flutter, React.js & NoSQL (Firebase & MongoDB) Developer
              at&nbsp;
              <Link
                to="https://www.linkedin.com/company/fhk-cash/posts/?feedView=all"
                target="blank"
                className="underline"
              >
                FHK Soft
              </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/feed/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Salim Ullah:
              </Link>
              &nbsp;Frontend Web Developer (React.js | HTML5 | CSS3 | Tailwind
              CSS | JavaScript | TypeScript Developer) at&nbsp;
              <Link
                to="google.com/maps/search/Innovo%20Technologies/@33.65429731,73.03607862,17z?hl=en"
                target="blank"
                className="underline"
              >
                Innovo Technologies
              </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/imranul-haq-8aa068325/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Imran Ul Haq:
              </Link>
              &nbsp;Flutter Developer | Building Android Apps with Dart,
              Provider & Firebase | at&nbsp;
              <Link
                to="https://www.linkedin.com/company/fhk-cash/posts/?feedView=all"
                target="blank"
                className="underline"
              >
                FHK Soft
              </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/ibrar-ul-haq-161732379/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Ibrar Ul Haq:
              </Link>
              &nbsp;Full Stack Developer || MERN Stack Developer.
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/ibrar-ul-haq-161732379/"
                target="blank"
                className="text-[#4A86E8] hover:text-[#3d72c9]"
              >
                Mr. Asad Ullah Khan:
              </Link>
              &nbsp;C# .Net Developer || Backend Developer.
            </li>
          </ul>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
