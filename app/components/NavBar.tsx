"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { links } from "../navLinks";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className='container z-10 mx-auto bg-[#160716]  flex items-center justify-between px-10'>
      <Link href='/'>
        <div className='shadow-sm'>HouseofRossy</div>
      </Link>
      <div className='hidden lg:flex justify-between items-center'>
        <nav className='flex    justify-between items-center  h-[80px] gap-4 '>
          <ul className='flex justify-around  gap-4'>
            <>
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
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
            </>
          </ul>
        </nav>
      </div>
      <div className='lg:hidden'>
        <FaBars />
      </div>
    </div>
  );
};

export default NavBar;
