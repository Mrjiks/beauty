import React from "react";

type ButtonType = {
  type?: boolean;
  title?: string;
  alert?: () => void;
  userName?: string;
  add?: () => void;
  remove?: () => void;
};
const Button = ({ type, title, alert, userName, add, remove }: ButtonType) => {
  return (
    <div>
      <button
        className={`${type && "bg-[#cd00c5] w-[100px] h-[30px]  rounded-sm my-5"}`}
        onClick={add}>
        {title}
      </button>
    </div>
  );
};

export default Button;
