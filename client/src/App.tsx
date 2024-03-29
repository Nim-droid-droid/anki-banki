import React from "react";
import Navbar from './components/Navbar/navbar'
import {Route, Routes} from 'react-router-dom'
import About from "./pages/About";
import MyBank from "./pages/myBank";
import Resources from "./pages/resources";
import Help from "./pages/help";
import Home from "./pages/Home";
import CreateQuestion from "./components/CreateQuestion";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mybank" element={<MyBank />} />
        <Route path='/createquestion' element={<CreateQuestion/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
    </div>
  );
}

export default App;
