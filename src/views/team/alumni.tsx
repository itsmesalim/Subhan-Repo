import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Profile from "@/components/profile";
import Title from "@/components/title.tsx";

export default function Alumni() {
  return (
    <>
      <Header />
      <Title heading="Alumni" />

      <div className="grid gap-12 mx-24 my-20">
        <Profile
          title="Muhammad Osama Khalid "
          description="Successfully completed his MS Thesis in Fall-2022."
        />
        <Profile
          title="Haris Khan Abbasi"
          description="Successfully completed his MS Thesis in Fall-2022."
        />
        <Profile
          title="Asad Rahman"
          description="Successfully completed his MS Thesis in Spring-2021."
        />
        <Profile
          title="Muhammad Shahid"
          description="Successfully completed his MS Thesis in Fall-2021."
        />
        <Profile
          title="Muhammad Ali"
          description="Successfully completed his MS Thesis in Fall-2021."
        />
        <Profile
          title="Naqash "
          description="Successfully completed his MS Thesis in Fall-2021."
        />
        <Profile
          src="/assets/images/girl.png"
          title="Umbish Sardar"
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          src="/assets/images/girl.png"
          title="Nudrat Zara"
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          title="Haris khan"
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          title="Adeel Sarwar "
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          title="Mohibullah Khan "
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          title="Ali Saleh"
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          title="Muhammad Umer"
          description="Successfully completed his MS Thesis in Fall-2020."
        />
        <Profile
          title="Ali Raza Khaliq"
          description="Successfully completed his MS Thesis in Fall-2020."
        />
      </div>

      <Footer footer="Subhan Ullah | Copyright@2022 | Terms and conditions | Privacy policy " />
    </>
  );
}
