import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { ROUTES } from "../constants/routes";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const projects = [
  {
    name: "Dashboard",
    path: ROUTES.DASHBOARD,
  },
  {
    name: "Course Catalog",
    path: ROUTES.COURSES,
  },
  {
    name: "Category Manager",
    path: ROUTES.CATEGORY_MANAGER,
  },
  {
    name: "User Search",
    path: ROUTES.USER_SEARCH,
  },
  {
    name: "Create User",
    path: ROUTES.USERS,
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
          className={`
    fixed inset-y-0 left-0 z-40 w-72
    bg-gradient-to-b from-[#4d458a] to-[#3d356d]
    text-white shadow-xl
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:sticky lg:top-0 lg:h-screen lg:translate-x-0
  `}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <div>
            <h1 className="text-2xl font-bold">
              SkillZen
            </h1>

            <p className="mt-1 text-sm text-purple-200">
              Learning Dashboard
            </p>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-2">
            {projects.map((project) => (
              <NavLink
                key={project.path}
                to={project.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 transition-all ${
                    isActive
                      ? "bg-white/20 text-white shadow"
                      : "text-purple-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {project.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}