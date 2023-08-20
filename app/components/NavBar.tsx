"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "../navLinks";
import { FaBars, FaCross } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  return (
    <div className='container z-10 mx-auto bg-[#160716]  flex items-center justify-between px-10 h-[100px] sticky inset-0'>
      <Link href='/'>
        <div className='shadow-sm'>BeautyShop</div>
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
      <div className='lg:hidden cursor-pointer' onClick={() => setShow(!show)}>
        {show ? <FaX /> : <FaBars />}
      </div>
      {show && (
        <div className=' absolute top-20  flex justify-center '>
          <MobileMenu onClick={() => setShow(!show)} show />
        </div>
      )}
    </div>
  );
};

export default NavBar;
