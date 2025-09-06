import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed top-0 left-64 right-0 z-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Find projects & tasks..."
            className="bg-transparent outline-none px-2 text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
          + New Project
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
          New Task
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
          Invite Team
        </button>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          <div>
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-gray-500">sarah@synergy.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
