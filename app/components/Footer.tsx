import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' mx-auto flex  md:justify-between flex-col bg-white text-black   h-auto overflow-hidden '>
      <div className='hidden md:flex justify-between px-10 py-4'>
        <div>
          <h1 className='text-purple-900'>BeautyShop</h1>
        </div>
        <div className='flex gap-4 justify-between flex-col md:flex-row'>
          <div className='flex flex-col gap-4  '>
            <h2>Company</h2>
            <h3 className='font-thin text-sm'>
              <Link href={"about"}>About</Link>
            </h3>
            <h3 className='font-thin text-sm'>Contact</h3>
            <h3 className='font-thin text-sm'>FAQs</h3>
            <h3 className='font-thin text-sm'>Careers</h3>
            <h3 className='font-thin text-sm'>Partners</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <h2> Resources</h2>
            <h3 className='font-thin text-sm'>Blog</h3>
            <h3 className='font-thin text-sm'>Help Center</h3>
            <h3 className='font-thin text-sm'>Support</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-thin text-sm'>Social</h2>
            <h3 className='font-thin text-sm'>Twitter</h3>
            <h3 className='font-thin text-sm'>LinkedIn</h3>
            <h3 className='font-thin text-sm'>Facebook</h3>
            <h3 className='font-thin text-sm'>Instagram</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-thin text-sm'>Legal</h2>
            <h3 className='font-thin text-sm'>Terms</h3>
            <h3 className='font-thin text-sm'>Privacy Policy</h3>
            <h3 className='font-thin text-sm'>Cookies</h3>
          </div>
        </div>
      </div>
      <div className='flex justify-between  bg-black text-white h-10 px-2 items-center'>
        <p>Copy Right</p>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            <div>
              <FaFacebook className='cursor-pointer' />
            </div>
            <div>
              <FaInstagram className='cursor-pointer' />
            </div>
            <div>
              <FaWhatsapp className='cursor-pointer' />
            </div>
            <div>
              <FaLinkedin className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
