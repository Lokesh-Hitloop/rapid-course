import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CourseCard from "./CourseCard";

const mockCourses = [
  {
    id: 1,
    title: "Introduction to Modern JavaScript",
    category: "Programming",
    lastEdited: "2 days ago",
  },
  {
    id: 2,
    title: "Advanced Digital Marketing Strategies",
    category: "Marketing",
    lastEdited: "1 week ago",
  },
  {
    id: 3,
    title: "The Art of Photography",
    category: "Creative Arts",
    lastEdited: "3 days ago",
  },
  {
    id: 4,
    title: "Sustainable Living for Beginners",
    category: "Lifestyle",
    lastEdited: "5 days ago",
  },
];

const CoursesSection = () => {
  return (
    <section className="w-full py-12 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Your Courses</h2>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-10 bg-card"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
