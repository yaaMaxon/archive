"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { myContacts } from "@/app/constants/ContactsSettings";
import { whatWeOffer } from "@/app/constants/ProcessingDocumentSettings";
import { whatYouGet } from "@/app/constants/ProcessingDocumentSettings";
import avatar from "@assets/img/avatar1.webp";

const ProcessingDocument = () => {
  return (
    <div
      id="processingDocument"
      className="flex flex-col gap-8 lg:gap-32 lg:flex-row lg:justify-center py-14 px-6 lg:px-16 lg:py-24 lg:relative"
    >
      <div className="flex self-start flex-col gap-5 lg:gap-8 lg:sticky lg:top-24">
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
          className="pb-2 border-b border-b-[#E8EDED] lg:max-w-[314px] max-h-8"
        >
          <span className="text-[#0C1E21] uppercase">Контакти</span>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="flex flex-col gap-4"
        >
          {myContacts.map(({ icon, href, text }, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              className="flex items-center gap-4"
            >
              <div className="rounded-full border border-[#E8EDED] bg-[#F4F8F8] py-2 px-3 text-[#0C1E21]">
                {icon}
              </div>
              <a
                href={href}
                className={`relative text-[#0C1E21] overflow-hidden ${
                  index === 0 && "pb-1"
                } after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#0C1E21] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {text}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { y: 50, opacity: 0, scale: 0.95 },
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
          className="flex flex-col gap-4 bg-[#F4F8F8] p-6 lg:p-8 max-h-[270px] lg:max-w-[350px]"
        >
          <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8">
            <span className="text-[#0C1E21] uppercase">Архівіст</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={avatar}
                alt="керівник"
                className="rounded-3xl w-[50px] h-[50px] object-cover"
              />
              <div className="absolute inset-0 bg-[#0D1E21] opacity-20 rounded-3xl"></div>
            </div>
            <div>
              <h4 className="text-[#0C1E21] text-lg">Гупало Петро</h4>
              <span className="text-sm text-[rgba(6,39,44,0.60)]">
                Керівник
              </span>
            </div>
          </div>
          <p className="text-sm text-[#0C1E21]">
            ФОП Гупало Петро Євгенович надає широкий комплекс архівних послуг у
            Львівській області.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
        className="flex flex-col gap-12 lg:max-w-[850px]"
      >
        <div className="flex flex-col gap-4">
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
            Архівна обробка документів
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
            Робота архіва – упорядкувати документи, обробити належним чином,
            відповідно до законодавства, документи Вашого підприємства або
            організації. Відібрати протерміновані документи для їх знищення,
            правильно оформити документи для їх утилізації. Оформити та
            підготувати описи і акти, іншу документацію за підсумками діяльності
            підприємства, систематизація та впорядкування всіх архівів для
            перевірочної і експертно-перевірочної комісії.
            <br />
            <br />
            Перелік включає документи, що утворюються при документуванні
            однотипних (загальних для усіх) управлінських функцій, що
            виконуються установами, організаціями і підприємствами, незалежно
            від функціонально-цільового призначення, рівня і масштабу діяльності
            форм власності.
          </motion.p>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { y: -20, opacity: 0 },
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
            className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8"
          >
            <span className="text-[#0C1E21] uppercase">Ми пропонуємо</span>
          </motion.div>
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
                  delayChildren: 0.05,
                },
              },
            }}
            className="list-disc pl-4"
          >
            {whatWeOffer.map(({ process }, index) => (
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
                {process}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { y: -20, opacity: 0 },
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
            className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8"
          >
            <span className="text-[#0C1E21] uppercase">Ви отримаєте</span>
          </motion.div>
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
                  delayChildren: 0.05,
                },
              },
            }}
            className="list-disc pl-4"
          >
            {whatYouGet.map(({ process }, index) => (
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
                {process}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessingDocument;
