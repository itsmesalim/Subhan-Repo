import AccordionCard from "@/components/accordian";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Awards() {
  const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (key: string) => {
    setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Header />
      <Title heading="Awards" />

      <div className="px-4 py-6 md:px-8 lg:px-24">
        <h2 className="font-Bitter font-bold text-[17px] leading-[25px] text-[#45818e]">
          Academic scholarships awarded to Dr. Subhan Ullah during his academic
          career:
        </h2>

        <p className="font-Bitter font-normal text-[17px] leading-normal text-[#5A5A5A] text-justify py-5">
          Dr. Subhan secured the following Talent and Erasmus Mundus
          scholarships during his BS, MS and Ph.D education. He is thankful to
          all the sponsors and funding agencies for their kind support.
        </p>

        <ul className="list-[square] list-inside font-Bitter font-normal text-[17px] leading-[28px] text-[#5A5A5A] text-justify">
          <li>
            EMJD-ICE scholarship
            <b className="text-[#5A5A5A]">(Fully funded)</b> for Ph.D. awarded
            by European Union
          </li>
          <li>
            IDEAS scholarship <b className="text-[#5A5A5A]">(Fully funded)</b>
            for Joint International Master (JIM) awarded by European Union
          </li>
          <li>
            Talent scholarship <b className="text-[#5A5A5A]">(Fully funded)</b>
            for MS (CS)awarded by Worker Welfare Board, Pakistan
          </li>
          <li>
            Talent scholarship
            <b className="text-[#5A5A5A]">(Partially funded)</b> for BS (CS)
            awarded by Worker Welfare Board, Pakistan
          </li>
        </ul>

        <div className="grid w-full grid-cols-1 gap-16 mt-10 justify-items-center lg:grid-cols-2">
          <AccordionCard
            imageSrc="/assets/images/Erasmus.jpg"
            expandContent={
              <img
                src="/assets/images/large_ICE_400x400.png"
                alt="ICE Logo"
                className="w-[155px] h-[155px] object-contain"
              />
            }
            title="Awarded for Ph.D"
            description={
              <>
                <Link
                  to="https://icephd.org/"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A]"
                >
                  Erasmus Mundus Joint Doctorate Program in Interactive and
                  Cognitive Environments (EMJD-ICE)
                </Link>
                &nbsp; scholarship for Ph.D. awarded by European Union from
                2015–2019.
              </>
            }
            imageClassName="lg:w-[165px] lg:h-[210px]"
            cardClassName="w-auto border-none shadow-none"
            open={openCards["phd"]}
            onToggle={() => toggleCard("phd")}
          />

          <AccordionCard
            imageSrc="/assets/images/Erasmus.jpg"
            expandContent={
              <img
                src="/assets/images/logo.jpg"
                alt="University Logo"
                className="w-[155px] h-[155px] object-contain"
              />
            }
            title="Awarded for Joint International Master JIM (CS)"
            description={
              <>
                <Link
                  to="https://www.idt.mdh.se/ideas/index.php"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A]"
                >
                  IDEAS scholarship
                </Link>
                &nbsp; for Joint International Master (JIM) awarded by European
                Union from 2013–2014. This scholarship supported exchange study
                in Darmstadt University of Applied Sciences, Darmstadt, Germany.
              </>
            }
            imageClassName="lg:w-[165px] lg:h-[210px]"
            cardClassName="w-auto border-none shadow-none"
            open={openCards["jim"]}
            onToggle={() => toggleCard("jim")}
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-16 mt-10 justify-items-center lg:grid-cols-2">
          <AccordionCard
            imageSrc="/assets/images/wwf.png"
            title="Awarded for BS(CS)"
            description={
              <>
                Talent scholarship (partially funded) awarded by&nbsp;
                <Link
                  to="https://wwf.gov.pk/"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A]"
                >
                  worker welfare Fund,
                </Link>
                &nbsp; Pakistan from 2003-2007.
              </>
            }
            imageClassName="lg:w-[165px] lg:h-[210px]"
            cardClassName="w-auto border-none shadow-none"
          />

          <AccordionCard
            imageSrc="/assets/images/wwf.png"
            title="Awarded for MS(CS)"
            description={
              <>
                Talent scholarship (partially funded) awarded by&nbsp;
                <Link
                  to="https://wwf.gov.pk/"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A]"
                >
                  worker welfare Fund,
                </Link>
                &nbsp; Pakistan from 2010-2013.
              </>
            }
            imageClassName="lg:w-[165px] lg:h-[210px]"
            cardClassName="w-auto border-none shadow-none"
          />
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
