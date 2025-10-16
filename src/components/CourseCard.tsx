import { BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  category: string;
  lastEdited: string;
}

const CourseCard = ({ title, category, lastEdited }: CourseCardProps) => {
  return (
    <div className="card-hover-lift bg-card border border-border rounded-xl p-6 flex items-center justify-between group">
      <div className="flex items-start gap-4 flex-1">
        <div className="p-3 rounded-lg bg-muted group-hover:bg-accent transition-colors">
          <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="text-text-light">Category: {category}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {lastEdited}
            </span>
          </div>
        </div>
      </div>
      
      <Button variant="ghost" className="font-medium">
        Edit
      </Button>
    </div>
  );
};

export default CourseCard;
