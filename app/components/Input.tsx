import React from "react";
export type InputType = {
  label?: string;
  type?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  size?: number;
  query?: string;
  disabled?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const Input = ({ label, type, value, placeholder, size, onChange }: InputType) => {
  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor='name'>{label}</label>
      <input
        required
        value={value}
        onChange={onChange}
        type={type}
        id='name'
        placeholder={placeholder}
        className={`rounded-sm placeholder:p-10 h-[30px] text-black placeholder:text-center outline-none `}
      />
    </div>
  );
};

export default Input;
//
