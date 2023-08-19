"use client";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { categories } from "../navLinks";
import ProductNav from "../components/ProductNav";

type Categories = {
  href: string;
  id: number;
  name: string;
}[];
const Shop = () => {
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

  return (
    <section className='container flex flex-col w-full min-h-screen items-center  py-20 overflow-hidden mx-auto'>
      <h2 className='text-[3rem] py-4'>SHOP TODAY</h2>
      <ProductNav categories={categories} />

      <div className='flex w-full justify-between flex-col'>
        <h3 className='text-[2rem] mb-4'>Featured Products</h3>
        <div className='flex justify-around items-center gap-4'>
          {[...Array(3)].map((image, index) => {
            return (
              <div key={index} className='relative'>
                <div key={image} className='flex flex-col w-full h-[400px] mb-10 overflow-hidden'>
                  <Image
                    src={`${featured[index]}`}
                    width={400}
                    height={100}
                    alt='Pictures of ladies hairstyles'
                    className='object-cover'
                  />
                  <div className='flex  items-center justify-between gap-4'>
                    <p className=''>N5000</p>
                    <Button title='Read More...' type='' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className='text-[2rem] mb-4'>All Categories</h3>
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
              <div className='flex items-center justify-between px-1'>
                <p className='capitalize'>{name}</p>
                <img src='./products/rating.png' alt='' />
              </div>
              <div className='flex  items-center justify-between gap-4 px-1'>
                <p className=''>{price}</p>
                <Button title='Add to Cart' type='' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
