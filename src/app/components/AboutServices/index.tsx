"use client";

import { motion } from "framer-motion";
import { aboutServicesData } from "@/app/constants/AboutServicesSettings";
import CheckIcon from "@assets/icons/arrow.svg";

const AboutServices = () => {
  return (
    <>
      {aboutServicesData.map(
        (
          { video, title, badge, heading, description, stagesTitle, stages },
          index
        ) => (
          <div
            key={index}
            className={`flex gap-6 flex-col lg:flex-row lg:gap-0 mb-6 lg:mb-0 ${
              (index + 1) % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="relative h-[260px] md:h-[390px] lg:h-[550px] xl:h-[690px] lg:w-[50%]">
              <video
                src={video}
                playsInline
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
              ></video>
              <div className="absolute inset-0 bg-[#0D1E21] opacity-50"></div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute left-8 bottom-8 xl:left-24 xl:bottom-16"
              >
                <span className="text-white text-4xl xl:text-5xl font-[400px]">
                  {title}
                </span>
              </motion.div>
            </div>
            <div className="flex flex-col items-start px-6 lg:w-[50%] lg:px-8 lg:pt-4 xl:px-24 xl:pt-16">
              <div
                className="flex justify-center rounded-sm border
          border-[#E8EDED] bg-[#F4F8F8] backdrop-blur-[15px] py-[6px] px-2 mb-4"
              >
                <span className="text-[#0C1E21] text-sm uppercase">
                  {badge}
                </span>
              </div>
              <h3 className="text-[#172629] text-3xl lg:text-4xl xl:text-5xl leading-[100%] mb-4 lg:mb-4 xl:mb-[32px]">
                {heading}
              </h3>
              <p className="text-[#9A9FA0] text-sm lg:text-lg mb-6 lg:mb-3 xl:mb-8">
                {description}
              </p>
              <div>
                <div className="pb-2 border-b border-b-[#E8EDED] max-h-8 mb-4 xl:mb-6">
                  <span className="text-[#0C1E21] text-sm uppercase">
                    {stagesTitle}
                  </span>
                </div>
                <ul className="flex flex-col gap-3 xl:gap-4">
                  {stages.map((stage, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="rounded-full border border-[#E8EDED] bg-[#F4F8F8] py-1 px-1 text-[#0C1E21]">
                        {" "}
                        <CheckIcon />
                      </div>
                      <span className="text-[#0C1E21]">{stage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default AboutServices;
