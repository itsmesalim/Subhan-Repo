import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Profile from "@/components/profile";
import Title from "@/components/title.tsx";

export default function Group() {
  return (
    <>
      <Header />
      <Title heading="Group" />

      <div className="grid gap-12 mx-24 my-20">
        <Profile
          src="/assets/images/Sohail.jpeg"
          title="Muhammad Sohail"
          description="Muhammad Sohail (Ph.D Student) is working on Intrusion Detection
              in the Internet of Things (IoT) Using Machine Learning."
        />

        <Profile
          title="Saqlain Ahmad Bhatti"
          description="Saqlain Ahmad Bhatti (MS student) is working on Detection of
              Adversarial Attack in IOT enabled UAV'S."
        />
        <Profile
          src="/assets/images/girl.png"
          title="Saman Hanif"
          description="Saman Hanif (MS Student) is working on security of Smart Door Facial Recognition from backdoor attacks in IOT Applications."
        />
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
