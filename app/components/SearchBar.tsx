"use client";

import Input from "./Input";

const SearchBar = ({ type, id, value, placeholder, size }: any) => {
  return (
    <form className='  items-center  w-full justify-center gap-2  relative md:mt-30 container'>
      <Input type={type} id={id} value={value} placeholder={placeholder} />
      <button type='submit' className=' right-1  '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-8 h-8 absolute top-0 right-0 mt-4  bg-[#cd00c5] `}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
