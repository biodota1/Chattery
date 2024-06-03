import React from "react";

export default function MessageBox() {
  return (
    <div className="w-[100%] bg-teal-500 bg-opacity-10 m-10 rounded-md flex flex-col justify-between">
      <div className="p-5">message</div>
      <form className="p-5 flex gap-5">
        <input className="input bg-white text-black w-[100%]" type="text" />
        <button className="btn w-[100px] text-white text-lg">Send</button>
      </form>
    </div>
  );
}
