import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action=""
        className="h-[650px] w-[800px] bg-slate-200 rounded-md py-10 px-32 flex flex-col gap-10"
      >
        <h2 className=" text-4xl text-black font-bold">Sign in</h2>
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
        <div className="form-control w-[200px]">
          <label className="label cursor-pointer">
            <span className="label-text text-lg text-black font-bold">
              Remember me
            </span>
            <input
              type="checkbox"
              className="checkbox border-2 border-teal-500"
            />
          </label>
        </div>
        <button
          className="btn border-none bg-gradient-to-r from-slate-900 via-teal-500 to-slate-300 rounded-none text-white text-lg font-bold"
          onClick={() => navigate("/message")}
        >
          Sign in
        </button>
        <p className="text-md text-black font-bold">
          Don't have an account yet?{" "}
          <span className="text-teal-600">
            <Link to={"/signup"}>Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
