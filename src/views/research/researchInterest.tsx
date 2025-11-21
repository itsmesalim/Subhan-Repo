import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";

export default function ResearchInterest() {
  return (
    <>
      <Header />
      <Title heading="Research Interest" />

      <div className="gap-9 mx-24 my-8">
        <ul className="list-square square font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
          <li>
            Security and privacy for the Internet of Things (IoT) applications
            in various use-cases (e.g., smart home, smart parking, VANETs, and
            UAVs) composed of sensors, smart cameras, UAVs and drones.
          </li>

          <li> Sensor Networks and embedded systems. </li>

          <li>
            The development and analysis of lightweight cryptographic solutions
            for securing the IoT applications.
          </li>

          <li>
            Interested in Federated Learning, and other relevant AI and Machine
            Learning (ML)-based approaches for Malware, and Intrusion Detection.
          </li>
        </ul>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
