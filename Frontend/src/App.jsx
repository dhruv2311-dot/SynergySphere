import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Layout from "./Layout/layout";

import Dashboard from "./Dashboard/dashboard";
import Projects from "./Dashboard/Projects";
import Tasks from "./Dashboard/Tasks";
import Team from "./Dashboard/Team";
import Setting from "./Dashboard/Reports";
import Notifications from "./Dashboard/Notifications";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-poppins">
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected / Main layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />  {/* default "/" */}
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="team" element={<Team />} />
            <Route path="Setting" element={<Setting />} />
            <Route path="Notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
