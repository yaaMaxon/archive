"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Image from "next/image";
import banner from "@assets/img/banner.webp";

const Banner = () => {
  const router = useRouter();
  const handleContactUs = () => {
    router.push("/contact-us");
  };

  const handleRouteServices = () => {
    router.push("/services");
  };

  return (
    <div className="relative">
      <div className="relative w-full bg-cover">
        <Image
          className="h-[550px] lg:h-[650px] object-cover"
          src={banner}
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
            Ваш архів — ваша впевненість
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
            Архівування без турбот,
          </span>
          <span className="text-white text-4xl lg:text-6xl">
            {" "}
            з нами простіше
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
          Ми допоможемо навести порядок у документах. Залиште заявку на дзвінок
          — і дізнайтесь більше.
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
          <Button className="bg-white" onClick={handleContactUs}>
            Замовити дзвінок
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

export default Banner;
