import { useState } from "react";
import axios from "axios";
import "./App.css";
import Register from "./Components/Register/Register";
import { useGlobalContext } from "./context/UserContext";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  const { username, id } = useGlobalContext();
  console.log(username);
  console.log(id);
  return (
    <>
      <Register />
    </>
  );
}

export default App;
