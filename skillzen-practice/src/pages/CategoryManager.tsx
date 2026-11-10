import { useState } from "react";
import { CategoryForm } from "../components/CategoryForm";
import { CategoryList } from "../components/CategoryList";


interface Category {
  id: number;
  name: string;
  description: string,
  active: boolean;
}

export function CategoryManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())||
    category.description.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = categories.filter(
    (category) => category.active
  ).length;

  function addCategory(categoryName: string ,description:string) {
    const newCategory: Category = {
      id: Date.now(),
      name: categoryName,
      description,
      active: true,
    };

    setCategories([...categories, newCategory]);
  }

  function deleteCategory(id: number) {
    setCategories(
      categories.filter((category) => category.id !== id)
    );
  }

  function toggleCategory(id: number) {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, active: !category.active }
          : category
      )
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        
          <h1 className="font-bold text-center text-3xl mb-10">
            Category Manager
          </h1>

          <CategoryForm onAdd={addCategory} />

          <div className="my-6">
        <h1 className="font-bold text-lg">Search a category</h1>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search category..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

          <CategoryList
            categories={filteredCategories}
            onDelete={deleteCategory}
            onToggle={toggleCategory}
          />

          <p className="mt-4 font-semibold">
            Active Categories: {activeCount}
          </p>
        </div>
      </div>
    
  );
}
