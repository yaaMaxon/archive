"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import BurgerMenu from "@assets/icons/burgerMenu.svg";
import { MdClose } from "react-icons/md";
import { navigatPages } from "@constants/NavigatSettings";
import MobileMenu from "@components/MobileMenu";
import Button from "@components/Button";
import logo from "/public/favicon.ico";
import Image from "next/image";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);
  const [isHeaderRotated, setIsHeaderRotated] = useState(false);
  const scrollYRef = useRef(0);

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

      if (window.scrollY > 96) {
        if (window.scrollY > scrollYRef.current) {
          setIsHeaderRotated(true);
        } else {
          setIsHeaderRotated(false);
        }
      }

      scrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderStyles = () => {
    const s = [];

    if (isMobileMenuOpen) {
      s.push("bg-white");
    } else if (isScrolled) {
      s.push("bg-white/75");
    } else {
      s.push("bg-transparent");
    }

    if (!isMobileMenuOpen) {
      if (isHeaderRotated) {
        s.push("rotate-x-90");
      } else {
        s.push("rotate-x-0");
      }
    } else {
      s.push("rotate-x-0");
    }

    return s.join(" ");
  };

  return (
    <>
      <header
        className={`sticky left-0 origin-top top-0 py-[16px] lg:py-[24px] px-6 lg:px-16 z-[200] transition-all duration-500 ${getHeaderStyles()}`}
      >
        <nav className="flex justify-between items-cente">
          <Link
            href="/"
            onClick={handleMenuClose}
            className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <Image src={logo} alt="logo" width={30} height={30} />
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
                    className={`
        relative 
        inline-block 
        lg:text-4 xl:text-xl
        transition-all duration-300 

        ${
          pathname === path
            ? `
                text-[#0C1E21] 
                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-full 
                after:h-[1px] 
                after:bg-[#0C1E21] 
                after:transition-all after:duration-300 after:ease-out 
                hover:after:w-0
              `
            : `
                text-[#103E3A] 
                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-0 
                after:h-[1px] 
                after:bg-[#103E3A] 
                after:transition-all after:duration-300 after:ease-in-out 
                hover:after:w-full 
                hover:text-[#0C1E21]
              `
        }
      `}
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
