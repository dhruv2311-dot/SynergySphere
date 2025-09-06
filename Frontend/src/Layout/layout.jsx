import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      {/* Sidebar fixed */}
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6 mt-16">
          {/* Yaha bas child route ka content aayega */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
