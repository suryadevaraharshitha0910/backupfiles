export interface Course {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  description:string;
  duration: string;
  status: "Published" | "Draft";
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React",
    thumbnail: "https://picsum.photos/300/200?1",
    category: "Framework",
    description: "Learn to build modern, reusable user interfaces using React components.",
    duration: "5 hrs",
    status: "Published",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    thumbnail: "https://picsum.photos/300/200?2",
    category: "Programming",
    description: "Master JavaScript fundamentals including functions, arrays, objects, and ES6 features.",
    duration: "8 hrs",
    status: "Draft",
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    thumbnail: "https://picsum.photos/300/200?3",
    category: "Frontend",
    description: "Learn TypeScript basics like types, interfaces, generics, and type safety.",
    duration: "4 hrs",
    status: "Published",
  },
  {
    id: 4,
    title: "Node.js Basics",
    thumbnail: "https://picsum.photos/300/200?4",
    category: "Backend",
    description: "Build scalable backend applications using Node.js, Express, and REST APIs.",
    duration: "6 hrs",
    status: "Draft",
  },
  {
    id: 5,
    title: "Python Basics",
    thumbnail: "https://picsum.photos/300/200?5",
    category: "Programming",
    description: "Understand Python syntax, data structures, functions, and object-oriented programming.",
    duration: "7 hrs",
    status: "Published",
  },
  {
    id: 6,
    title: "FastAPI Basics",
    thumbnail: "https://picsum.photos/300/200?6",
    category: "Backend",
    description: "Create high-performance APIs with FastAPI, routing, validation, and async support.",
    duration: "3 hrs",
    status: "Draft",
  },
];