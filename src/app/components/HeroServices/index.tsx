"use client";

import { motion } from "framer-motion";

const HeroServices = () => {
  return (
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
            delayChildren: 0.2,
          },
        },
      }}
      className="flex flex-col items-center gap-2 bg-[#F4F8F8] py-14 px-6 lg:px-16 lg:py-20"
    >
      <motion.span
        variants={{
          hidden: { y: -30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 18,
            },
          },
        }}
        className="text-[#0C1E21] text-sm rounded-sm border border-[#E8EDED] bg-white py-[6px] px-2 max-w-[95px] uppercase"
      >
        Послуги
      </motion.span>
      <motion.h2
        variants={{
          hidden: { y: 40, opacity: 0, scale: 0.95 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 18,
            },
          },
        }}
        className="text-[#0C1E21] text-center text-[40px] lg:text-[80px] leading-[100%] lg:max-w-[700px] xl:max-w-[1000px]"
      >
        Архівні послуги для вашого бізнесу
      </motion.h2>
      <motion.p
        variants={{
          hidden: { y: 40, opacity: 0, scale: 0.95 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 18,
            },
          },
        }}
        className="text-[rgba(6,39,44,0.60)] text-center text-[20px] leading-[160%] lg:max-w-[600px]"
      >
        Професійне впорядкування, зберігання та обробка документації відповідно
        до вимог законодавства. Довірте збереження важливої інформації
        професіоналам.
      </motion.p>
    </motion.div>
  );
};

export default HeroServices;
