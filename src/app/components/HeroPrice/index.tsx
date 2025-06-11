const HeroPrice = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-[#F4F8F8] py-14 px-6 lg:px-16 lg:py-20">
      <span className="text-[#0C1E21] text-sm rounded-sm border border-[#E8EDED] bg-white py-[6px] px-2 max-w-[95px] uppercase">
        Ціни
      </span>
      <h2 className="text-[#0C1E21] text-center text-[40px] lg:text-[80px] leading-[100%] lg:max-w-[700px] xl:max-w-[1000px]">
        Кошторис витрат
      </h2>
      <p className="text-[rgba(6,39,44,0.60)] text-center text-[20px] leading-[160%] lg:max-w-[600px]">
        Кошторис витрат до договору на архівні послуги. Основні етапи, вартість
        обробки документів, палітурних робіт, зберігання документації.
      </p>
    </div>
  );
};

export default HeroPrice;
