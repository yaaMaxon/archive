"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { mySocialNetworks } from "@/app/constants/ContactsSettings";
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
        <div className="pb-2 border-b border-b-[#E8EDED] lg:max-w-[314px] max-h-8">
          <span className="text-[#0C1E21] uppercase">Контакти</span>
        </div>
        <ul className="flex flex-col gap-4">
          {mySocialNetworks.map(({ icon, href, text }, index) => (
            <li key={index} className="flex items-center gap-4">
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
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 bg-[#F4F8F8] p-6 lg:p-8 max-h-[270px] lg:max-w-[350px]">
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
        </div>
      </div>
      <div className="flex flex-col gap-12 lg:max-w-[850px]">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[#172629] text-3xl lg:text-5xl leading-[100%]"
          >
            Архівна обробка документів
          </motion.h2>
          <p className="text-[#0C1E21]">
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
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8">
            <span className="text-[#0C1E21] uppercase">Ми пропонуємо</span>
          </div>
          <ul className="list-disc pl-4">
            {whatWeOffer.map(({ process }, index) => (
              <li key={index} className="lg:text-lg text-[rgba(6,39,44,0.60)]">
                {process}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8">
            <span className="text-[#0C1E21] uppercase">Ви отримаєте</span>
          </div>
          <ul className="list-disc pl-4">
            {whatYouGet.map(({ process }, index) => (
              <li key={index} className="lg:text-lg text-[rgba(6,39,44,0.60)]">
                {process}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProcessingDocument;
