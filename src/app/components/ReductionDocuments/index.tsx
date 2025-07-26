"use client";

import { motion } from "framer-motion";

const ReductionDocuments = () => {
  return (
    <div
      id="reductionDocuments"
      className="flex flex-col gap-8 lg:gap-32 lg:flex-row lg:justify-center pb-14 px-6 lg:px-16 lg:pb-24 scroll-mt-[58px] lg:scroll-mt-[98px] lg:relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 18,
            },
          },
        }}
        className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[314px] max-h-8 lg:sticky lg:top-24"
      >
        <span className="text-[#0C1E21] uppercase">Знищення документів</span>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
        className="flex flex-col gap-4 lg:gap-8 lg:max-w-[850px]"
      >
        <motion.h2
          variants={{
            hidden: { y: -30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
            },
          }}
          className="text-[#172629] text-3xl lg:text-5xl leading-[100%]"
        >
          Знищення документів, робота ЕК
        </motion.h2>
        <motion.p
          variants={{
            hidden: { y: 30, opacity: 0, scale: 0.98 },
            visible: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
            },
          }}
          className="text-[#0C1E21]"
        >
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
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ReductionDocuments;
