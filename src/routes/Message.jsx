import React from "react";
import { Outlet } from "react-router-dom";

export default function Message() {
  return (
    <div className="min-h-[90vh] w-full flex text-white font-bold">
      <side className="bg-teal-500 bg-opacity-10 my-10 ml-5 p-5 rounded-md w-[300px] flex flex-col gap-5">
        <h2 className="font-bold text-lg">Chats</h2>
        <input
          type="text"
          placeholder="Search"
          className="input bg-slate-200 h-[40px] rounded-md"
        />
      </side>
      <Outlet />
    </div>
  );
}
