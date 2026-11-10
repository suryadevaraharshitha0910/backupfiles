import axios from "axios";

export interface Course {
  id: number;
  title: string;
  category: string;
  duration: number;
  createdAt: string;
}

//filtercourses
export const filterCoursesByCategory = (
  courses: Course[],
  category: string
): Course[] => {
  return courses.filter((course) => course.category === category);
};

//sort courses
export const sortCoursesByDate = (courses: Course[]): Course[] => {
  return [...courses].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};


//tot duration
export const totalDuration = (courses: Course[]): number => {
  return courses.reduce((total, course) => total + course.duration, 0);
};


//to fetch
export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
