import React from "react";
import { HeaderEvent } from "../components";

const LayoutEvent = ({ children }) => {
  return (
    <div>
      <HeaderEvent />
      {children}
    </div>
  );
};

export default LayoutEvent;
