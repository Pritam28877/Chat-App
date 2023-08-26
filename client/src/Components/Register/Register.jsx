import React from "react";

const Register = () => {
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form action="" className="w-64 mx-auto ">
        <input
          className="block w-full rounded-sm p-3 mb-2 border"
          type="text"
          name=""
          id=""
          placeholder="Username"
        />
        <input
          className="block w-full rounded-sm  p-3 mb-2 border"
          type="password"
          name=""
          id=""
          placeholder="password"
        />
        <button className="bg-blue-500 text-white w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
