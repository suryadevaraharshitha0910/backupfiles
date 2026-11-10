interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  active: boolean;
}

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({
  users,
  onEdit,
  onDelete,
}: UserListProps) {
  if (users.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
          No Users Found
        </h2>

        <p className="mt-2 text-gray-500">
          Create a user.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Saved Users
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="break-words text-2xl font-semibold">
                  {user.firstName} {user.lastName}
                </h3>

                <p className="mt-1 break-all text-gray-500">
                  {user.email}
                </p>

                <p className="mt-3">
                  <span className="font-semibold">
                    Phone:
                  </span>{" "}
                  {user.phone}
                </p>

                <p>
                  <span className="font-semibold">
                    Role:
                  </span>{" "}
                  {user.role}
                </p>

                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${
                    user.active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex w-full gap-3 md:w-auto md:flex-col lg:flex-row">
                <button
                  onClick={() => onEdit(user)}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 md:flex-none"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(user.id)}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700 md:flex-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}