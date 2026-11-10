import { Bell, ChevronDown, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  userName?: string;
}

export default function Header({
  userName = "Admin",
}: HeaderProps) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  function handleLogout() {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    navigate("/");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 py-13 shadow-sm md:h-20 md:px-8">
 
      <div>
        <h1 className="text-xl font-bold text-gray-800 md:text-2xl">
          Dashboard
        </h1>

        <p className="hidden text-sm text-gray-500 md:block">
          Welcome back, {userName}
        </p>
      </div>


      <div className="flex items-center gap-5">
  
        <div className="relative cursor-pointer">
          <Bell
            size={24}
            className="text-gray-600"
          />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-gray-100"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              A
            </div>

            <div className="hidden text-left md:block">
              <p className="font-semibold text-gray-800">
                {userName}
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={18}
              className={`hidden text-gray-500 transition md:block ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}