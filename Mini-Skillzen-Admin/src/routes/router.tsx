import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const DashboardLayout = lazy(
  () => import("../layouts/DashboardLayout")
);

const Loader = <div>Loading...</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={Loader}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={Loader}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={Loader}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
]);