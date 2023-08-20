"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "../../navLinks";
import Button from "@/app/components/Button";
import HorizontalBar from "@/app/components/HorizontalBar";
import ProductNav from "@/app/components/ProductNav";

const Shop = () => {
  const pathname = usePathname();
  const teams = [
    { src: "/products/1.png", name: "Rossy Lipstick", price: "N5000" },
    { src: "/products/2.png", name: "Rossy Foundation", price: "N5000" },
    { src: "/products/3.png", name: "Rossy Foundation", price: "N5000" },
    { src: "/products/9.png", name: "Rossy powder", price: "N5000" },
    { src: "/products/5.png", name: "Rossy powder", price: "N5000" },
    { src: "/products/6.png", name: "Rossy powder", price: "N5000" },
    { src: "/products/7.png", name: "Beauty Blender", price: "N5000" },
    { src: "/products/8.png", name: "Rossy Brush", price: "N5000" },
    { src: "/products/9.png", name: "Rossy powder", price: "N5000" },
    { src: "/products/6.png", name: "Rossy Lipstick", price: "N5000" },
  ];
  return (
    <section className='container flex flex-col  min-h-screen items-center  py-20 overflow-hidden mx-auto'>
      <h2 className='text-[3rem] py-4'>SHOP TODAY</h2>
      <ProductNav categories={categories} />
      <div className='flex w-full justify-start'>
        <h3 className='text-[2rem] mb-4'>Foundation</h3>
      </div>
      <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3 px-5'>
        {teams.map((item) => {
          const { src, name, price } = item;
          return (
            <div key={src} className='flex flex-col  justify-between'>
              <img
                src={src}
                alt='Pictures of ladies hairstyles'
                className='object-cover bg-gray-200 h-[300px] block w-auto p-1 '
              />
              <div className='flex items-center justify-between px-1'>
                <p className='capitalize'>{name}</p>
                <img src='./products/rating.png' alt='' />
              </div>
              <div className='flex  items-center justify-between gap-4 py-1'>
                <p className=''>{price}</p>
                <Button title='Add to Cart' type />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
