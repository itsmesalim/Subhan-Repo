import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Link } from "react-router-dom";

export default function Research() {
  return (
    <>
      <Header />
      <Title heading="Research" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
            Dr. Subhan is collaborating with researchers from academia and
            industry as well as supervising MS/Ph.D students in the following
            research areas of his interest.
          </p>

          <ol className="list-decimal list-inside font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
            <li>
              <Link
                to="http://localhost:5173/research-interest"
                target="blank"
                className="underline"
              >
                Securing Internet of Things applications
              </Link>
            </li>
            <li>
              <Link
                to="http://localhost:5173/research-interest"
                target="blank"
                className="underline"
              >
                Smart Camera Security
              </Link>
            </li>
            <li>Lightweight Cryptography</li>
            <li>Lightweight cryptographic approaches for VANET</li>
            <li>Intrusion and Malware detection using ML/AI approaches </li>
          </ol>
        </div>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-14 w-full rounded ">
          <Link to="http://localhost:5173/research-interest" target="blank">
            Learn more...
          </Link>
        </button>

        <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify pb-4">
          Publications in his research area of interest.
        </p>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-14 w-full rounded ">
          <Link to="http://localhost:5173/publications" target="blank">
            Learn more...
          </Link>
        </button>

        <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify pb-4">
          Collaborations in his research area of Interest
        </p>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-10 w-full rounded ">
          <Link to="http://localhost:5173/collaborations" target="blank">
            Learn more...
          </Link>
        </button>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
