import axios, {type AxiosError,type InternalAxiosRequestConfig,} from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("permissions");
      sessionStorage.removeItem("token");

      window.location.href = "/login";
    }

    const normalizedError = {
      message:
        (error.response?.data as { message?: string })?.message ||
        error.message ||
        "Something went wrong",
      status: error.response?.status,
    };

    return Promise.reject(normalizedError);
  }
);

export default apiClient;