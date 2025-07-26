"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Image from "next/image";
import bannerTeam from "@assets/img/bannerTeam.webp";

const BannerTeam = () => {
  const router = useRouter();
  const handleRoutePrice = () => {
    router.push("/price");
  };

  const handleRouteServices = () => {
    router.push("/services");
  };
  return (
    <div className="relative">
      <div className="relative w-full bg-cover">
        <Image
          className="h-[550px] object-cover lg:h-[750px]"
          src={bannerTeam}
          alt="cover"
        />
        <div className="absolute inset-0 bg-[#0D1E21] opacity-60"></div>
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
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center"
      >
        <motion.div
          variants={{
            hidden: { y: -50, opacity: 0 },
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
        >
          <span
            className="rounded-md border
          border-white/10 bg-white/5 backdrop-blur-[15px] py-[6px] px-2 max-w-[350px] text-white text-sm uppercase"
          >
            Архів — фундамент безпеки
          </span>
        </motion.div>
        <motion.h2
          variants={{
            hidden: { y: 50, opacity: 0, scale: 0.9 },
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
          className="flex flex-col mb-4 text-center max-w-[700px]"
        >
          <span className="text-[#9A9FA0] text-4xl lg:text-6xl">
            Довірте збереження
          </span>
          <span className="text-white text-4xl lg:text-6xl">
            {" "}
            професіоналам
          </span>
        </motion.h2>
        <motion.p
          variants={{
            hidden: { y: 50, opacity: 0, scale: 0.9 },
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
          className="text-[#9A9FA0] text-center text-[20px] leading-[160%] lg:max-w-[600px]"
        >
          Архівні послуги — це не просто зберігання, це відповідальність. Наша
          команда — ваш надійний тил у документообігу.
        </motion.p>
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100, damping: 15 },
            },
          }}
          className="flex justify-center gap-4"
        >
          <Button className="bg-white" onClick={handleRoutePrice}>
            Кошторис
          </Button>
          <Button
            className="border border-white/10 bg-white/5 backdrop-blur-[15px] text-white"
            onClick={handleRouteServices}
          >
            Послуги
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerTeam;
