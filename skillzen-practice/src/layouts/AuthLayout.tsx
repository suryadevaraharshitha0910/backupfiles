import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-dvh overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <Outlet />
    </div>
  );
}