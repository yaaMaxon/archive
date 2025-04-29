import HeroServices from "@components/HeroServices";
import ProcessingDocument from "@components/ProcessingDocument";
import ExpertDocuments from "@components/ExpertDocuments";
import ReductionDocuments from "@components/ReductionDocuments";
import BookbindingWork from "@components/BookbindingWork";
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
        <ReductionDocuments />
      </div>
      <div>
        <BookbindingWork />
      </div>
      <div>
        <Banner />
      </div>
    </main>
  );
};

export default Services;
