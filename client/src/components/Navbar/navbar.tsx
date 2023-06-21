import React from "react";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const title = ["about", "myBank", "resources", "help", "login"];
     const [active, setActive] = useState(0)
  return (
    <div className="flex">
      <nav className="nav-wrapper">
        <div className="logo">theBank</div>
            <div className="nav-container">
            <ul className="nav-link">
          {title.map((title, index) => (
            <li onClick={()=>setActive(index)} className={`each-link ${active === index ? 'border-b-primary border-b-[5px]' : 'border-b-transparent'}`}>{title}</li>
          ))}
        </ul>
        <div className="line"></div>
            </div>
      </nav>
    </div>
  );
};

export default Navbar;
