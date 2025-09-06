import { Plus, UserPlus, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      {/* Project Title */}
      <h2 className="text-xl font-bold mb-2">
        Project Alpha: Q4 Marketing Campaign
      </h2>
      <p className="text-gray-600 mb-6">
        Lead generation initiative across digital channels
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Progress */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">Project Progress</h3>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-8 border-indigo-600 flex items-center justify-center font-bold text-lg text-indigo-600">
                75%
              </div>
              <p className="text-sm mt-2 text-gray-600">Tasks Completed</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-8 border-green-500 flex items-center justify-center font-bold text-lg text-green-600">
                90%
              </div>
              <p className="text-sm mt-2 text-gray-600">Milestones Achieved</p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p>15 Days Remaining</p>
            <p>15 Days Remaining</p>
            <p className="text-indigo-600 font-medium">75% Complete</p>
            <p className="text-red-500 font-medium">Due: 5</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4 flex-wrap">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm flex items-center gap-2">
              <Plus size={16} /> Add Task
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center gap-2">
              <UserPlus size={16} /> Add Member
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center gap-2">
              <FileText size={16} /> View Reports
            </button>
          </div>
        </div>

        {/* High Priority Tasks */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">High Priority Tasks</h3>
          <div className="space-y-3">
            {[
              { title: "Launch Ad A/B Test", due: "Due in 2 days", color: "bg-red-100 text-red-600" },
              { title: "Finalize Q4 Budget", due: "Due in 3 days", color: "bg-red-100 text-red-600" },
              { title: "Finalize Q4 Report", due: "Due in 3 days", color: "bg-red-100 text-red-600" },
              { title: "Review Campaign Analytics", due: "Due in 5 days", color: "bg-yellow-100 text-yellow-600" },
              { title: "Update Stakeholder Presentation", due: "Due in 6 days", color: "bg-orange-100 text-orange-600" },
            ].map((task, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border flex justify-between items-center hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-xs text-gray-500">{task.due}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${task.color}`}>
                  !
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
