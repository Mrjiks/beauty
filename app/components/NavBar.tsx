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
    <div className='container z-10 mx-auto bg-[#160716]  flex items-center justify-between  h-[100px] sticky inset-0'>
      <Link href='/'>
        <div className='shadow-sm'>BeautyShop</div>
      </Link>
      <div className='hidden md:flex justify-between items-center'>
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
      <div className='md:hidden cursor-pointer' onClick={() => setShow(!show)}>
        {show ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-8 h-8'>
            <path
              fillRule='evenodd'
              d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
              clipRule='evenodd'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-8 h-8'>
            <path
              fillRule='evenodd'
              d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </div>
      {show && (
        <div className=' absolute top-[6.2rem] flex items-center'>
          <MobileMenu onClick={() => setShow(!show)} show />
        </div>
      )}
    </div>
  );
};

export default NavBar;
