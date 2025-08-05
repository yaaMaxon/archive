import Hero from "@components/Hero";
import AboutUs from "@components/AboutUs";
import ArchivServices from "@components/ArchivServices";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <ArchivServices />
      <Banner />
    </main>
  );
};

export default Home;
