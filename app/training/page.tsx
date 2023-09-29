"use client";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Register from "../components/Register";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Training = () => {
  type UserType = {
    name?: string | undefined;
    email?: string;
    phone?: string;
  };
  const [user, setUser] = useState<UserType>();
  const [userAuth, setUserAuth] = useState<UserType>();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userObject") as any);
    setUser(user);
  }, []);

  const teams = [
    { src: "/team/1.jpg", name: "Rossy Dreadlocks", price: "Learn More" },
    { src: "/team/2.jpg", name: "Rossy Weevy", price: "Learn More" },
    { src: "/team/3.jpg", name: "Rossy 90s", price: "Learn More" },
    { src: "/team/4.jpg", name: "Rossy Naija Weevy", price: "Learn More" },
  ];
  return (
    <section className='container flex flex-col w-full min-h-screen items-center  py-20 overflow-hidden mx-auto'>
      <div className='flex items-center flex-col relative w-full mb-10'>
        <div className='flex items-center flex-col relative w-full space-y-4'>
          <h2 className='md:text-[3rem] py-4 text-3xl text-justify'>Learn From Us Today</h2>
          <p>
            Thanks <span className='bg-red-500 capitalize px-3 rounded-sm'>{user?.name}</span> for
            joining us .Embrace your beauty journey
          </p>
          <Button title='Enroll' type />
        </div>
        <div className='flex justify-between gap-4 w-full'>
          <div>
            <Image
              src={"/training_img_1.png"}
              width={200}
              height={200}
              alt='Pictures of ladies hairstyles'
              className='object-cover'
            />
          </div>
          <div>
            <Image
              src={"/training_img_2.png"}
              width={200}
              height={200}
              alt='Pictures of ladies hairstyles'
              className='object-cover '
            />
          </div>
        </div>
      </div>
      <div className=' flex items-center justify-center py-10'>
        <video autoPlay loop className='w-auto h-[300px] object-fit rounded-lg'>
          <source src='/makeup.mp4' />
        </video>
      </div>

      <div className='flex w-full justify-start'>
        <h3 className='text-[2rem] px-3 py-3'>Featured Styles</h3>
      </div>
      <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3  py-10 px-3'>
        {teams.map((item) => {
          const { src, name, price } = item;
          return (
            <div key={src} className='flex flex-col  justify-between'>
              <Image
                src={src}
                width={400}
                height={300}
                alt='Pictures of ladies hairstyles'
                className='object-cover bg-white'
              />
              <div className='flex items-center justify-between px-1'>
                <p className='capitalize'>{name}</p>
                {/* <img src='./products/rating.png' alt='' /> */}
              </div>
              <div className='flex  items-center justify-between gap-4 px-1'>
                <p className='cursor-pointer'>{price}</p>
                <Button title='Book a Date' type />
              </div>
            </div>
          );
        })}
      </div>
      <Register userName={user?.name} />
    </section>
  );
};

export default Training;
