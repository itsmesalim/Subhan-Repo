import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";

export default function PreviousCourses() {
  return (
    <>
      <Header />
      <Title heading="Previous courses" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify my-3">
            Dr. Subhan Ullah, is involved in teaching and administrative tasks
            in the department of Networks and Cybersecurity, FAST School of
            Computing, National University of Computer and Emerging Sciences,
            Islamabad.
          </p>

          <h5 className="font-Bitter font-bold text-[20px] leading-[15px] text-[#45818e] mt-8">
            Courses taught and administrative tasks in the previous semesters
          </h5>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify ml-5">
            <li>
              Spring 2022
              <ul className="list-square font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
                <li>Computer Networks (under graduate level)</li>
                <li>
                  Coordinator of MS Research Committee (MSRC): Computer Networks
                  and Cybersecurity (Thesis-1 and Thesis-2)
                </li>
                <li>
                  Member of Program Team of BS Cybersecurity and Data forensics
                  (CSDF)
                </li>
                <li>Member of Ph.D research committee (Ph.DRC) </li>
              </ul>
            </li>

            <li>
              Fall 2021
              <ul className="list-square font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
                <li>Computer Networks (Under graduate level)</li>
                <li>
                  Coordinator of MS Research Committee (MSRC): Computer Networks
                  and Cybersecurity (Thesis-1 and Thesis-2)
                </li>
                <li>
                  Member of Program Team of BS Cybersecurity and Data forensics
                  (CSDF)
                </li>
              </ul>
            </li>

            <li>
              Spring 2021
              <ul className="list-square font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
                <li>
                  Securing The Internet of Things (IoT) : (Postgraduate level)
                </li>
                <li> Programming Fundamentals (C++) (Under graduate level)</li>
                <li>
                  Coordinator of MS Research Committee (MSRC): Computer Networks
                  and Cybersecurity (Thesis-1 and Thesis-2)
                </li>
                <li>
                  Member of Program Team of BS Cybersecurity and Data forensics
                  (CSDF)
                </li>
                <li>Member of Ph.D research committee (Ph.DRC)</li>
              </ul>
            </li>

            <li>
              Fall 2020
              <ul className="list-square font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
                <li>
                  Securing The Internet of Things (IoT) (Postgraduate level)
                </li>
                <li>
                  Object Oriented Programming in C++ (Under graduate level)
                </li>
                <li>
                  Member of MS Research Committee (MSRC): Department of Computer
                  Science (Thesis-1 and Thesis-2)
                </li>
                <li>
                  Member of Program Team of BS Cybersecurity and Data forensics
                  (CSDF)
                </li>
                <li>
                  Member of Ph.D research committee (Ph.DRC): Department of
                  Computer Science
                </li>
                <li>Member of Disciplinary Committee</li>
              </ul>
            </li>

            <li>
              Spring 2020
              <ul className="list-square font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
                <li>
                  Securing The Internet of Things (IoT) (Postgraduate level)
                </li>
                <li>Programming Fundamentals (C++) (Under graduate level)</li>
                <li>
                  Member of MS Research Committee (MSRC): Department of Computer
                  Science (Thesis-1 and Thesis-2)
                </li>
                <li>Member of Student Counseling Committee </li>
              </ul>
            </li>

            <li>
              Fall 2019
              <ul className="list-square font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
                <li>
                  Securing The Internet of Things (IoT) (Postgraduate level)
                </li>
                <li>Computer Networks (Under graduate level)</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
