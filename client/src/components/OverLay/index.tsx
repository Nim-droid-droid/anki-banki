import React, { ReactNode } from "react";
import "./OverLay.css";

const OverLay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overlay">
      <div className="overlay-background">
        <div className="overlay-container flex flex-col justify-center h-screen w-screen">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
