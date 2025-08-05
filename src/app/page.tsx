import Hero from "@components/Hero";
// import AboutUs from "@components/AboutUs";
// import ArchivServices from "@components/ArchivServices";
// import Banner from "./components/Banner";

import dynamic from "next/dynamic";

const ArchivServices = dynamic(() => import("@components/ArchivServices"), {
  loading: () => <p>Loading...</p>,
});

const AboutUs = dynamic(() => import("@components/AboutUs"), {
  loading: () => <p>Loading...</p>,
});

const Banner = dynamic(() => import("@components/Banner"), {
  loading: () => <p>Loading...</p>,
});

// export default function Home() {
//   return <DynamicHeader />;
// }

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
