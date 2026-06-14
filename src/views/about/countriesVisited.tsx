import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Title from "@/components/title";

export default function CountriesVisited() {
  return (
    <>
      <Header />
      <Title heading="Countries Visited" />

      <div className="px-4 py-6 md:px-8 lg:px-24">
        <p className="pt-3 font-Bitter font-normal text-[17px] leading-[20px] text-[#5A5A5A] text-justify">
          Travel, in the younger sort, is a part of education; in the elder, a
          part of experience (Francis Bacon). Dr. Subhan Ullah have been visited
          the following countries mostly for the education and research
          purposes.
        </p>
        <ul className="list-square square list-inside font-Bitter font-normal text-[17px] leading-[32px] text-[#5A5A5A] text-justify">
          <li> Germany </li>
          <li> Austria </li>
          <li> Italy </li>
          <li> London, UK </li>
          <li> Switzerland </li>
          <li> France </li>
          <li> Spain </li>
          <li> Netherlands </li>
          <li> Poland </li>
          <li> Slovenia </li>
          <li> Czech Republic </li>
          <li> Hungary </li>
          <li> Croatia </li>
          <li> Belgium </li>
          <li> Sweden </li>
          <li> Norway </li>
          <li> Denmark </li>
          <li> Turkey </li>
        </ul>
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
