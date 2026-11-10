export default function Dashboard() {
  const stats = [
  {
    title: "Total Users",
    value: 120,
    color: "border-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Total Courses",
    value: 25,
    color: "border-green-500",
    bg: "bg-green-50",
  },
  {
    title: "Roles",
    value: 4,
    color: "border-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Active Users",
    value: 110,
    color: "border-orange-500",
    bg: "bg-orange-50",
  },
];

  const users = [
    {
      id: 1,
      name: "John Smith",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Trainer",
      status: "Active",
    },
    {
      id: 3,
      name: "David Lee",
      role: "Student",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Student",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-8">

      <div>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's an overview 
        </p>
      </div>

   

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
            <div
            key={stat.title}
            className={`rounded-2xl border-l-4 ${stat.color} ${stat.bg} p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg`}
            >
            <p className="text-gray-600">
                {stat.title}
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
                {stat.value}
            </h2>
            </div>
        ))}
        </div>

            

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold">
          Recent Users
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">
                  Name
                </th>

                <th className="px-4 py-3 text-left">
                  Role
                </th>

                <th className="px-4 py-3 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-none"
                >
                  <td className="px-4 py-4">
                    {user.name}
                  </td>

                  <td className="px-4 py-4">
                    {user.role}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}