import React from "react";
import { Outlet } from "react-router-dom"; 
import Navbar from "../components/Navbar";

export default function Root() {
  return(
    <div style={{margin: '20px'}}>
      <Navbar />
      <Outlet />
    </div>

  );
}