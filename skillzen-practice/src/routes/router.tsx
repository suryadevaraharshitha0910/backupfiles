import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "../constants/routes";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import { Skeleton } from "../components/Skeleton";
const CourseDetails = lazy(() =>
  import("../pages/CourseDetails")
);

const Login = lazy(() => import("../pages/LoginPage"));
const DashboardPage = lazy(() => import("../pages/Dashboardpage"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));

const CourseCatalog = lazy(() =>
  import("../pages/CourseCatalog").then((module) => ({
    default: module.CourseCatalog,
  }))
);

const CreateUser = lazy(() =>
  import("../pages/CreateUser").then((module) => ({
    default: module.CreateUser,
  }))
);

const UserSearch = lazy(() =>
  import("../pages/UserSearch").then((module) => ({
    default: module.UserSearch,
  }))
);

const CategoryManager = lazy(() =>
  import("../pages/CategoryManager").then((module) => ({
    default: module.CategoryManager,
  }))
);


export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Skeleton />}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: ROUTES.LOGIN,
        element: (
          <Suspense fallback={<Skeleton />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: (
          <Suspense fallback={<Skeleton />}>
            <DashboardLayout />
          </Suspense>
        ),
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: (
              <Suspense fallback={<Skeleton />}>
                <DashboardPage />
              </Suspense>
            ),
          },
          {
            path: ROUTES.COURSES,
            element: (
              <Suspense fallback={<Skeleton />}>
                <CourseCatalog />
              </Suspense>
            ),
          },
          {
            path: "/courses/:id",
            element: (
              <Suspense fallback={<Skeleton />}>
                <CourseDetails />
              </Suspense>
            ),
          },
          {
            path: ROUTES.USERS,
            element: (
              <Suspense fallback={<Skeleton />}>
                <CreateUser />
              </Suspense>
            ),
          },
          
          {
            path: ROUTES.USER_SEARCH,
            element: (
              <Suspense fallback={<Skeleton />}>
                <UserSearch />
              </Suspense>
            ),
          },
          {
            path: ROUTES.CATEGORY_MANAGER,
            element: (
              <Suspense fallback={<Skeleton />}>
                <CategoryManager />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Skeleton />}>
        <NotFound />
      </Suspense>
    ),
  },
]);