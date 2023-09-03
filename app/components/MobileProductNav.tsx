import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HorizontalBar from "@/app/components/HorizontalBar";

const MobileProductNav = ({ categories, onClick }: any) => {
  const pathname = usePathname();
  return (
    <>
      <nav className='flex gap-5  mx-auto   mb-2  flex-col absolute bg-black right-20 top-0.6 h-[400px] p-4 z-50  '>
        {categories.map((link: any) => {
          const isActive = pathname === link.href;

          return (
            <Link
              onClick={onClick}
              className={
                isActive
                  ? "text-[purple] transition-all   hover:text-[#820e7d]"
                  : "text-white transition-all  hover:text-[#820e7d]"
              }
              href={link.href}
              key={link.id}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      <HorizontalBar />
    </>
  );
};

export default MobileProductNav;
