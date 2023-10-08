import React from "react";
import { useGlobalContext } from "../context/UserContext";
import Register from "./Register/Register";
import Chat from "./Chat/Chat";
const Route = () => {
  const { username, id } = useGlobalContext();
  if (username) {
    return (
      <>
        <Chat />
      </>
    );
  }
  return (
    <>
      <Register />
    </>
  );
};

export default Route;
