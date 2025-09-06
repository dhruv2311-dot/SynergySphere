import { useState } from "react";
import { FiCheckCircle, FiMessageSquare, FiTrash2, FiClock, FiBell } from "react-icons/fi";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New task assigned: Complete initial project proposal",
      project: "Accent Review",
      time: "2h ago",
      type: "task",
    },
    {
      id: 2,
      title: "Task status changed to 'In Progress'",
      project: "Grand Alliance",
      time: "8h ago",
      type: "task",
    },
    {
      id: 3,
      title: "Deadline approaching: Financial report due tomorrow",
      project: "Finance 2024",
      time: "12h ago",
      type: "alert",
    },
    {
      id: 4,
      title: "New message from team member",
      project: "AUX Redesign",
      time: "1d ago",
      type: "message",
    },
    {
      id: 5,
      title: "Task completed: Design system documentation",
      project: "Phoenix",
      time: "3d ago",
      type: "task",
    },
  ]);

  const [activeTab, setActiveTab] = useState("All");

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter((n) => n.type === activeTab.toLowerCase());

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-15">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <button className="px-3 py-1 rounded-lg bg-gray-100 text-sm hover:bg-gray-200">
          Notification Settings
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b pb-2 mb-4 text-sm font-medium">
        {["All", "Unread", "Tasks", "Messages"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <select className="border rounded-lg px-3 py-1 text-sm">
            <option>Sort by Date</option>
            <option>Sort by Project</option>
          </select>
          <select className="border rounded-lg px-3 py-1 text-sm">
            <option>Filter by Project</option>
            <option>Accent Review</option>
            <option>Finance 2024</option>
            <option>Phoenix</option>
          </select>
        </div>
        <button className="text-sm text-red-500 hover:underline">Clear all</button>
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filteredNotifications.map((n) => (
          <div
            key={n.id}
            className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition"
          >
            {/* Left side */}
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-full ${
                  n.type === "task"
                    ? "bg-blue-100 text-blue-600"
                    : n.type === "message"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {n.type === "task" && <FiCheckCircle />}
                {n.type === "message" && <FiMessageSquare />}
                {n.type === "alert" && <FiBell />}
              </div>
              <div>
                <p className="text-sm font-medium">{n.title}</p>
                <p className="text-xs text-gray-500">{n.project}</p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <FiClock /> {n.time}
              </span>
              <button className="text-blue-600 text-sm hover:underline">View</button>
              <button className="text-gray-600 text-sm hover:underline">Mark as read</button>
              <button
                onClick={() => deleteNotification(n.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <p>Page 1 of 3</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&lt;</button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
  );
}
