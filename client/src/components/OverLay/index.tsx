import React, { ReactNode } from "react";
import "./OverLay.css";

const OverLay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overlay">
      <div className="overlay-background">
        <div className="overlay-container">
          <div className="z- z-50">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
