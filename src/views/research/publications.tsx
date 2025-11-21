import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";

export default function Publications() {
  return (
    <>
      <Header />
      <Title heading="Publications" />

      <div className="gap-9 mx-24 my-8">
        <div className="grid grid-rows-1 gap-4 my-3">
          <h4 className="font-Bitter font-bold text-[20px] leading-[25px] text-[#45818e] mt-10">
            Publications
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify ml-5">
            <li>
              S. Ullah, T. Ahmad, A. Buriro, N. Zara, S. Saha. "TrojanDetector:
              A Multi-Layer Hybrid Approach for Trojan Detection in Android
              Applications." Applied Sciences. 2022; 12(21):10755.
              https://doi.org/10.3390/app122110755.
            </li>

            <li>
              S. Ullah, T. Ahmad, R. Ahmad, M. Aslam "Prevention of
              Cryptojacking Attacks in Business and FinTech Applications", book
              chapter., Handbook of Research on Cybersecurity Issues and
              Challenges for Business and FinTech Applications. IGI Global,
              2022.
            </li>

            <li>
              S. Ullah, L. Marcenaro and B. Rinner, “Secure Smart Cameras by
              Aggregate-Signcryption with Decryption Fairness for Multi-Receiver
              IoT Applications”, 19, 327, Sensors 2019.
            </li>

            <li>
              M. A. Mughal, X. Luo, A. Ullah, S. Ullah and Z. Mahmood, "A
              Lightweight Digital Signature Based Security Scheme for
              Human-Centered Internet of Things," in IEEE Access, vol. 6, pp.
              31630-31643, 2018.
            </li>

            <li>
              S. Ullah, F. Russo, L. Marcenaro and B. Rinner,
              “Aggregate-signcryption for securing smart camera IoT
              applications,” in Proc. IEEE GIoTS, June 2018, pp. 1–6.
            </li>

            <li>
              S. Ullah, B. Rinner, and L. Marcenaro, “Smart cameras with onboard
              signcryption for securing IoT applications,” in Proc. IEEE GIoTS,
              June 2017, pp. 1–6.
            </li>
          </ol>

          <h4 className="font-Bitter font-bold text-[20px] leading-[25px] text-[#45818e] mt-10">
            Submitted and under review:
          </h4>

          <ol className="list-decimal font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify ml-5">
            <li> Backdoor Malware 2021 </li>
            <li> Lightweight security scheme for VANET 2021 </li>
            <li> Malware detection in Android-based smart phones 2021 </li>
          </ol>
        </div>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
