import React from "react";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
    </div>
  );
};

export default AppLayout;
