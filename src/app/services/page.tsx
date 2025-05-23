import HeroServices from "@components/HeroServices";
import ProcessingDocument from "@components/ProcessingDocument";
import ExpertDocuments from "@components/ExpertDocuments";
import OptimizationDocuments from "@components/OptimizationDocuments";
import BookbindingWork from "@components/BookbindingWork";
import ReductionDocuments from "@components/ReductionDocuments";
import Banner from "../components/Banner";

const Services = () => {
  return (
    <main>
      <div>
        <HeroServices />
      </div>
      <div>
        <ProcessingDocument />
      </div>
      <div>
        <ExpertDocuments />
      </div>
      <div>
        <OptimizationDocuments />
      </div>
      <div>
        <BookbindingWork />
      </div>
      <div>
        <ReductionDocuments />
      </div>
      <div>
        <Banner />
      </div>
    </main>
  );
};

export default Services;
