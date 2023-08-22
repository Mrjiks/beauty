"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button";
import { categories } from "../navLinks";
import ProductNav from "../components/ProductNav";
import MobileProductNav from "../components/MobileProductNav";
import { FaChevronDown } from "react-icons/fa";

type Categories = {
  href: string;
  id: number;
  name: string;
}[];
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
  { src: "/products/11.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/14.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/12.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/10.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/13.jpg", name: "Rossy Lipstick", price: "N5000" },
];
const featured = ["/products/1.png", "/products/2.png", "/products/3.png", "/products/5.png"];
const Shop = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <section className='container flex flex-col w-full min-h-screen items-center  py-20  mx-auto'>
      <h2 className='text-[3rem] py-4'>SHOP TODAY</h2>
      <ProductNav categories={categories} />

      <div className='flex w-full justify-between flex-col  '>
        <h3 className='text-[2rem] mb-4'>Featured Products</h3>
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3  py-10'>
          {[...Array(3)].map((image, index) => {
            return (
              <div key={index} className='relative'>
                <div key={image} className='flex flex-col w-full h-[400px] mb-10 overflow-hidden'>
                  <div className='aspect-square relative '>
                    <Image
                      src={`${featured[index]}`}
                      fill
                      alt='Pictures of ladies hairstyles'
                      className='object-fit bg-gray-200 h-[300px] block w-auto p-3'
                    />
                  </div>
                  <div className='flex  items-center justify-between gap-4 py-1'>
                    <p className=''>N5000</p>
                    <Button title='Read More' type />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-between items-center relative'>
          <h3 className='text-[2rem] mb-4'>All Categories</h3>{" "}
          <div className='md:hidden ' onClick={() => setShowFilter(!showFilter)}>
            <div className='flex items-center gap-2 cursor-pointer'>
              <span> Filters</span>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      {showFilter && (
        <div className='md:hidden grid-cols-2 grid  gap-3 relative lg:hidden'>
          <MobileProductNav categories={categories} onClick={() => setShowFilter(!showFilter)} />
        </div>
      )}

      <div className='grid grid-cols-4 gap-12 w-full px-4'>
        {teams.map((item) => {
          const { src, name, price } = item;
          return (
            <div key={src} className='col-span-4 md:col-span-2 lg:col-span-1 w-full'>
              <div className='aspect-square relative '>
                <Image
                  fill
                  src={src}
                  alt='Pictures of ladies hairstyles'
                  className='object-fit bg-white '
                />
              </div>
              <div className='flex items-center justify-between px-1'>
                <p className='capitalize'>{name}</p>
                <img src='./products/rating.png' alt='' />
              </div>
              <div className='flex  items-center justify-between gap-4 py-1'>
                <p>{price}</p>
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
