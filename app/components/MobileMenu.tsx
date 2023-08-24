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
    <div className='flex flex-col justify-center  sticky  container md:hidden lg:hidden items-center top-10 mx-auto'>
      <nav className='flex justify-between  lg:hidden  items-center  h-[100px] bg-black px-20 '>
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
