import React from "react";
import { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const tabs = [
    {
      title: "about",
      link: "/about",
    },
    {
      title: "myBank",
      link: "myBank",
    },
    {
      title: "resources",
      link: "resources",
    },
    {
      title: "help",
      link: "help",
    },
    {
      title: "login",
      link: "login",
    },
  ];
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="flex">
      <nav className="nav-wrapper">
        <div className="logo">theBank</div>
        <div className="nav-container">
          <ul className="nav-link">
            {tabs.map((tab, index) => (
              <li
                onClick={() => {
                  setActive(index);
                  navigate(`${tab.link}`);
                }}
                className={`each-link ${
                  active === index
                    ? "border-b-primary border-b-[5px]"
                    : "border-b-transparent"
                }`}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="line bg-gray100"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
