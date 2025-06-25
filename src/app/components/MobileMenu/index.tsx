"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "../Button";

type Prop = {
  navBarPages: NavBarItems[];
  isMobileMenuOpen: boolean;
  handleMenuToggle: () => void;
};

interface NavBarItems {
  page: string;
  path: string;
}

const MobileMenu = ({
  navBarPages,
  isMobileMenuOpen,
  handleMenuToggle,
}: Prop) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/contact-us");
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed w-full flex flex-col justify-between pt-6 pb-3 h-[calc(100vh-50px)] bg-gray z-[150] lg:hidden bg-[#0D1E21]"
        >
          <ul className="flex flex-col gap-6 items-center">
            {navBarPages.map(({ page, path }: NavBarItems) => (
              <motion.li
                key={page}
                onClick={handleMenuToggle}
                className="relative text-white"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link
                  href={path}
                  className={`${
                    pathname === path && "underline"
                  } text-2xl font-medium hover:underline`}
                >
                  {page}
                </Link>
              </motion.li>
            ))}
            <motion.li
              onClick={handleMenuToggle}
              className="mt-4"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button onClick={handleButtonClick} className="bg-white text-lg">
                Замовити дзвінок
              </Button>
            </motion.li>
          </ul>
          <div className="pt-2 pb-8 px-6 lg:px-16 xl:px-[120px] bg-[#0D1E21] border-t border-t-white/10">
            <span className="text-[#9A9FA0] text-sm">
              © 2023-2025 — arhiv.lviv.ua. Архівні послуги. — Всі права
              захищені.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
