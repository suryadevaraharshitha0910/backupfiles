export interface ApiResponse<T> {
  users: T;
  total: number;
  skip: number;
  limit: number;
}