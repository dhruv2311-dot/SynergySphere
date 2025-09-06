// src/pages/Team.jsx
export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      status: "Active",
      avatar: "S",
    },
    {
      name: "David Kim",
      role: "UI/UX Designer",
      status: "Active",
      avatar: "D",
    },
    {
      name: "Emily Carter",
      role: "Frontend Developer",
      status: "On Leave",
      avatar: "E",
    },
    {
      name: "Michael Lee",
      role: "Backend Developer",
      status: "Active",
      avatar: "M",
    },
    {
      name: "Sophia Patel",
      role: "QA Engineer",
      status: "Active",
      avatar: "S",
    },
  ];

  return (
    <div className="p-10 mt-10">
      <h1 className="text-2xl font-bold mb-2">Team</h1>
      <p className="text-gray-500 mb-8">
        Meet the amazing people behind SynergySphere
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 border"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
              {member.avatar}
            </div>
            <div>
              <h2 className="font-semibold text-lg">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.role}</p>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  member.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
