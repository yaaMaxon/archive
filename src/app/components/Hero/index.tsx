"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";

const Hero = () => {
  const router = useRouter();
  const handleRouteAboutCompany = () => {
    router.push("/about");
  };
  const handleRouteServices = () => {
    router.push("/services");
  };
  return (
    <div className="lg:flex lg:h-[771px]">
      <div className="flex flex-col items-center lg:items-start bg-[#0D1E21] px-6 lg:px-[96px] py-10">
        <div
          className="flex justify-center rounded-md border
          border-white/10 bg-white/5 backdrop-blur-[15px] py-[6px] px-2 max-w-[200px] mb-4"
        >
          <span className="text-white text-sm uppercase">
            Архівні послуги Львів
          </span>
        </div>
        <h1 className="flex flex-col mb-4 text-center lg:text-start">
          <span className="text-[#9A9FA0] text-4xl lg:text-8xl">
            Архівуй сьогодні,
          </span>
          <span className="text-white text-4xl lg:text-8xl">
            {" "}
            збережи назавжди.
          </span>
        </h1>
        <p className="text-[#9A9FA0] text-lg lg:text-[22px] mb-5 text-center lg:text-start lg:max-w-[600px]">
          Архівування, експертна оцінка, палітурка, знищення та оптимізація
          документообігу — широкий спектр архівних послуг у Львові з гарантією
          безпеки й доступності в будь-який час.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white" onClick={handleRouteServices}>
            Послуги
          </Button>
          <Button
            className="border border-white/10 bg-white/5 backdrop-blur-[15px] text-white"
            onClick={handleRouteAboutCompany}
          >
            Про нас
          </Button>
        </div>
      </div>
      <div className="h-[290px] lg:h-full lg:w-full">
        <video
          src="/media/hero.mp4"
          playsInline
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
