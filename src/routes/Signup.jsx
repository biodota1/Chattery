import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action=""
        className="h-[650px] w-[800px] bg-slate-200 rounded-md py-10 px-32 flex flex-col gap-10"
      >
        <h2 className=" text-4xl text-black font-bold">Sign up</h2>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black font-bold text-lg">
            Email
          </label>
          <input
            type="text"
            className="input rounded-none  border-4 border-b-teal-500 bg-slate-300 text-black font-bold text-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black font-bold text-lg">
            Username
          </label>
          <input
            type="text"
            className="input rounded-none  border-4 border-b-teal-500 bg-slate-300 text-black font-bold text-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black font-bold text-lg">
            Password
          </label>
          <input
            type="text"
            className="input rounded-none  border-4 border-b-teal-500 bg-slate-300 text-black font-bold text-lg"
          />
        </div>

        <button
          className="btn border-none bg-gradient-to-r from-slate-900 via-teal-500 to-slate-300 rounded-none text-white text-lg font-bold"
          onClick={() => navigate("/")}
        >
          Sign up
        </button>
        <p className="text-md text-black font-bold">
          Already have an account?
          <span className="text-teal-600">
            <Link to={"/signin"}> Sign in</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
