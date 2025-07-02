import HeroServices from "@components/HeroServices";
import ProcessingDocument from "@components/ProcessingDocument";
import ExpertDocuments from "@components/ExpertDocuments";
import OptimizationDocuments from "@components/OptimizationDocuments";
import BookbindingWork from "@components/BookbindingWork";
import ReductionDocuments from "@components/ReductionDocuments";
import AboutServices from "@components/AboutServices";
import Banner from "../components/Banner";

const Services = () => {
  return (
    <main>
      <HeroServices />
      <ProcessingDocument />
      <ExpertDocuments />
      <OptimizationDocuments />
      <BookbindingWork />
      <ReductionDocuments />
      <AboutServices />
      <Banner />
    </main>
  );
};

export default Services;
