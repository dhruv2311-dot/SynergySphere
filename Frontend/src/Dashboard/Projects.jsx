export default function Dashboard() {
  const projects = [
    {
      title: "Mobile App Redesign",
      desc: "UI/UX overhaul for better user experience",
      status: "On Track",
      statusColor: "bg-blue-500",
      progress: "70% Complete",
      avatars: ["A", "B", "C"],
    },
    {
      title: "Backend Infrastructure",
      desc: "Scalable cloud architecture implementation",
      status: "At Risk",
      statusColor: "bg-orange-500",
      progress: "45% Complete",
      avatars: ["D", "E", "F"],
    },
    {
      title: "Marketing Campaign",
      desc: "Q4 product launch marketing strategy",
      status: "Blocked",
      statusColor: "bg-red-500",
      progress: "20% Complete",
      avatars: ["G", "H", "I"],
    },
    {
      title: "AI Integration",
      desc: "Integrating AI features in the product",
      status: "On Track",
      statusColor: "bg-blue-500",
      progress: "60% Complete",
      avatars: ["J", "K", "L"],
    },
    {
      title: "Data Migration",
      desc: "Moving legacy data to new system",
      status: "At Risk",
      statusColor: "bg-orange-500",
      progress: "35% Complete",
      avatars: ["M", "N", "O"],
    },
    {
      title: "Customer Feedback Portal",
      desc: "Building a new feedback management tool",
      status: "On Track",
      statusColor: "bg-blue-500",
      progress: "50% Complete",
      avatars: ["P", "Q", "R"],
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mt-10">SynergySphere</h1>
      <p className="text-gray-500 mb-8">Project collaboration dashboard</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-md rounded-2xl p-5 bg-white border"
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
    </div>
  );
}
