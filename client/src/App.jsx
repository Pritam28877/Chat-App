import { useState } from "react";
import axios from "axios";
import "./App.css";
// import Register from "./Components/Register/Register";
import { useGlobalContext } from "./context/UserContext";
import Route from "./Components/Route";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  const { username, id } = useGlobalContext();
  if (username) {
    return "login-";
  }
  return (
    <>
      <Route />
    </>
  );
}

export default App;
