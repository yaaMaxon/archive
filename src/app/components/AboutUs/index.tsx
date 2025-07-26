"use client";

import { motion } from "framer-motion";
import { servicesList } from "@/app/constants/ServicesSettings";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-32 lg:flex-row lg:justify-center px-6 lg:px-16 pt-[56px] lg:pt-[96px] lg:relative">
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
        className="pb-2 border-b border-b-[#E8EDED] min-w-[314px] max-h-8 lg:sticky lg:top-24"
      >
        <span className="text-[#0C1E21] uppercase">Про нас</span>
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
              staggerChildren: 0.1,
              delayChildren: 0.15,
            },
          },
        }}
        className="flex flex-col gap-4 lg:gap-8 lg:max-w-[1209px]"
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
          className="text-[32px] lg:text-[48px] text-[#0C1E21] leading-[100%]"
        >
          Інформація про компанію
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
                stiffness: 100,
                damping: 15,
              },
            },
          }}
          className="text-lg lg:text-xl text-[#0C1E21]"
        >
          В будь-якій компанії в процесі діяльності назбирується різноманітна
          документація. Тому із часом «гори» паперу потрібно систематизувати та
          кудись скласти, а найкращий варіант – архівувати а потім утилізувати.
        </motion.p>
        <motion.p
          variants={{
            hidden: { y: 40, opacity: 0, scale: 0.95 },
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
          className="lg:text-lg text-[rgba(6,39,44,0.60)]"
        >
          ФОП Гупало Петро Євгенович надає широкий комплекс архівних послуг у
          Львівській області. Здійснить нормативно правове забезпечення архівної
          справи на підприємстві/організації, організує систематизацію та рух
          документів від виконавця до архівної полиці, експертну оцінку
          документів, здійснимо переміщення документів на усьому ланцюжку
          переміщення документів так і виконає палітурні роботи різної
          складності.
        </motion.p>
        <motion.p
          variants={{
            hidden: { y: 40, opacity: 0, scale: 0.95 },
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
          className="lg:text-lg text-[rgba(6,39,44,0.60)]"
        >
          Кожна надана послуга виконується згідно вимог законодавчих і
          нормативно-правових актів, що регулюють питання організації роботи
          архівів та архівних підрозділів в Україні. Зберігайте цінні документи
          правильно, і в цьому вам допоможе ФОП Гупало Петро Євгенович!
        </motion.p>
        <div>
          <motion.span
            variants={{
              hidden: { y: -20, opacity: 0 },
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
            className="lg:text-lg text-[#0C1E21] underline"
          >
            Виконання замовлень:
          </motion.span>
          {
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="list-disc pl-5 mt-8 marker:text-black"
            >
              {servicesList.map(({ service }, index) => {
                const [title, ...rest] = service.split(":");
                const description = rest.join(":").trim();

                return (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { y: 20, opacity: 0, scale: 0.98 },
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
                    className="lg:text-lg text-[rgba(6,39,44,0.60)]"
                  >
                    <span className="text-[#0C1E21] font-medium">{title}:</span>{" "}
                    {description}
                  </motion.li>
                );
              })}
            </motion.ul>
          }
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
