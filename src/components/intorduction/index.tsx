import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <div className="grid items-start grid-cols-1 gap-9 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
        <img
          src="/assets/images/subhan nu.jpg"
          alt="subhan_nu"
          className="mx-auto w-full max-w-[220px] md:max-w-[260px] h-auto lg:max-w-[300px] lg:mx-0"
        />

        <div className="grid grid-rows-1 gap-4 my-3 lg:my-0 lg:max-w-full">
          <h2 className="font-Bitter font-bold mb-2 text-[18px] md:text-[19px] lg:text-[20px] leading-[25px] text-[#45818e] ">
            Welcome and glad to have you here...
          </h2>
          <p className="font-Bitter font-normal text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] text-[#2F2F2F] text-justify">
            <Link
              to="/biography"
              className="text-[#4A86E8] hover:text-[#3d72c9]"
            >
              Dr. Subhan Ullah
            </Link>
            &nbsp;is an Associate Professor in FAST Computing, Department of
            Computer Networks and Cybersecurity, Fast School of Computing,
            <Link
              to="http://www.nu.edu.pk"
              target="blank"
              className="text-[#4A86E8] hover:text-[#3d72c9]"
            >
              &nbsp;FAST, National University of Computer and Emerging Science,
            </Link>
            &nbsp;Islamabad. He is actively involved in teaching, research and
            also coordinating MS research committee (MSRC) in the Department of
            Computer Networks and Cybersecurity, and previously remained the
            part of other relevant committees in the department (e.g.,
            Disciplinary Committee, Program Committee, Students Advisory
            Committees).
          </p>

          <p className="font-Bitter font-normal text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] text-[#2F2F2F] text-justify">
            His
            <Link
              to="/research"
              target="blank"
              className="text-[#4A86E8] hover:text-[#3d72c9]"
            >
              &nbsp;research
            </Link>
            &nbsp; includes security and privacy for the Internet of Things
            (IoT) applications in various use-cases (e.g., smart home, smart
            parking, VANETs, and UAVs) composed of sensors, smart cameras, UAVs
            and drones. Currently, he focuses on the development and analysis of
            lightweight cryptographic solutions for securing the IoT
            applications. He is also interested in Federated Learning, and other
            relevant AI and Machine Learning (ML)-based approaches for Malware,
            and Intrusion Detection.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
