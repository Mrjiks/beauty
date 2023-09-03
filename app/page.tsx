"use client";
import Image from "next/image";
import Featured from "./components/Featured";
import Button from "./components/Button";
import Cta from "./components/Cta";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // const pb = new PocketBase("http://127.0.0.1:8090");
  // pb.autoCancellation(false);
  // const [product, setProduct] = useState(null);

  // const getProducts = async () => {
  //   const data = await pb.collection("products").getFullList({
  //     sort: "-created",
  //   });
  //   setProduct(data);
  //   return data;
  // };

  // useEffect(() => {
  //   const data = getProducts();
  //   console.log(product);
  // }, []);
  return (
    <section
      className='container mx-auto flex flex-col  min-h-screen
    '>
      <main className='flex flex-col justify-between mt-20  w-full  items-center md:flex-row '>
        <div className='flex  items-center md:items-start md:text-left  flex-col text-left pl-4'>
          <h1 className='text-2xl tracking-wide leading-8 mb-3'>
            <span className='text-[#CD00C5]'> Discover </span>your
            <span className='text-[#CD00C5]'>perfect look</span>
          </h1>
          <p>
            Unleash Your Beauty with our <br /> Stunning Makeup Collection
          </p>
          <Link href={"shop"}>
            <Button type title='Shop Now' />
          </Link>
        </div>
        <div className='ml-4'>
          <Image
            src='/hero_images.png'
            width={500}
            height={500}
            alt='Pictures of ladies hairstyles'
          />
        </div>
      </main>
      <Featured />
      <Cta />
      <div className='grid grid-cols-1  overflow-hidden w h-[800px w-auto] gap-8 grid-rows-2 relative md:hidden px-10 py-10 bg-black'>
        <motion.img
          className=' absolute top-10 right-2'
          animate={{ rotate: -45 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src='/hero_img_1.png'
          width={100}
          height={100}
          alt='Pictures of ladies hairstyles'
        />
        <motion.img
          className='absolute bottom-10 top-100 left-100 h-[100px] w-[100px]'
          animate={{ rotate: 45 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src='/hero_img_2.png'
          width={100}
          height={100}
          alt='Pictures of ladies hairstyles'
        />
        <motion.img
          className=' absolute bottom-10 left-60 h-[100px] w-[100px]'
          animate={{ rotate: -45 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src='/hero_img_3.png'
          width={100}
          height={100}
          alt='Pictures of ladies hairstyles'
        />
        <motion.img
          className=' '
          animate={{ rotate: 45 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src='/hero_img_4.png'
          width={100}
          height={100}
          alt='Pictures of ladies hairstyles'
        />
      </div>
    </section>
  );
}
