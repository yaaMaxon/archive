"use client";

const OptimizationDocuments = () => {
  return (
    <div
      id="optimizationDocuments"
      className="flex flex-col gap-8 lg:gap-4 lg:flex-row lg:justify-between pb-14 px-6 lg:px-16 lg:pb-24 scroll-mt-[58px] lg:scroll-mt-[98px] lg:relative"
    >
      <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8 lg:sticky lg:top-24">
        <span className="text-[#0C1E21] uppercase">Основа архіву</span>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 lg:max-w-[850px]">
        <h2 className="text-[#172629] text-3xl lg:text-5xl leading-[100%]">
          Номенклатура справ підприємства
        </h2>
        <p className="text-[#0C1E21]">
          Номенклатура справ є систематизованим переліком заголовків справ, які
          мають бути заведені в діловодстві підприємства в наступному
          діловодному році відповідно до структури підприємства, його функцій і
          завдань з вказанням термінів зберігання цих справ. Проте ускладнення
          сучасного державного і господарського життя, структури
          адміністративно-господарських органів підприємницьких організацій і
          об’єднань пред’являє все більш складні вимоги до систематизації і
          класифікації архівних документів, що утворюються в результаті їх
          діяльності.
          <br />
          <br />
          Номенклатура справ – це систематизований перелік заголовків справ,
          певних видів документів з однорідними функціями і однотипним складом,
          що утворюються в діловодстві підприємства.
        </p>
      </div>
    </div>
  );
};

export default OptimizationDocuments;
