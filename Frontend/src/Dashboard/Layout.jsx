import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content (dynamic) */}
        <main className="p-6 overflow-y-auto">
          <Outlet /> {/* Nested route content render hoga */}
        </main>
      </div>
    </div>
  );
}
