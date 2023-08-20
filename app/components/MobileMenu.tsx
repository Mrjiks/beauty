"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { links } from "../navLinks";

type MenuType = {
  onClick: () => void;
  show: boolean;
};

const MobileMenu = ({ onClick, show }: MenuType) => {
  const pathname = usePathname();
  return (
    <div className='flex flex-col justify-center  absolute top-4   bg-black w-full ml-0 lg:hidden  z-20'>
      <nav className='flex justify-between  lg:hidden  items-center bg-black  w-full'>
        <ul className='flex  gap-4 bg-black h-[100px] items-center w-full'>
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                onClick={onClick}
                className={
                  isActive
                    ? "text-[purple] transition-all  hover:text-[#820e7d] "
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
