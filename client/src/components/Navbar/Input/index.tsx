import React from "react";

interface IInput {
  placeHolder: string;
}

const Input = ({ placeHolder }: IInput) => {
  return (
    <div className="input-wrapper">
      <input type="text" placeholder={placeHolder} />
    </div>
  );
};

export default Input;
