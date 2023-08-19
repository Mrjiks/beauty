import React from "react";
import Button from "./Button";
import Input from "./Input";

const Cta = () => {
  return (
    <main className=' container p-10 justify-between bg-[#170716]  py-10 overflow-hidden flex lg:flex-row flex-col'>
      <div className=' flex  flex-col  justify-between '>
        <div className='flex  flex-col w-full'>
          <h3 className='text-[2rem] '>Become a World class Stylist Today!</h3>
          <p className='text-[#cd00c5] mb-10 font-extrabold'>Register Now</p>
          <h3>Get 30% Off</h3>
        </div>
        <div className='flex   gap-2 w-full lg:flex-row'>
          <div className='flex flex-col'>
            <small className='text-[#cd00c5]'>05</small>
            <p>Days</p>
          </div>
          <div className='flex flex-col'>
            <small className='text-[#cd00c5]'>09</small>
            <p>Hours</p>
          </div>
          <div className='flex flex-col'>
            <small className='text-[#cd00c5]'>38</small>
            <p>Mins</p>
          </div>
          <div className='flex flex-col'>
            <small className='text-[#cd00c5]'>60</small>
            <p>Secs</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full lg:w-1/3 '>
        <p className='font-bold capitalize mb-3'>Create an account</p>
        <form className='flex flex-col gap-2'>
          <Input type='text' label='Name' id='name' value='name' placeholder='Enter your name' />
          <Input
            type='email'
            label='Email'
            id='email'
            value='email'
            placeholder='Enter your email'
          />
          <Input
            type='number'
            label='Phone'
            id='phone'
            value='phone'
            placeholder='Your phone number'
          />

          <Button type='primary' title='Register' />
        </form>
      </div>
    </main>
  );
};

export default Cta;
