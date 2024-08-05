import React from "react";
import NavBar from "../Header/NavBar";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
      </div>
      <div className="mt-[5rem]">{children}</div>
    </>
  );
}

export default Layout;
