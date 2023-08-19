import React from "react";

const Input = ({ label, type, id, value, placeholder }) => {
  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor='name'>{label}</label>
      <input
        required
        type={type}
        name={label}
        id='name'
        placeholder={placeholder}
        className='rounded-sm placeholder:p-4 h-[30px] text-black'
      />
    </div>
  );
};

export default Input;
