import React, { useState } from "react";

export default function Project() {
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");

  // Dummy Tasks Data
  const tasks = {
    todo: [
      { id: 1, title: "Design Landing Page Mockups", due: "Dec 15", priority: "Low" },
      { id: 2, title: "User Research Analysis", due: "Dec 12", priority: "High", blocked: true },
      { id: 3, title: "Create Style Guide", due: "Dec 18", priority: "Medium" },
      { id: 4, title: "Competitor Analysis", due: "Dec 20", priority: "Low" },
    ],
    progress: [
      { id: 5, title: "Develop Homepage Layout", due: "Dec 14", priority: "High", progress: 65 },
      { id: 6, title: "Mobile Responsive Design", due: "Dec 16", priority: "Medium", progress: 40 },
      { id: 7, title: "Content Strategy", due: "Dec 13", priority: "Low", progress: 80 },
    ],
    done: [
      { id: 8, title: "Project Kickoff Meeting", due: "Dec 8", priority: "Medium", completed: true },
      { id: 9, title: "Requirements Gathering", due: "Dec 10", priority: "Low", completed: true },
    ],
  };

  // Filter function
  const filterTasks = (list) => {
    if (priorityFilter === "All Priorities") return list;
    return list.filter((task) => task.priority === priorityFilter);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen pt-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Website Redesign Project
          </h2>
          <p className="text-sm text-gray-500">12 tasks • 5 team members</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Members Dropdown */}
          <select className="border rounded-lg px-3 py-2 text-sm shadow-sm">
            <option>All Members</option>
            <option>Alice Johnson</option>
            <option>Bob Smith</option>
            <option>Charlie Brown</option>
            <option>David Lee</option>
            <option>Eva Williams</option>
          </select>

          {/* Priorities Dropdown */}
          <select
            className="border rounded-lg px-3 py-2 text-sm shadow-sm"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          {/* Button */}
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-700">
            + New Task
          </button>
        </div>
      </div>

      {/* Kanban board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            To Do <span className="text-sm text-gray-400">({filterTasks(tasks.todo).length})</span>
          </h3>
          <div className="space-y-3">
            {filterTasks(tasks.todo).map((task) => (
              <div
                key={task.id}
                className={`p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md border ${
                  task.blocked ? "border-red-300" : ""
                }`}
              >
                {task.blocked && (
                  <span className="inline-block mb-2 px-2 py-1 text-xs bg-red-100 text-red-600 rounded font-medium">
                    🚨 Blocked
                  </span>
                )}
                <h4 className="font-semibold">{task.title}</h4>
                <div className="mt-3 flex justify-between text-sm text-gray-500">
                  <span>Due {task.due}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            In Progress <span className="text-sm text-gray-400">({filterTasks(tasks.progress).length})</span>
          </h3>
          <div className="space-y-3">
            {filterTasks(tasks.progress).map((task) => (
              <div
                key={task.id}
                className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md border"
              >
                <h4 className="font-semibold">{task.title}</h4>
                <div className="mt-3">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-indigo-500 rounded-full"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{task.progress}%</p>
                </div>
                <div className="mt-3 flex justify-between text-sm text-gray-500">
                  <span>Due {task.due}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            Done <span className="text-sm text-gray-400">({filterTasks(tasks.done).length})</span>
          </h3>
          <div className="space-y-3">
            {filterTasks(tasks.done).map((task) => (
              <div
                key={task.id}
                className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md border"
              >
                <h4 className="font-semibold">{task.title}</h4>
                {task.completed && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
                    ✔ Completed
                  </span>
                )}
                <div className="mt-3 flex justify-between text-sm text-gray-500">
                  <span>{task.completed ? "Completed" : "Due"} {task.due}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
