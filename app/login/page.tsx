"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import Input from "../components/Input";
import Button from "../components/Button";

export type User = {
  name: string | undefined;
  email: string | undefined;
};

const Login = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user: User;
    if (typeof window.localStorage !== "undefined") {
      user = JSON.parse(localStorage.getItem("userObject") as any);
      if (user.name === name && user.email === email) {
        setTimeout(() => router.push("training"), 2000);
        setName("");
        setEmail("");
      }
    }
  };

  return (
    <main className=' container p-10 justify-between bg-[#170716]  py-10 overflow-hidden flex lg:flex-row flex-col'>
      <div className='flex  flex-col w-full'>
        <p className='text-[#cd00c5] mb-10 font-extrabold'>Login to your Account</p>
      </div>

      <div className='flex flex-col gap-2 w-full lg:w-1/3 min-h-screen'>
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

          <Button
            type
            title='Login'
            alert={() =>
              toast.success("Logged in Successfully", {
                position: "top-center",
                duration: 2000,
              })
            }
            userName={name}
          />
        </form>
        <Toaster />
      </div>
    </main>
  );
};

export default Login;
