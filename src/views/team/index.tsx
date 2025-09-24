import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <Header />
      <Title heading="Team" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
            Currently the following team of Ph.D. and MS students are working on
            different research topics under the supervision of Dr Subhan.
          </p>

          <h3 className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
            Students currently under my supervision:
          </h3>

          <ol className="list-decimal list-inside font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
            <li> Muhammad Sohail (Ph.D)</li>
            <li> Muhammad Shahid (Thesis-2)</li>
            <li>Asad Rehman (Thesis-2)</li>
            <li>Muhammad Ali (Thesis-2)</li>
            <li>Muhammad Osama Khalid (Thesis-1)</li>
            <li>Muhammad Haris khan Abbas (Thesis-1)</li>
            <li>Saman Hanif (Thesis-1)</li>
            <li>Misbah Haider (Thesis-1)</li>
          </ol>
        </div>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-12 w-full rounded ">
          <Link
            to="/https://sites.google.com/d/1CwUssC4HVmKUVZSV38tBgjZVtfhtj2ZG/p/1ikyLVxXW7jWEW4aZ4pU3ts5GxOBPs4gp/edit?pli=1"
            target="blank"
          >
            Learn more...
          </Link>
        </button>

        <div className="grid grid-rows-1 gap-4 my-3">
          <p className="font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
            The following students has already completed his MS thesis under the
            supervision of Dr. Subhan.
          </p>

          <ol className="list-decimal list-inside font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
            <li>Adeel Sarwar (Fall-2020)</li>
            <li>Ali Saleh (Fall-2020)</li>
            <li>Ali Raza Khaliq (Fall-2020)</li>
            <li>Haris Khan (Fall-2020)</li>
            <li>Muhammad Umer (Fall-2020)</li>
            <li>Mohibullah Khan (Fall-2020)</li>
            <li>Naqash (Spring-2021)</li>
            <li>Umbish Sardar (Spring-2021)</li>
            <li>Nudrat Zara (Spring-2021)</li>
          </ol>
        </div>

        <button className="font-Bitter font-normal text-[17px] bg-headercolor text-white hover:bg-[#62808e] p-1.5 mb-12 w-full rounded ">
          <Link
            to="https://sites.google.com/d/1CwUssC4HVmKUVZSV38tBgjZVtfhtj2ZG/p/1ikyLVxXW7jWEW4aZ4pU3ts5GxOBPs4gp/edit?pli=1"
            target="blank"
          >
            Learn more...
          </Link>
        </button>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
