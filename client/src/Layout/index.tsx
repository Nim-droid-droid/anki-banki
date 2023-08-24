import React, { Children, ReactNode } from "react";
import Navbar from "../components/Navbar/navbar";
import "./Layout.css";

const PageLayout = ({
  children,
  pathName,
}: {
  children: ReactNode;
  pathName?: string;
}) => {
  return (
    <div className={`page-layout-container ${pathName ? "layout" : ""}`}>
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
