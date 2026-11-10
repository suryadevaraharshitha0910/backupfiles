import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
export interface CourseCardProp {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  description: string;
  duration: string;
  status: "Published" | "Draft";
}

export function CourseCard({
  id,
  title,
  thumbnail,
  category,
  description,
  duration,
  status,
}: CourseCardProp) {
  const navigate = useNavigate();
  return (
    <div className="rounded-3xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="bg-blue-50 p-5 flex-1">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium mb-3">
              {category}
            </span>

            <h2 className="text-2xl font-bold mb-3">
              {title}
            </h2>

            <p className="text-sm text-gray-600 leading-6 text-left mb-4">
              {description}
            </p>

            <p className="text-gray-700 font-medium">
              Duration: {duration}
            </p>
          </div>

          <img
            src={thumbnail}
            alt={title}
            className="w-32 h-32 object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="bg-white p-5 flex justify-between items-center">
        <span
          className={`px-5 py-2 rounded-full text-sm text-white ${
            status === "Published"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {status}
        </span>

        <button
          onClick={() => navigate(ROUTES.COURSE_DETAILS(id))}
          className="rounded-lg bg-black px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          View Course
        </button>
      </div>
    </div>
  );
}