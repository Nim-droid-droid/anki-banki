import React from 'react'
import './Button'

interface IButton {
    title:string;
    prefix:string;
    sufix:string;
    bgColor:string;
}

const Button = ({title, prefix, sufix, bgColor}:IButton) => {
  return (
    <button className='button-wrapper'>
        {title}
    </button>
  )
}

export default Button