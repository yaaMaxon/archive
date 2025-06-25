"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Link from "next/link";
import { navigatPages } from "@constants/NavigatSettings";
import { mySocialNetworks } from "@/app/constants/ContactsSettings";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/contact-us");
  };
  return (
    <footer>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 py-12 px-6 lg:px-16 xl:px-[120px] bg-[#142528]">
        <span className="text-[32px] text-white">Контакти:</span>
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          {mySocialNetworks.map(({ icon, href, text }, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="rounded-[500px] border border-white/12 bg-white/5 backdrop-blur-[15px] p-3 text-white">
                {icon}
              </div>
              <a
                href={href}
                className={`hover:underline underline-offset-6 text-white ${
                  index === 0 && "pb-1"
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 pt-14 pb-8 px-6 lg:pt-[96px] lg:px-16 xl:px-[120px] bg-[#0D1E21]">
        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold text-white">Петро Гупало</span>
            <p className="text-[#9A9FA0]">
              Архівуйте сьогодні — збережіть цінне для завтрашнього дня!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold text-white">Адреса:</span>
            <p className="text-[#9A9FA0] max-w-[270px]">
              81134, Львівська обл., Пустомитівський р-н, с. Липники, вул.
              Сонячна, 35
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-6">
          <span className="text-white border-b border-white/10 pb-2">
            Про нас:
          </span>
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-2">
              {navigatPages.map(({ page, path }) => (
                <li key={page}>
                  <Link
                    href={path}
                    className={`${
                      pathname === path && "underline text-[#0C1E21]"
                    } lg:text-4 text-[#9A9FA0] hover:underline transition-all duration-300`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              onClick={handleButtonClick}
              className="bg-white border border-[#E8EDED] text-black"
            >
              Замовити дзвінок
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-2 pb-8 px-6 lg:px-16 xl:px-[120px] bg-[#0D1E21] border-t border-t-white/10">
        <span className="text-[#9A9FA0] text-sm">
          © 2023-2025 — arhiv.lviv.ua. Архівні послуги. — Всі права захищені.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
