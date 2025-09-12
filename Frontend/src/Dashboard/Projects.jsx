import React, { useState } from "react";

function CreateTask({ onClose, onCreate }) {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");
  const [project, setProject] = useState("");
  const [tags, setTags] = useState(["Design", "Frontend", "Urgent"]);
  const [tagInput, setTagInput] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: taskName,
      due: "Dec 25", // default due date, can be extended
      priority,
      blocked: false,
    };
    onCreate(newTask); // send task back to Project board
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* popup form */}
      <form
        onSubmit={handleSubmit}
        className="relative w-[420px] bg-white shadow-lg rounded-2xl p-6 space-y-4 z-10"
      >
        <h2 className="text-2xl font-bold text-center">Create Task</h2>
        <p className="text-center text-gray-500 text-sm">
          Organize your work with <span className="font-semibold">SynergySphere</span>
        </p>

        {/* Task Name */}
        <input
          type="text"
          placeholder="Enter task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        {/* Assignee + Project */}
        <div className="flex space-x-3">
          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select assignee...</option>
            <option value="John">John</option>
            <option value="Emma">Emma</option>
            <option value="David">David</option>
          </select>

          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select project...</option>
            <option value="Website">Website</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Dashboard">Dashboard</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2 text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Add tags..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Priority */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Priority</p>
          <div className="flex space-x-4">
            {["Low", "Medium", "High"].map((level) => (
              <label
                key={level}
                className={`flex items-center space-x-2 cursor-pointer ${
                  priority === level ? "font-semibold" : ""
                }`}
              >
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  checked={priority === level}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <span
                  className={`w-3 h-3 rounded-full ${
                    level === "Low"
                      ? "bg-green-500"
                      : level === "Medium"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                ></span>
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Upload Image */}
        <div className="border-2 border-dashed rounded-lg p-4 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="fileUpload"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer text-gray-500 text-sm"
          >
            {image ? image.name : "Click to upload or drag and drop (PNG, JPG, up to 10MB)"}
          </label>
        </div>

        {/* Description */}
        <textarea
          placeholder="Describe the task details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          rows="3"
        />

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
          >
            + Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Project() {
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState({
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
  });

  const filterTasks = (list) => {
    if (priorityFilter === "All Priorities") return list;
    return list.filter((task) => task.priority === priorityFilter);
  };
=======
import { useState } from "react";
import {
  FiX,
  FiUser,
  FiCalendar,
  FiFlag,
  FiPaperclip,
  FiSend,
} from "react-icons/fi";

export default function Dashboard() {
  const projects = [
    {
      title: "Mobile App Redesign",
      desc: "UI/UX overhaul for better user experience",
      status: "On Track",
      statusColor: "bg-blue-500",
      progress: "70% Complete",
      avatars: ["A", "B", "C"],
      details: {
        assignee: "Sarah Johnson",
        dueDate: "Dec 25, 2025",
        priority: "High",
        description:
          "Update the design system components to align with the new branding. This includes updating color palettes, typography, icons, and spacing tokens.",
        subtasks: [
          { text: "Update color tokens", done: true },
          { text: "Revise typography scale", done: true },
          { text: "Update button components", done: false },
          { text: "Revise spacing tokens", done: false },
          { text: "Update documentation", done: false },
        ],
        attachments: ["colors.pdf", "tokens.png", "components.docx"],
        comments: [
          { user: "Mike Chen", text: "Great progress so far!", time: "3h ago" },
          {
            user: "Sarah Johnson",
            text: "Final tweaks remaining, should be done by tomorrow.",
            time: "1h ago",
          },
        ],
      },
    },
    {
      title: "Backend Infrastructure",
      desc: "Scalable cloud architecture implementation",
      status: "At Risk",
      statusColor: "bg-orange-500",
      progress: "45% Complete",
      avatars: ["D", "E", "F"],
      details: {
        assignee: "David Kim",
        dueDate: "Jan 10, 2026",
        priority: "Medium",
        description: "Building cloud-native backend for scalability and performance.",
        subtasks: [
          { text: "Setup Kubernetes cluster", done: true },
          { text: "Database migration", done: false },
          { text: "API Gateway setup", done: false },
        ],
        attachments: ["infra-plan.pdf", "db-schema.png"],
        comments: [
          { user: "Alex Lee", text: "Migration blocked due to schema errors.", time: "2h ago" },
        ],
      },
    },
    {
      title: "Marketing Campaign",
      desc: "Q4 product launch marketing strategy",
      status: "Blocked",
      statusColor: "bg-red-500",
      progress: "20% Complete",
      avatars: ["G", "H", "I"],
      details: {
        assignee: "Emily Clark",
        dueDate: "Nov 30, 2025",
        priority: "High",
        description: "Creating a multi-channel campaign to promote Q4 launch.",
        subtasks: [
          { text: "Social media creatives", done: false },
          { text: "Ad placements", done: false },
        ],
        attachments: ["strategy.pdf"],
        comments: [],
      },
    },
    {
      title: "AI Integration",
      desc: "Integrating AI features in the product",
      status: "On Track",
      statusColor: "bg-blue-500",
      progress: "60% Complete",
      avatars: ["J", "K", "L"],
      details: {
        assignee: "Ryan Patel",
        dueDate: "Feb 14, 2026",
        priority: "High",
        description: "Implementing AI-driven personalization features in the app.",
        subtasks: [
          { text: "Model training", done: true },
          { text: "API integration", done: false },
        ],
        attachments: ["model-report.pdf", "ai-api.json"],
        comments: [
          { user: "Sophia Wong", text: "Model accuracy reached 92%", time: "1d ago" },
        ],
      },
    },
    {
      title: "Data Migration",
      desc: "Moving legacy data to new system",
      status: "At Risk",
      statusColor: "bg-orange-500",
      progress: "35% Complete",
      avatars: ["M", "N", "O"],
      details: {
        assignee: "Kevin Brown",
        dueDate: "Mar 01, 2026",
        priority: "Medium",
        description: "Migrating old customer data into the new platform.",
        subtasks: [
          { text: "Data cleanup", done: false },
          { text: "ETL pipeline setup", done: false },
        ],
        attachments: ["migration-plan.docx"],
        comments: [
          { user: "Mike Chen", text: "Cleanup taking longer than expected.", time: "6h ago" },
        ],
      },
    },
    {
      title: "Customer Feedback Portal",
      desc: "Building a new feedback management tool",
      status: "On Track",
      statusColor: "bg-blue-500",
      progress: "50% Complete",
      avatars: ["P", "Q", "R"],
      details: {
        assignee: "Anna White",
        dueDate: "Dec 05, 2025",
        priority: "Low",
        description: "Developing an internal tool to collect and manage feedback.",
        subtasks: [
          { text: "Wireframe UI", done: true },
          { text: "Build backend APIs", done: false },
        ],
        attachments: ["wireframes.pdf", "api-docs.txt"],
        comments: [],
      },
    },
  ];
>>>>>>> 3e2e1a8633bff2857253c7d8ef11ead54f818e74

  const [selectedProject, setSelectedProject] = useState(null);

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
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-700"
          >
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

      {/* Modal */}
      {showModal && (
        <CreateTask onClose={() => setShowModal(false)} onCreate={handleCreateTask} />
      )}
    </div>
  );
}
