"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { categories } from "../../navLinks";
import Button from "@/app/components/Button";
import ProductNav from "@/app/components/ProductNav";

const Shop = () => {
  const pathname = usePathname();
  const teams = [
    { src: "/products/12.jpg", name: "Rossy Red", price: "N5000" },
    { src: "/products/14.jpg", name: "Rossy Gold", price: "N5000" },
    { src: "/products/10.jpg", name: "Rossy Emerald", price: "N5000" },
    { src: "/products/10.jpg", name: "Rossy Emerald", price: "N5000" },
    { src: "/products/11.jpg", name: "Rossy powder", price: "N5000" },
    { src: "/products/6.png", name: "Rossy powder", price: "N5000" },
    { src: "/products/7.png", name: "Beauty Blender", price: "N5000" },
    { src: "/products/14.jpg", name: "Rossy Brush", price: "N5000" },
    { src: "/products/12.jpg", name: "Rossy Carrot", price: "N5000" },
    { src: "/products/12.jpg", name: "Rossy Lipstick", price: "N5000" },
    { src: "/products/10.jpg", name: "Rossy Emerald", price: "N5000" },
    { src: "/products/6.png", name: "Rossy Lipstick", price: "N5000" },
    { src: "/products/14.jpg", name: "Rossy Pink", price: "N5000" },
  ];
  return (
    <section className='container flex flex-col  min-h-screen items-center  py-20 overflow-hidden mx-auto'>
      <h2 className='text-[3rem] py-4'>SHOP TODAY</h2>
      <ProductNav categories={categories} />
      <div className='flex w-full justify-start'>
        <h3 className='text-[2rem] mb-4'>Lipsticks</h3>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        {teams.map((item) => {
          const { src, name, price } = item;
          return (
            <div key={src} className='flex flex-col  justify-between'>
              <img
                src={src}
                alt='Pictures of ladies hairstyles'
                className='object-cover bg-white h-[300px] block max-w-full'
              />
              <div className='flex items-center justify-between px-2'>
                <p className='capitalize'>{name}</p>
                <img src='./products/rating.png' alt='' />
              </div>
              <div className='flex  items-center justify-between gap-4 px-2'>
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
