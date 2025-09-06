import { Home, FolderKanban, CheckSquare, Users, BarChart2 } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { to: "/", label: "Dashboard", icon: <Home size={18} /> },
    { to: "/projects", label: "Projects", icon: <FolderKanban size={18} /> },
    { to: "/tasks", label: "Tasks", icon: <CheckSquare size={18} /> },
    { to: "/team", label: "Team", icon: <Users size={18} /> },
    { to: "/reports", label: "Reports", icon: <BarChart2 size={18} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0">
      <div className="flex items-center gap-2 p-4">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
        <span className="font-bold text-xl">SynergySphere</span>
      </div>
      <nav className="mt-6">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 font-medium ${
                isActive
                  ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
