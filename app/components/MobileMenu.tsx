"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { links } from "../navLinks";
import useStore from "../store";
import CartIcon from "./CartIcon";

type MenuType = {
  onClick: () => void;
  show: boolean;
};

const MobileMenu = ({ onClick, show }: MenuType) => {
  const pathname = usePathname();
  const cart = useStore((state) => state.cart);

  return (
    <div className='flex flex-col   sticky  md:hidden lg:hidden w-full z-[900]'>
      <nav className='flex justify-center  lg:hidden   h-[100px] bg-black '>
        <ul className='flex  gap-4  items-center justify-center'>
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                onClick={onClick}
                className={
                  isActive
                    ? "text-[purple] transition-all  hover:text-[#820e7d]  "
                    : "text-white transition-all hover:text-[#820e7d]"
                }
                href={link.href}
                key={link.id}>
                {link.name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
