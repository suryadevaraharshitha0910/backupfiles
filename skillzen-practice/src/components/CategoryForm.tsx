import { useState } from "react";
import Button from "./ui/Button";

interface CategoryFormProps {
  onAdd: (categoryName: string, description: string) => void;
}

export function CategoryForm({ onAdd }: CategoryFormProps) {
  const [newCategory, setNewCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleAdd() {
    if (!newCategory.trim() || !description.trim()) {
      return;
    }

    onAdd(newCategory, description);

    setNewCategory("");
    setDescription("");
  }

  return (
    <div className="space-y-5 mb-8">
      <div>
        <label className="mb-2 block font-semibold">
          Category Name
        </label>

        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter category name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block font-semibold"
        >
          Description
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          rows={4}
          className="w-full resize-none rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Button
        type="button"
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white hover:bg-blue-700"
      >
        Add Category
      </Button>
    </div>
  );
}