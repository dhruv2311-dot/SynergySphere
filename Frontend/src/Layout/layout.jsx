import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";

export default function Layout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex-1 ml-64"> 
        <Navbar /> {/* optional */}
        
        <div className="p-6">
          {/* Yaha pe nested routes ka content aayega */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
