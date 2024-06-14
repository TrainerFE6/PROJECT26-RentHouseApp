import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = ({ toggle, Toggle }) => {
  return (
    <div className="d-flex">
      <div className={toggle ? "d-none" : "w-auto position-fixed"}>
        <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "invisible"}>
        <Sidebar />
      </div>
      <div className="col overflow-auto" style={{ backgroundColor: "#EEF7FF" }}>
        <Navbar Toggle={Toggle} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
