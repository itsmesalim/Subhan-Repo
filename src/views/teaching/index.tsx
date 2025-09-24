import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Link } from "react-router-dom";

export default function Teaching() {
  return (
    <>
      <Header />
      <Title heading="Teaching" />

      <div className="gap-9 mx-24 my-8">
        <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
          Dr. Subhan Ullah, is involved in teaching and various administrative
          tasks in the department of Networks and Cybersecurity, FAST School of
          Computing, National University of Computer and Emerging Sciences,
          Islamabad.
        </p>
        <h3 className="font-Bitter font-bold my-5 text-[20px] leading-[25px] text-[#45818e] pt-12">
          Current courses and administrative tasks (Teaching load in Spring
          2022)
        </h3>

        <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify mb-5">
          Currently, Dr. subhan is teaching the course "Securing the Internet of
          things (IoT)" on Postgraduate/Ph.D Level and "Computer Networks" on
          the under graduate level. He is also the coordinator of the MS
          Research Committee (MSRC) in the department of Computer Networks and
          Cybersecurity.
        </p>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-10 w-full rounded ">
          <Link to="http://localhost:5173/current-courses" target="blank">
            Learn more...
          </Link>
        </button>

        <h3 className="font-Bitter font-bold my-5 text-[20px] leading-[25px] text-[#45818e]">
          Administrative tasks and Courses taught in the previous semesters
        </h3>

        <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify mb-5">
          In the previous semesters, he also taught the course "Securing the
          Internet of Things" on Postgraduate/Ph.D Level and the courses of
          Computer Networks, Programming Fundamentals (C++), Object Oriented
          Programming (C++) on the under graduate level since August, 2019, in
          the Department of Computer Networks and Cybersecurity in FAST School
          of Computing, National University of Computer and Emerging, Sciences,
          Islamabad.
        </p>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-12 w-full rounded ">
          <Link to="http://localhost:5173/previous-courses" target="blank">
            Learn more...
          </Link>
        </button>

        <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify py-4">
          Tutorials and other useful links (coming soon).
        </p>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-8 w-full rounded ">
          <Link to="http://localhost:5173/tutorials" target="blank">
            Learn more...
          </Link>
        </button>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
