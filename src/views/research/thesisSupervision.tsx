import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";

export default function ThesisSupervision() {
  return (
    <>
      <Header />
      <Title heading="Thesis supervision" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <h4 className="font-Bitter font-bold text-[20px] leading-[15px] text-[#45818e] mt-5">
            Ph.D Thesis (currently under supervision)
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[25px] text-[#5A5A5A] text-justify ml-5">
            <li>
              Intrusion Detection in internet of things (IoT) Using Machine
              Learning: Muhammad Sohail
            </li>
          </ol>

          <h4 className="font-Bitter font-bold text-[20px] leading-[15px] text-[#45818e] mt-2">
            MS Thesis (currently under supervision)
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[28px] text-[#5A5A5A] text-justify ml-5">
            <li>
              Securing Smart Door with Facial Recognition in AI-IOT
              Applications: Saman Hanif
            </li>
            <li>
              Detection of Adversarial Attack in IOT enabled UAV'S : Saqlain
              Ahmad Bhatti
            </li>
          </ol>

          <h4 className="font-Bitter font-bold text-[20px] leading-[15px] text-[#45818e] mt-2">
            MS Thesis (already supervised)
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[30px] text-[#5A5A5A] text-justify ml-5">
            <li>
              Ali Raza Khaliq (18i-1477): Thesis Title: “Machine Learning
              Approach for the Detection of Backdoor Malware” Fall 2020.
            </li>
            <li>
              Haris khan (18i-1412): Thesis Title: “Confidential and Authentic
              Communication between UAVs for Target Surveillance” Fall 2020.
            </li>
            <li>
              Adeel Sarwar (17i-1066): Thesis Title: “Lightweight Sybil
              Resistant Trust-based Mechanism for IoT using Blockchain” Fall
              2020.
            </li>
            <li>
              Muhammad Umer (18i-1466): Thesis Title: “Identification of IoT
              Devices based on Decentralized Identifiers and Verifiable
              Credentials” Fall 2020.
            </li>
            <li>
              Ali Saleh (17i-1059): Thesis Title: “Securing Video Surveillance
              of IoT based Smart Housing Society” Fall 2020.
            </li>
            <li>
              Mohib Ullah (18i-1467): Thesis Title: “Lightweight Authentication
              Technique for Smart Home Application” Fall-2020
            </li>
            <li>
              Umbish Sardar (18i-1456): “Lightweight authentication in
              cloud-enabled Unmanned Ariel Vehicles (UAVs)” Spring 2021
            </li>
            <li>
              Nudrat Zara (18i-1430): Thesis Title: “Layer-wise Hybrid Approach
              for Trojan Detection in Android Applications” Spring 2021
            </li>
            <li>
              Naqash (17i-1013): Thesis Title: “A Lightweight Encryption with
              Integrated Security and Privacy for Facial Recognition”, Spring
              2021.
            </li>
            <li>
              Muhammad Ali (19i-1812): Thesis Title: “Detection of DDoS attack
              in IoT using an efficient Machine Learning based approach,
              Fall-2021
            </li>
            <li>
              Muhammad Shahid (19i-1808): Thesis Title: “An efficient
              trust-based mechanism for detection of OnOff attack in IoT”, Fall
              2021
            </li>
            <li>
              Asad Rahman (19i-1809): Thesis Title: “Protection of Control Plane
              against False traffic in SDN” Fall-2021
            </li>
            <li>
              Muhammad Osama Khalid (20i-1955): Thesis Title: “Dynamic and
              Context-aware Technique for the detection of fileless malware”
              Fall 2022.
            </li>
            <li>
              Muhammad Haris Khan Abbasi (20i-1952): Thesis Title: “Detection
              and prevention of In-browser Crypto-jacking attack” Fall 2022.
            </li>
          </ol>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
