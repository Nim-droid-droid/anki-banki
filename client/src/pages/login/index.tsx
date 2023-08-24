import React, { useState } from "react";
import Input from "../../components/Navbar/Input";
import Button from "../../components/Button/Button";
import Overlay from "../../components/OverLay";
import PageLayout from "../../Layout";
import './login.css'
import { useNavigate , useLocation} from "react-router-dom";
const Login = () => {
  const [signUp, setSignUp] = useState(false)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  return (
    <PageLayout pathName={pathname}>
      <div className="login-wrapper">
        <div className="login--heading">
          <div className=" border-left"></div>
          <div className="login"> Login</div>
          <div className="border-right"></div>
        </div>
        <Overlay>
          <div className="content-wrapper">
            <div className="content">
              <h2 className="tex text-3xl font-bold">Log In</h2>
              <Input placeHolder={"UserName"}/>
              <Input placeHolder="Password"/>
              <Button title={"Log In"} otherclass={"bg-primary"} onClick={()=>{
                setSignUp(true)
                
              }}/>

              <p className="text-[#808080] text-center font-bold cursor-pointer" onClick={()=>{
                setSignUp(true)
                navigate('/signUp')
              }}>Or Sign up</p>
            </div>
          </div>
        </Overlay>
      </div>
    </PageLayout>
  );
};

export default Login;
