import Button from "./ui/Button";
import Toggle from "./ui/toggle";

interface Category {
  id: number;
  name: string;
  description: string;
  active: boolean;
}

interface CategoryListProps {
  categories: Category[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export function CategoryList({
  categories,
  onDelete,
  onToggle,
}: CategoryListProps) {
  if (categories.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 border rounded-lg">
        No categories available.
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl border shadow-sm overflow-hidden mb-6">
      <div className="bg-gray-100 px-5 py-4">
        <h2 className="text-xl font-bold">Categories</h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">Description</th>
            <th className="text-center p-4">Status</th>
            <th className="text-center p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b last:border-b-0">
              <td className="p-4 font-semibold">
                {category.name}
              </td>

              <td className="p-4 text-black-600">
                {category.description}
              </td>

              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <Toggle
                    checked={category.active}
                    onChange={() => onToggle(category.id)}
                  />
                </div>
              </td>

              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <Button
                    onClick={() => onDelete(category.id)}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
