interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  phone: string;
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

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-500">
            {user.company.title}
          </p>
        </div>

        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />
      </div>

      <hr className="my-5 border-gray-200" />

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>

        <p>
          <span className="font-semibold">Gender:</span> {user.gender}
        </p>

        <p>
          <span className="font-semibold">Age:</span> {user.age}
        </p>

        <p>
          <span className="font-semibold">Company:</span> {user.company.title}
        </p>

        <p>
          <span className="font-semibold">City:</span> {user.address.city}
        </p>

        <p>
          <span className="font-semibold">State:</span> {user.address.state}
        </p>

        <p>
          <span className="font-semibold">Country:</span> {user.address.country}
        </p>
      </div>
    </div>
  );
}