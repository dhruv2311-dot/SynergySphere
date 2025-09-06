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

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mt-10">SynergySphere</h1>
      <p className="text-gray-500 mb-8">Project collaboration dashboard</p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="shadow-md rounded-2xl p-5 bg-white border cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`w-3 h-3 rounded-full ${project.statusColor}`}
              ></span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100">
                {project.status}
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{project.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 border border-white text-xs font-bold"
                  >
                    {avatar}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">{project.progress}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-3/4 lg:w-2/3 rounded-2xl shadow-xl overflow-hidden flex animate-scaleIn">
            {/* Left Section */}
            <div className="w-2/3 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <FiUser /> {selectedProject.details.assignee}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar /> {selectedProject.details.dueDate}
                </span>
                <span className="flex items-center gap-1 text-red-500">
                  <FiFlag /> {selectedProject.details.priority}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{selectedProject.details.description}</p>

              {/* Subtasks */}
              <h3 className="font-medium mb-2">Subtasks</h3>
              <ul className="space-y-2 mb-6">
                {selectedProject.details.subtasks.map((sub, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <input type="checkbox" checked={sub.done} readOnly />
                    <span
                      className={`${sub.done ? "line-through text-gray-400" : ""}`}
                    >
                      {sub.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Attachments */}
              <h3 className="font-medium mb-2">Attachments</h3>
              <div className="flex gap-3 mb-6 flex-wrap">
                {selectedProject.details.attachments.map((file, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 border rounded-lg text-sm bg-gray-50"
                  >
                    <FiPaperclip className="inline mr-2" /> {file}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section (Comments) */}
            <div className="w-1/3 border-l p-6 bg-gray-50 flex flex-col">
              <h3 className="font-medium mb-4">Comments</h3>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {selectedProject.details.comments.map((c, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-medium">{c.user}</p>
                    <p className="text-gray-600">{c.text}</p>
                    <span className="text-xs text-gray-400">{c.time}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
                <button className="p-2 bg-blue-600 text-white rounded-lg">
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Small popup animation */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
