import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-teal-700">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-2xl font-bold text-white">
          CHATTERY
        </Link>
      </div>
      <div className="flex gap-2 px-2">
        <button
          className="btn btn-ghost font-bold text-slate-50"
          onClick={() => navigate("/signin")}
        >
          Sign in
        </button>
        <button
          className="btn bg-teal-900 font-bold text-slate-50 hover:bg-teal-900"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
