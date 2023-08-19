import React from "react";

const Button = ({ type, title }) => {
  return (
    <div>
      <button className={`${type && "bg-[#cd00c5] w-[100px] h-[30px]  rounded-sm my-5"}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
