"use client";

const ReductionDocuments = () => {
  return (
    <div
      id="reductionDocuments"
      className="flex flex-col gap-8 lg:gap-4 lg:flex-row lg:justify-between pb-14 px-6 lg:px-16 lg:pb-24 scroll-mt-[58px] lg:scroll-mt-[98px] lg:relative"
    >
      <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8 lg:sticky lg:top-24">
        <span className="text-[#0C1E21] uppercase">Знищення документів</span>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 lg:max-w-[850px]">
        <h2 className="text-[#172629] text-3xl lg:text-5xl leading-[100%]">
          Знищення документів, робота ЕК
        </h2>
        <p className="text-[#0C1E21]">
          Після закінчення терміну зберігання Ваших документів Ви можете
          скористатися послугою, яку ми пропонуємо своїм клієнтам – вивезення
          макулатури і її знищення. Архівна служба пропонує послуги в області
          вивезення і конфіденційного знищення макулатури. Ми зробимо вивезення
          макулатури в слушний для Вас час силами наших співробітників за
          допомогою нашого автотранспорту. Ми пропонуємо один з двох можливих
          варіантів вивезення макулатури :
          <br />
          <br />
          вивезення макулатури з подальшим знищенням в промислових шредерах
          Жидачівського цилюлозно паперового комбінату; вивезення макулатури з
          подальшим знищенням в промислових печах. Увага!!! Ми не займаємося
          прийомом і купівлею макулатури і іншої вторсировини.
        </p>
        <div className="h-[190px] lg:h-full lg:w-full">
          <video
            src="/media/destructionDocuments.mp4"
            playsInline
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          ></video>
        </div>
      </div>
    </div>
    // <div className="lg:flex lg:h-[940px]">
    //   <div className="flex flex-col items-center lg:items-start bg-[#0D1E21] px-6 lg:px-[96px] py-10">
    //     <div
    //       className="flex justify-center rounded-md border
    //       border-white/10 bg-white/5 backdrop-blur-[15px] py-[6px] px-2 max-w-[200px] mb-4"
    //     >
    //       <span className="text-white text-sm uppercase">
    //         Знищення документів, робота ЕК
    //       </span>
    //     </div>
    //     <p className="text-[#9A9FA0] text-lg lg:text-[22px] mb-5 text-center lg:text-start lg:max-w-[600px]">
    //       Після закінчення терміну зберігання Ваших документів Ви можете
    //       скористатися послугою, яку ми пропонуємо своїм клієнтам – вивезення
    //       макулатури і її знищення. Архівна служба пропонує послуги в області
    //       вивезення і конфіденційного знищення макулатури. Ми зробимо вивезення
    //       макулатури в слушний для Вас час силами наших співробітників за
    //       допомогою нашого автотранспорту. Ми пропонуємо один з двох можливих
    //       варіантів вивезення макулатури :
    //       <br />
    //       <br />
    //       вивезення макулатури з подальшим знищенням в промислових шредерах
    //       Жидачівського цилюлозно паперового комбінату; вивезення макулатури з
    //       подальшим знищенням в промислових печах. Увага!!! Ми не займаємося
    //       прийомом і купівлею макулатури і іншої вторсировини.
    //     </p>
    //   </div>
    //   <div className="h-[290px] lg:h-full lg:w-full">
    //     <video
    //       src="/media/destructionDocuments.mp4"
    //       playsInline
    //       autoPlay
    //       loop
    //       muted
    //       className="h-full w-full object-cover"
    //     ></video>
    //   </div>
    // </div>
  );
};

export default ReductionDocuments;
