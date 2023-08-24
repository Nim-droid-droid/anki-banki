import React from "react";
import "./Button.css";

interface IButton {
  title: string;
  prefix?: string;
  sufix?: string;
  otherclass: string;
  onClick: () => void;
}

const Button = ({ title, prefix, sufix, otherclass }: IButton) => {
  return (
    <button className={`button-wrapper ${otherclass ? otherclass : ""}`}>
      {prefix && prefix} {title} {sufix && sufix}
    </button>
  );
};

export default Button;
