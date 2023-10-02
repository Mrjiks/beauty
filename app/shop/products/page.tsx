"use client";
import Button from "@/app/components/Button";
import SearchBar from "@/app/components/SearchBar";

import useStore, { StoreState } from "@/app/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList: React.FC<StoreState> = () => {
  const products = useStore((state) => state.products);
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);

  const featuredProduct = products.filter((product) => product.featured === true);

  return (
    <div className='container '>
      <h2 className='font-bold text-2xl py-10'>Featured Products</h2>

      <div className='grid grid-cols-4 gap-12 w-full px-4'>
        {featuredProduct?.map((item) => {
          return (
            <div key={item.src} className='col-span-4 md:col-span-2 lg:col-span-1 w-full'>
              <div className='aspect-square relative '>
                <Image
                  fill
                  src={item.src}
                  alt='Pictures of ladies hairstyles'
                  className='object-fit bg-gray-200 '
                />
              </div>
              <div className='flex  justify-between px-1 flex-col '>
                <h2 className='capitalize py-4 font-semibold text-purple-600'>{item.name}</h2>
                <p>{item?.description}</p>
              </div>
              <div className='flex  items-center justify-between gap-4 py-1'>
                <p>${item.price}</p>
                <Button title='Add to Cart' type add={() => addToCart(item)} />
              </div>
            </div>
          );
        })}
      </div>
      <div className=' py-2 items-center flex justify-center'>
        <h3 className='font-bold text-2xl'>Shop With Us Today</h3>
      </div>
      <SearchBar />
      <div className='flex justify-between items-center py-2'>
        <p className='py-3'>Number of items in the cart:</p>

        {cart.length > 0 && (
          <Link href={"cart"} className='bg-purple-600 rounded-lg p-2'>
            Go Checkout
          </Link>
        )}
      </div>
      <div className='grid grid-cols-4 gap-12 w-full px-4'>
        {products?.map((item) => {
          return (
            <div key={item.src} className='col-span-4 md:col-span-2 lg:col-span-1 w-full'>
              <div className='aspect-square relative '>
                <Image
                  fill
                  src={item.src}
                  alt='Pictures of ladies hairstyles'
                  className='object-fit bg-gray-200 '
                />
              </div>
              <div className='flex  justify-between px-1 flex-col '>
                <h2 className='capitalize py-4 font-semibold text-purple-600'>{item.name}</h2>
                <p>{item?.description}</p>
              </div>
              <div className='flex  items-center justify-between gap-4 py-1'>
                <p>${item.price}</p>
                <Button title='Add to Cart' type add={() => addToCart(item)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
