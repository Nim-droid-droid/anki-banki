import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Navbar/Input";
import PageLayout from "../../Layout";
import "./SignUp.css";
import { useNavigate, Location, useLocation} from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  return (
    <PageLayout pathName={pathname} >
      <div className="signUp-wrapper">
        <div className="signUp--heading">
          <div className=" border-left"></div>
          <div className="signUp"> SignUp</div>
          <div className="border-right"></div>
        </div>
        <div className="signUp-content">
          <div className="signup-input">
            <h2 className="tex text-3xl font-bold">Sign Up</h2>
            <Input placeHolder={"First Name"} />
            <Input placeHolder="Last Name" />
            <Input placeHolder="Email" />
            <Input placeHolder="Password" />
            <Input placeHolder="Confirm Password" />
            <Button
              title={"Sign Up"}
              otherclass={"bg-primary"}
              onClick={() => {}}
            />
          </div>
          <div className="text-gray400">
            <p className="text-center">
              Already have an account?{" "}
              <span
                className="hover:text-black cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {" "}
                Log In
              </span>
            </p>
            <p className="h-[1px] w-full bg-gray400 my-[1.6875rem]"></p>
            <p className="text-center">OR sign in with:</p>
          </div>
          <div className="button-wrapper">
            <Button
              title="Google"
              otherclass="bg-[#09A6FF]"
              onClick={() => {}}
            />
            <Button
              title="GitHub"
              otherclass="bg-[#2F2F2F]"
              onClick={() => {}}
            />

            <Button
              title="Discord"
              otherclass="bg-[#C173FE]"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;
