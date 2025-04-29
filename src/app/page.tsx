import Hero from "@components/Hero";
import AboutUs from "@components/AboutUs";
import ArchivServices from "@components/ArchivServices";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <ArchivServices />
      </div>
      <div>
        <Banner />
      </div>
    </main>
  );
};

export default Home;
