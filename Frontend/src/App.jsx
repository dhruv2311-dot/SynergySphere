import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Dashboard from "./Dashboard/dashboard";
import Layout from "./Layout/layout";
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-poppins">
        <Routes>
          <Route path="/*" element={<Layout/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}