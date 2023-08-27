import { useState } from "react";
import axios from "axios";
import "./App.css";
import Register from "./Components/Register/Register";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  return (
    <>
      <Register />
    </>
  );
}

export default App;
