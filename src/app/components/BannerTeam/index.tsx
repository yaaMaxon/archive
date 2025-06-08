"use client";

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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <div>
          <span
            className="rounded-md border
          border-white/10 bg-white/5 backdrop-blur-[15px] py-[6px] px-2 max-w-[350px] text-white text-sm uppercase"
          >
            Архів — фундамент безпеки
          </span>
        </div>
        <h2 className="flex flex-col mb-4 text-center max-w-[700px]">
          <span className="text-[#9A9FA0] text-4xl lg:text-6xl">
            Довірте збереження
          </span>
          <span className="text-white text-4xl lg:text-6xl">
            {" "}
            професіоналам
          </span>
        </h2>
        <p className="text-[#9A9FA0] text-center text-[20px] leading-[160%] lg:max-w-[600px]">
          Архівні послуги — це не просто зберігання, це відповідальність. Наша
          команда — ваш надійний тил у документообігу.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white" onClick={handleRoutePrice}>
            Кошторис
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

export default BannerTeam;
