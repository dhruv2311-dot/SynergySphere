import { useState } from "react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    firstName: "Olivia",
    lastName: "Chen",
    bio: "",
  });

  const [preferences, setPreferences] = useState({
    taskAssignments: true,
    taskAlignments: true,
    taskChanges: false,
    approachingDeadlines: true,
    teamUpdates: true,
    lightMode: true,
    darkMode: false,
    profileVisibility: true,
  });

  const handleToggle = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-10 mt-10">
      <div className="bg-white shadow-md rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Olivia Chen</h2>
              <p className="text-sm text-gray-500">olivia.chen@synergysphere.com</p>
              <p className="text-sm text-gray-400">Project Lead</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="border rounded-lg p-2 w-full"
              />
            </div>

            <textarea
              placeholder="Tell us about yourself..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="border rounded-lg p-2 w-full h-24"
            ></textarea>

            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                Save
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Notification Preferences</h3>
            {[
              { label: "New task assignments", key: "taskAssignments" },
              { label: "Task status alignments", key: "taskAlignments" },
              { label: "Task status changes", key: "taskChanges" },
              { label: "Approaching deadlines", key: "approachingDeadlines" },
              { label: "Team member updates", key: "teamUpdates" },
            ].map((item) => (
              <div key={item.key} className="flex justify-between py-2">
                <span>{item.label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences[item.key]}
                    onChange={() => handleToggle(item.key)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                </label>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Theme Selection</h3>
            {[
              { label: "Light Mode", key: "lightMode" },
              { label: "Dark Mode", key: "darkMode" },
            ].map((item) => (
              <div key={item.key} className="flex justify-between py-2">
                <span>{item.label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences[item.key]}
                    onChange={() => handleToggle(item.key)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                </label>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Account Settings</h3>
            <div className="space-y-2 text-blue-500">
              <button className="w-full text-left hover:underline">
                Change Password
              </button>
              <button className="w-full text-left hover:underline">
                Linked Accounts
              </button>
              <div className="flex justify-between items-center">
                <span>Profile Visibility</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.profileVisibility}
                    onChange={() => handleToggle("profileVisibility")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}