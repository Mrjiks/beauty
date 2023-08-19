import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HorizontalBar from "@/app/components/HorizontalBar";
// import { CategoryType } from "../../products";

const ProductNav = ({ categories }: any) => {
  const pathname = usePathname();
  return (
    <>
      <nav className='flex gap-4 items-center justify-center mb-2'>
        {categories.map((link: any) => {
          const isActive = pathname === link.href;

          return (
            <Link
              className={
                isActive
                  ? "text-[purple] transition-all  hover:text-[#820e7d]"
                  : "text-white transition-all hover:text-[#820e7d]"
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

export default ProductNav;
