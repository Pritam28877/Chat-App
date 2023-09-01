import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/UserContext";

const Register = () => {
  const { username, setUsername, setId } = useGlobalContext();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await axios.post("/register", { user, password });
    setUsername(user);
    setId(response.data.user);
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form action="" className="w-64 mx-auto " onSubmit={handleRegister}>
        <input
          className="block w-full rounded-sm p-3 mb-2 border"
          type="text"
          name=""
          id=""
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        />
        <input
          className="block w-full rounded-sm  p-3 mb-2 border"
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
