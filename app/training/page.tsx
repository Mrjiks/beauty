import Image from "next/image";
import React from "react";
import Button from "../components/Button";

const Training = () => {
  const teams = [
    { src: "/team/1.jpg", name: "Rossy Dreadlocks", price: "Learn More" },
    { src: "/team/2.jpg", name: "Rossy Weevy", price: "Learn More" },
    { src: "/team/3.jpg", name: "Rossy 90s", price: "Learn More" },
    { src: "/team/4.jpg", name: "Rossy Naija Weevy", price: "Learn More" },
  ];
  return (
    <section className='container flex flex-col mx-auto min-h-screen items-center  py-20 overflow-hidden'>
      <h2 className='text-[3rem] py-4'>Learn From Us Today</h2>

      <div className='flex w-full justify-start'>
        <h3 className='text-[2rem]'>Featured Styles</h3>
      </div>
      <div className='grid grid-cols-3 gap-3'>
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
                <Button title='Book a Date' type='' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Training;
