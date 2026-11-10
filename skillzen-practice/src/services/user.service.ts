
import apiClient from "./api";
import { API_ENDPOINTS } from "../config/api.config";
import type { ApiResponse } from "../types/api";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  gender: string;
  age: number;
  company: {
    title: string;
  };
  address: {
    city: string;
    state: string;
    country: string;
  };
}

export const userService = {
  
  async getUsers(
    limit: number = 10,
    skip: number = 0
  ): Promise<ApiResponse<User[]>> {
    const response = await apiClient.get<ApiResponse<User[]>>(
      API_ENDPOINTS.USERS.LIST,
      {
        params: { limit, skip },
      }
    );

    return response.data;
  },

  
  async searchUsers(
    search: string,
    limit: number = 10,
    skip: number = 0
  ): Promise<ApiResponse<User[]>> {
    const response = await apiClient.get<ApiResponse<User[]>>(
      API_ENDPOINTS.USERS.SEARCH,
      {
        params: { q: search, limit, skip },
      }
    );

    return response.data;
  },

  async getUser(id: number): Promise<User> {
    const response = await apiClient.get<User>(
      API_ENDPOINTS.USERS.GET(id)
    );

    return response.data;
  },

  async createUser(user: Partial<User>) {
    const response = await apiClient.post(
      API_ENDPOINTS.USERS.CREATE,
      user
    );

    return response.data;
  },

  async deleteUser(id: number) {
    const response = await apiClient.delete(
      API_ENDPOINTS.USERS.DELETE(id)
    );

    return response.data;
  },
};