"use client";

import React from "react";
import Image from "next/image";
import { mySocialNetworks } from "@/app/constants/ContactsSettings";
import { whatWeOffer } from "@/app/constants/ProcessingDocumentSettings";
import { whatYouGet } from "@/app/constants/ProcessingDocumentSettings";
import avatar from "@assets/img/avatar.jpg";

const ProcessingDocument = () => {
  return (
    <div
      id="processingDocument"
      className="flex flex-col gap-8 lg:gap-4 lg:flex-row lg:justify-between py-14 px-6 lg:px-16 lg:py-24 lg:relative"
    >
      <div className="flex self-start flex-col gap-5 lg:gap-8 lg:sticky lg:top-24">
        <div className="pb-2 border-b border-b-[#E8EDED] lg:max-w-[250px] max-h-8">
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
                className={`hover:underline underline-offset-6 text-[#0C1E21] ${
                  index === 0 && "pb-1"
                }`}
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
            <Image
              src={avatar}
              alt="керівник"
              className="rounded-[50%] w-[50px] h-[50px]"
            />
            <div>
              <h4 className="text-[#0C1E21] text-lg">Гупало Петро</h4>
              <span className="text-sm text-[rgba(6,39,44,0.60)]">
                Керівник
              </span>
            </div>
          </div>
          <p className="text-sm text-[#0C1E21]">
            ФОП Гупало Петро Євгенович надає повний комплекс архівних послуг у
            Львівській області.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 lg:max-w-[850px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#172629] text-3xl lg:text-5xl leading-[100%]">
            Архівна обробка документів
          </h2>
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
