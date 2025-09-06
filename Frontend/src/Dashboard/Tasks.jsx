import { useState } from "react";
import { MoreVertical, Filter, ChevronDown } from "lucide-react";

export default function Tasks() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Due Today", "Upcoming", "Completed"];

  const tasks = [
    {
      title: "Review wireframes for mobile app",
      project: "Mobile App",
      due: "Due Today",
      priority: "High",
      progress: 50,
      subtasks: "2 of 4 completed",
    },
    {
      title: "Update homepage content",
      project: "Website Redesign",
      due: "Tomorrow",
      priority: "Medium",
      progress: 33,
      subtasks: "1 of 3 completed",
    },
    {
      title: "Prepare presentation slides",
      project: "Marketing Campaign",
      due: "Completed",
      priority: "Low",
      progress: 100,
      subtasks: "5 of 5 completed",
    },
    {
      title: "Code review for authentication module",
      project: "Mobile App",
      due: "Next Week",
      priority: "Medium",
      progress: 0,
      subtasks: "0 of 2 completed",
    },
    {
      title: "Design system documentation",
      project: "Website Redesign",
      due: "Next Friday",
      priority: "Low",
      progress: 50,
      subtasks: "3 of 6 completed",
    },
  ];

  return (
    <div className="p-4 md:p-6  mt-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-xl md:text-2xl font-bold">My Tasks</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm">
            Sort <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-lg ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="mt-6 space-y-4">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded-xl border p-4 flex flex-col gap-2"
          >
            {/* Title and priority */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-gray-800">
                  {task.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-gray-500">
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs">
                    {task.project}
                  </span>
                  <span>{task.due}</span>
                </div>
              </div>
              <span
                className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-600"
                    : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>
            </div>

            {/* Subtasks */}
            <p className="text-sm text-gray-500">{task.subtasks}</p>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-lg">
              <div
                className={`h-2 rounded-lg ${
                  task.priority === "High"
                    ? "bg-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>

            {/* Percentage */}
            <p className="text-xs text-gray-400 text-right">
              {task.progress}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
