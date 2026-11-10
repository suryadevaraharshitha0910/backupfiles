import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { useHasPermission } from "../components/hooks/useHasPermission";
import { userService } from "../services/user.service";

export interface UserFormData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  active: boolean;
}

export function CreateUser() {
  const [users, setUsers] = useState<UserFormData[]>([]);
  const [editingUser, setEditingUser] = useState<UserFormData | undefined>();

  const canAddUser = useHasPermission(["user_write"]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await userService.getUsers();

        const formattedUsers: UserFormData[] = response.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          role: user.company.title,
          active: true,
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }

    fetchUsers();
  }, []);

  const handleSaveUser = (user: UserFormData) => {
    if (editingUser) {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? user : u))
      );

      setEditingUser(undefined);
    } else {
      setUsers((prevUsers) => [user, ...prevUsers]);
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );

    if (editingUser?.id === id) {
      setEditingUser(undefined);
    }
  };

  const handleEditUser = (user: UserFormData) => {
    setEditingUser(user);
  };

  const handleCancel = () => {
    setEditingUser(undefined);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <UserForm
        initialValues={editingUser}
        onSubmit={handleSaveUser}
        onCancel={handleCancel}
        canAddUser={canAddUser}
      />

      <UserList
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}