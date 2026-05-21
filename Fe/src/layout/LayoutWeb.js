import React from "react";
import { Footer, HeaderWeb } from "../components";

const LayoutWeb = ({ children }) => {
  return (
    <div
      style={{
        background: "black",
      }}
    >
      <HeaderWeb />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWeb;
