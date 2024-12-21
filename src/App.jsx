import "./App.css";
import {Routes, Route } from "react-router-dom";
import Side from "./components/sidebar/Side";
import SignUpPage from "./components/SignUp";
import LoginPage from "./components/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Side />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
