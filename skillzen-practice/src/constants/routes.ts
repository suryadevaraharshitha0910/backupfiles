export const ROUTES = {
  LOGIN: "/login",

  DASHBOARD: "/dashboard",

  COURSE_DETAILS: (id: number) => `/courses/${id}`,

  COURSES: "/courses",

  USERS: "/users",

  USER_SEARCH: "/user-search",

  CATEGORY_MANAGER: "/category-manager",
} as const;