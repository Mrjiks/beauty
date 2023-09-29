"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button";
import { categories } from "../navLinks";
import ProductNav from "../components/ProductNav";
import MobileProductNav from "../components/MobileProductNav";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

const teams = [
  { src: "/products/1.png", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/2.png", name: "Rossy Foundation", price: "N5000" },
  { src: "/products/3.png", name: "Rossy Foundation", price: "N5000" },

  { src: "/products/5.png", name: "Rossy powder", price: "N5000" },
  { src: "/products/6.png", name: "Rossy powder", price: "N5000" },
  { src: "/products/7.png", name: "Beauty Blender", price: "N5000" },
  { src: "/products/8.png", name: "Rossy Brush", price: "N5000" },
  { src: "/products/9.png", name: "Rossy powder", price: "N5000" },

  { src: "/products/11.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/14.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/12.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/10.jpg", name: "Rossy Lipstick", price: "N5000" },
  { src: "/products/13.jpg", name: "Rossy Lipstick", price: "N5000" },
];
const featured = ["/products/1.png", "/products/2.png", "/products/3.png", "/products/5.png"];
const Shop = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [query, setQuery] = useState<string>("Search products");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
  };
  return (
    <section className='container flex flex-col w-full min-h-screen items-center    px-4'>
      <SearchBar
        type='search'
        id='name'
        value='name'
        size={1 / 2}
        placeholder='Search Beauty Store'
        onSubmit={handleSubmit}
        onChange={onChange}
        query={query}
      />
      <h2 className='md:text-[3rem] py-4 text-center text-[1.5rem] capitalize'>
        Shop with us today
      </h2>
      <ProductNav categories={categories} />
      <p className='font-bold'>
        Searched word : <span className='text-red-500'>{query}</span>
      </p>

      <div className='flex w-full justify-between flex-col  '>
        <h3 className='md:text-[2rem] mb-4 text-[1.5rem] text-justify '>Featured Products</h3>
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
        <div className='flex justify-between items-center relative px-6'>
          <h3 className='text-[2rem] mb-4 hover:text-purple-500'>
            <Link href={"shop"}>
              All <span className='hidden md:inline-flex'>Products</span>
            </Link>
          </h3>
          <div className='md:hidden ' onClick={() => setShowFilter(!showFilter)}>
            <div className='flex items-center gap-2 cursor-pointer hover:text-[#820e7d] mb-4'>
              <span className={`text-2xl ${showFilter && "text-[#820e7d]"}`}> Categories</span>
              <AnimatePresence>
                <motion.span>
                  {showFilter ? (
                    <motion.svg
                      key='arrow'
                      initial={{ y: -3, opacity: 1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -3, opacity: 0 }}
                      transition={{ ease: "linear", duration: 0.2 }}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className=' h-8 text-[#820e7d] hover:text-[#820e7d] w-8 '>
                      <path
                        fillRule='evenodd'
                        d='M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z'
                        clipRule='evenodd'
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key='arrow-2'
                      initial={{ y: -3, opacity: 1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -3, opacity: 0 }}
                      transition={{ ease: "linear", duration: 0.2 }}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-8 h-8 hover:text-[#820e7d]'>
                      <path
                        fillRule='evenodd'
                        d='M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z'
                        clipRule='evenodd'
                      />
                    </motion.svg>
                  )}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showFilter && (
          <motion.div
            key='nav'
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ ease: "linear", duration: 0.4 }}
            className=' grid-cols-2 grid  gap-3 relative z-30 md:hidden lg:hidden '>
            <MobileProductNav categories={categories} onClick={() => setShowFilter(!showFilter)} />
          </motion.div>
        )}
      </AnimatePresence>

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
                  className='object-fit bg-gray-200 '
                />
              </div>
              <div className='flex items-center justify-between px-1'>
                <p className='capitalize py-4 font-semibold'>{name}</p>
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
