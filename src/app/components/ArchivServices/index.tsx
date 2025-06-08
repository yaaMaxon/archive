"use client";

import Image from "next/image";
import { archivServicesList } from "@/app/constants/ArchivServicesSettings";

const ArchivServices = () => {
  return (
    <div className="flex flex-col gap-6 px-6 lg:px-16 mt-[56px] lg:mt-[96px] pb-14 lg:pb-24 lg:gap-32 lg:flex-row lg:justify-center lg:relative">
      <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[314px] max-h-8 lg:sticky lg:top-24">
        <span className="text-[#0C1E21] uppercase">Послуги</span>
      </div>
      <div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-16">
          {archivServicesList.map(
            ({ image, title, price, description, path }, index) => (
              <li key={index}>
                <div className="relative mb-4">
                  <Image
                    src={image}
                    alt="archiv-picture"
                    className="w-[100%] h-[50%] lg:h-[240px] lg:w-[580px] xl:h-[280px] rounded-lg"
                  />
                  <span className="text-white texl-xl py-2 px-3 z-1 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md absolute top-4 left-4 lg:top-6 lg:left-6">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-0 bg-[#0D1E21] opacity-40 rounded-lg"></div>
                </div>
                <div className="pb-2 border-b border-b-[#E8EDED] lg:min-w-[250px] max-h-8">
                  <span className="text-sm lg:text-base text-[#050d0e] uppercase">
                    {price}
                  </span>
                </div>
                <h3 className="text-2xl text-[#0C1E21] mt-4">{title}</h3>
                <p className="lg:text-lg text-[rgba(6,39,44,0.60)] mt-2 max-w-[570px] mb-2">
                  {description}
                </p>
                <a
                  href={path}
                  className="text-sm lg:text-base text-[#0C1E21] underline cursor-pointer"
                >
                  Читати більше
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ArchivServices;
