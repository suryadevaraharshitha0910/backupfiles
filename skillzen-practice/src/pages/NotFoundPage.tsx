import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-2xl">

        <div className="mb-6 text-7xl">
          🚫
        </div>

        <h1 className="text-6xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 leading-7">
          The page you're looking for doesn't exist or may have been moved.
          Please check the URL or return to the dashboard.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            to={ROUTES.LOGIN}
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Back to Login
          </Link>

        </div>
      </div>
    </div>
  );
}