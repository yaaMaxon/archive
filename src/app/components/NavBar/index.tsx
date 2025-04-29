"use client";

// import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
// import StarLogo from "@assets/icons/starLogo.svg";
// import PositivusLogo from "@assets/icons/positivusLogo.svg";
import BurgerMenu from "@assets/icons/burgerMenu.svg";
import { MdClose } from "react-icons/md";
import { navigatPages } from "@constants/NavigatSettings";
import MobileMenu from "@components/MobileMenu";
import Button from "@components/Button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/contact-us");
  };

  const handleMenuToggle = () => {
    setMobileMenuState((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMobileMenuState(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderStyles = () => {
    if (isMobileMenuOpen) {
      return "bg-white";
    }

    if (isScrolled) {
      return "bg-white/75";
    }

    if (!isScrolled) {
      return "bg-transparent";
    }
  };

  return (
    <>
      <header
        className={`sticky left-0 top-0 py-[16px] lg:py-[24px] px-6 lg:px-16 z-[200] transition-colors duration-300 ${getHeaderStyles()}`}
      >
        <nav className="flex justify-between items-cente">
          <Link
            href="/"
            onClick={handleMenuClose}
            className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            {/* <StarLogo />
            <PositivusLogo /> */}
            <span className="text-lg font-bold">Петро Гупало</span>
          </Link>
          <button
            type="button"
            onClick={handleMenuToggle}
            className="lg:hidden cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <MdClose className="w-[26px] h-[29px]" />
            ) : (
              <BurgerMenu />
            )}
          </button>
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center lg:gap-8 xl:gap-10">
              {navigatPages.map(({ page, path }) => (
                <li key={page}>
                  <Link
                    href={path}
                    className={`${
                      pathname === path && "underline text-[#0C1E21]"
                    } lg:text-4 text-[#103E3A] xl:text-xl hover:underline transition-all duration-300`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={handleButtonClick} className="text-white">
              Замовити дзвінок
            </Button>
          </div>
        </nav>
      </header>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        navBarPages={navigatPages}
        handleMenuToggle={handleMenuToggle}
      />
    </>
  );
};

export default NavBar;
