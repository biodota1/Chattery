import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      <div className="w-[50%] m-auto flex flex-col gap-y-10">
        <p className="text-5xl text-slate-100 font-bold">
          Enjoy messaging whoever and wherever you want.
        </p>
        <button
          className="btn w-36 text-lg text-slate-100 font-bold ml-auto mr-32 bg-slate-800 bg-transparent border-teal-900 border-4 hover:bg-teal-600"
          onClick={() => {
            navigate("/message");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
