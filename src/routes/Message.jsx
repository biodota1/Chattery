import React from "react";
import { Outlet } from "react-router-dom";

export default function Message() {
  return (
    <div className="min-h-[90vh] w-full flex text-white font-bold">
      <side className="bg-teal-500 bg-opacity-10 my-10 ml-5 p-5 rounded-md w-[300px]">
        Message
      </side>
      <Outlet />
    </div>
  );
}
