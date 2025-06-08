"use client";

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
          className="h-[550px] lg:h-[750px] object-cover"
          src={banner}
          alt="cover"
        />
        <div className="absolute inset-0 bg-[#0D1E21] opacity-60"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <div>
          <span
            className="rounded-md border
          border-white/10 bg-white/5 backdrop-blur-[15px] py-[6px] px-2 max-w-[350px] text-white text-sm uppercase"
          >
            Ваш архів — ваша впевненість
          </span>
        </div>
        <h2 className="flex flex-col mb-4 text-center max-w-[700px]">
          <span className="text-[#9A9FA0] text-4xl lg:text-6xl">
            Архівування без турбот,
          </span>
          <span className="text-white text-4xl lg:text-6xl">
            {" "}
            з нами простіше
          </span>
        </h2>
        <p className="text-[#9A9FA0] text-center text-[20px] leading-[160%] lg:max-w-[600px]">
          Ми допоможемо навести порядок у документах. Залиште заявку на дзвінок
          — і дізнайтесь більше.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white" onClick={handleContactUs}>
            Замовити дзвінок
          </Button>
          <Button
            className="border border-white/10 bg-white/5 backdrop-blur-[15px] text-white"
            onClick={handleRouteServices}
          >
            Послуги
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
