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
              className="flex flex-col items-start px-6 lg:w-[50%] lg:px-8 lg:pt-4 xl:px-24 xl:pt-16"
            >
              <motion.div
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
                className="flex justify-center rounded-sm border
          border-[#E8EDED] bg-[#F4F8F8] backdrop-blur-[15px] py-[6px] px-2 mb-4"
              >
                <span className="text-[#0C1E21] text-sm uppercase">
                  {badge}
                </span>
              </motion.div>
              <motion.h3
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
                className="text-[#172629] text-3xl lg:text-4xl xl:text-5xl leading-[100%] mb-4 lg:mb-4 xl:mb-[32px]"
              >
                {heading}
              </motion.h3>
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
                className="text-[#9A9FA0] text-sm lg:text-lg mb-6 lg:mb-3 xl:mb-8"
              >
                {description}
              </motion.p>
              <div>
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
                  className="pb-2 border-b border-b-[#E8EDED] max-h-8 mb-4 xl:mb-6"
                >
                  <span className="text-[#0C1E21] text-sm uppercase">
                    {stagesTitle}
                  </span>
                </motion.div>
                <ul className="flex flex-col gap-3 xl:gap-4">
                  {stages.map((stage, index) => (
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
                      className="flex items-center gap-4"
                    >
                      <div className="rounded-full border border-[#E8EDED] bg-[#F4F8F8] py-1 px-1 text-[#0C1E21]">
                        {" "}
                        <CheckIcon />
                      </div>
                      <span className="text-[#0C1E21]">{stage}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )
      )}
    </>
  );
};

export default AboutServices;
