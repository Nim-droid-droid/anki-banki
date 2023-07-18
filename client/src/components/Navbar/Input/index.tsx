import React from "react";
import './Input.css'
interface IInput {
  placeHolder: string;
}

const Input = ({ placeHolder }: IInput) => {
  return (
    <div className="input-wrapper">
      <input type="text" placeholder={placeHolder} className='flex-1' />
    </div>
  );
};

export default Input;
