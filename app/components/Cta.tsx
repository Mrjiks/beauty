"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import Button from "./Button";
import Input from "./Input";

const Cta = () => {
  // const [state, setState] = useState<string>({ name: "", email: "", phone: "" } as any);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(query);
  //   setQuery("");
  // };
  const router = useRouter();

  const [name, setName] = useState<string>("Name");
  const [email, setEmail] = useState<string>("Email");
  const [phone, setPhone] = useState<string>("Phone number");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userObject = { name: name, email: email, phone: phone };
    window.localStorage.setItem("userObject", JSON.stringify(userObject));
    setTimeout(() => router.push("training"), 2000);
    setName("");
    setEmail("");
    setPhone("");
  };

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
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <Input
            type='text'
            label='Name'
            id='name'
            value={name}
            placeholder='Enter your name'
            onChange={onNameChange}
          />
          <Input
            type='email'
            label='Email'
            id='email'
            value={email}
            placeholder='Enter your email'
            onChange={onEmailChange}
          />
          <Input
            type='number'
            label='Phone'
            id='phone'
            value={phone}
            placeholder='Your phone number'
            onChange={onPhoneChange}
          />

          <Button
            type
            title='Register'
            alert={() =>
              toast.success("Registered Successfully", {
                position: "top-center",
                duration: 2000,
              })
            }
          />
        </form>
        <Toaster />
      </div>
    </main>
  );
};

export default Cta;
