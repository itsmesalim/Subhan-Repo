import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";

export default function CurrentCourses() {
  return (
    <>
      <Header />
      <Title heading="Current Courses" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify my-3">
            Currently, Dr. Subhan is involved in teaching and administrative
            tasks in the Department of Computer Networks and Cybersecurity, FAST
            School of Computing, National University of Computer and Emerging
            Sciences, Islamabad.
          </p>

          <h4 className="font-Bitter font-bold text-[20px] leading-[15px] text-[#45818e] mt-8">
            Current courses (Fall 2022)
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
            <li>Advanced Computer Networks-2022 (Postgraduate)</li>
            <li>Computer Networks (Under Graduate Level)</li>
            <li>Discrete Structures (Under Graduate Level)</li>
          </ol>

          <h4 className="font-Bitter font-bold text-[20px] leading-[15px] text-[#45818e] mt-12">
            administrative tasks (Fall 2022)
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
            <li>
              Coordinator of MS Research Committee (MSRC): Computer Networks and
              Cybersecurity (Thesis-1 and Thesis-2)
            </li>
            <li>
              Member of Program Team of BS Cybersecurity and Data forensics
              (CSDF)
            </li>
            <li>Member of Ph.D research committee (Ph.DRC) </li>
          </ol>
        </div>
      </div>
      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
