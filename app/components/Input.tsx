import React from "react";
type InputType = {
  label?: string;
  type: string;
  id: string;
  value?: string;
  placeholder: string;
  size?: number;
};

const Input = ({ label, type, id, value, placeholder, size }: InputType) => {
  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor='name'>{label}</label>
      <input
        required
        type={type}
        id='name'
        placeholder={placeholder}
        className={`rounded-sm placeholder:p-10 h-[30px] text-black placeholder:text-center outline-none`}
      />
    </div>
  );
};

export default Input;
//
