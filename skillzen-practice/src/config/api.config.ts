export const API_ENDPOINTS = {
  USERS: {
    LIST: "/users",
    GET: (id: number) => `/users/${id}`,
    CREATE: "/users/add",
    DELETE: (id: number) => `/users/${id}`,
    SEARCH: "/users/search",
  },
};