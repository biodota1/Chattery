import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="bg-gradient-to-br from-slate-900 from-25% via-teal-500 via-75% to-slate-100 to-1%  min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
