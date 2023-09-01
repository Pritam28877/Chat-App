import React from "react";
import { useGlobalContext } from "../context/UserContext";
import Register from "./Register/Register";
const Route = () => {
  const { username, id } = useGlobalContext();
  if (username) {
    return "login-";
  }
  return (
    <>
      <Register />
    </>
  );
};

export default Route;
