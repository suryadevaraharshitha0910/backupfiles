import { useAuth } from "./useAuth";

export function useHasPermission(requiredPermissions: string[]) {
  const { permissions } = useAuth();

  return requiredPermissions.every((permission) =>
    permissions.includes(permission)
  );
}