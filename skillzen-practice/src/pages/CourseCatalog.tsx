import { CourseCard } from "../components/CourseCard";
import { EmptyState } from "../components/EmptyState";
import { courses } from "../mockdata/courses";

export function CourseCatalog() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold md:text-4xl">
        Course Catalog
      </h1>

      {courses.length === 0 ? (
        <EmptyState
          title="No Courses Found"
          message="There are no courses available at the moment."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              thumbnail={course.thumbnail}
              category={course.category}
              description={course.description}
              duration={course.duration}
              status={course.status}
            />
          ))}
        </div>
      )}
    </div>
  );
}