import Header from "../containers/Header";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";

import React from "react";

function Wrapper() {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      <Outlet />
    </>
  );
}

export default Wrapper;
