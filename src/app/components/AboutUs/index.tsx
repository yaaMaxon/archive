"use client";

import { servicesList } from "@/app/constants/ServicesSettings";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:justify-between px-6 lg:px-16 pt-[56px] lg:pt-[96px] lg:relative">
      <div className="pb-2 border-b border-b-[#E8EDED] min-w-[250px] max-h-8 lg:sticky lg:top-24">
        <span className="text-[#0C1E21] uppercase">Про нас</span>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 lg:max-w-[850px]">
        <h2 className="text-[32px] lg:text-[48px] text-[#0C1E21] leading-[100%]">
          Інформація про компанію
        </h2>
        <p className="text-lg lg:text-xl text-[#0C1E21]">
          В будь-якій компанії в процесі діяльності назбирується різноманітна
          документація. Тому із часом «гори» паперу потрібно систематизувати та
          кудись скласти, а найкращий варіант – архівувати а потім утилізувати.
        </p>
        <p className="lg:text-lg text-[rgba(6,39,44,0.60)]">
          ФОП Гупало Петро Євгенович надає широкий комплекс архівних послуг у
          Львівській області. Здійснить нормативно правове забезпечення архівної
          справи на підприємстві/організації, організує систематизацію та рух
          документів від виконавця до архівної полиці, експертну оцінку
          документів, здійснимо переміщення документів на усьому ланцюжку
          переміщення документів так і виконає палітурні роботи різної
          складності.
        </p>
        <p className="lg:text-lg text-[rgba(6,39,44,0.60)]">
          Кожна надана послуга виконується згідно вимог законодавчих і
          нормативно-правових актів, що регулюють питання організації роботи
          архівів та архівних підрозділів в Україні. Зберігайте цінні документи
          правильно, і в цьому вам допоможе ФОП Гупало Петро Євгенович!
        </p>
        <div>
          <span className="lg:text-lg text-[#0C1E21] underline">
            Виконання замовлень:
          </span>
          {
            <ul className="list-disc pl-5 mt-8">
              {servicesList.map(({ service }, index) => (
                <li
                  key={index}
                  className="lg:text-lg text-[rgba(6,39,44,0.60)]"
                >
                  {service}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
