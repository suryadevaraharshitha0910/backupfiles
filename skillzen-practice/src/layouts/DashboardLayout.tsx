import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../components/hooks/useAuth";
import { useNotificationStore } from "../stores/notificationStore";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const { unreadCount } =
    useNotificationStore();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    setIsDropdownOpen(false);
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 shadow-sm md:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            >
              <Menu size={24} />
            </button>

            <h1 className="text-xl font-bold md:text-2xl">
              Welcome, {user?.name}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell
                size={24}
                className="text-gray-700"
              />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                {unreadCount}
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() =>
                  setIsDropdownOpen(
                    !isDropdownOpen
                  )
                }
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                <span className="hidden font-semibold sm:block">
                  {user?.name ?? "Admin"}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isDropdownOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-5 py-4 text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}