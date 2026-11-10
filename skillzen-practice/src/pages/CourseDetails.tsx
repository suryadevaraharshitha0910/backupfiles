import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../mockdata/courses";


export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return (
      <div className="rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-bold">
          Course not found
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="rounded-lg bg-gray-200 px-5 py-2 hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="overflow-hidden rounded-2xl bg-white shadow">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-96 w-full object-cover"
        />

        <div className="p-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              {course.title}
            </h1>

            <span
              className={`rounded-full px-4 py-2 text-white ${
                course.status === "Published"
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            >
              {course.status}
            </span>
          </div>

          <p className="mb-8 text-lg text-gray-600">
            {course.description}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="font-semibold text-gray-500">
                Category
              </h3>

              <p className="mt-2 text-xl font-bold">
                {course.category}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="font-semibold text-gray-500">
                Duration
              </h3>

              <p className="mt-2 text-xl font-bold">
                {course.duration}
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <h3 className="font-semibold text-gray-500">
                Level
              </h3>

              <p className="mt-2 text-xl font-bold">
                Beginner
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold">
              What You'll Learn
            </h2>

            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Build real-world projects</li>
              <li>Understand core concepts</li>
              <li>Work with modern development tools</li>
              <li>Write clean and reusable code</li>
              <li>Practice industry best practices</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold">
              Instructor
            </h2>

            <div className="rounded-xl border p-5">
              <h3 className="text-xl font-semibold">
                John Smith
              </h3>

              <p className="mt-2 text-gray-600">
                Senior Software Engineer with 10+ years of experience building modern web applications.
              </p>
            </div>
          </div>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}