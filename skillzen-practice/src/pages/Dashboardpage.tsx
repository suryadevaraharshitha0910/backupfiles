import { useEffect, useState } from "react";
import { Users, BookOpen, FolderOpen, BadgeCheck } from "lucide-react";
import { userService } from "../services/user.service";
import { courses } from "../mockdata/courses";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function DashboardPage() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await userService.getUsers();
        setTotalUsers(response.total);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  const totalCourses = courses.length;

  const published = courses.filter(
    (course) => course.status === "Published"
  ).length;

  const pieData = courses.map((course) => ({
    name: course.title,
    value: 1,
  }));

  const COLORS = [
    "#2563EB",
    "#22C55E",
    "#F59E0B",
    "#A855F7",
    "#EF4444",
    "#14B8A6",
    "#EC4899",
    "#84CC16",
  ];

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: <Users size={24} />,
    },
    {
      title: "Total Courses",
      value: totalCourses,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Categories",
      value: 6,
      color: "text-purple-600",
      bg: "bg-purple-100",
      icon: <FolderOpen size={24} />,
    },
    {
      title: "Published Courses",
      value: published,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: <BadgeCheck size={24} />,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Dashboard
      </h1>

      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2
                  className={`mt-3 text-4xl font-bold ${stat.color}`}
                >
                  {stat.value}
                </h2>
              </div>

              <div
                className={`rounded-full p-4 ${stat.bg} ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

   
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">
          Course Status
        </h2>

        <div className="h-[320px] sm:h-[420px] lg:h-[520px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="42%"
                outerRadius="72%"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  paddingTop: 20,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}