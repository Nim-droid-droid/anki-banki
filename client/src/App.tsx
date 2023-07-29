import React from "react";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import MyBank from "./pages/myBank";
import Resources from "./pages/resources";
import Help from "./pages/help";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/mybank" element={<MyBank />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
