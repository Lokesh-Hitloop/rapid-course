import { useState, useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const placeholders = [
  "Create a course on the history of jazz...",
  "Build a 5-module course on sustainable gardening...",
  "Design a short course on ethical AI...",
  "Develop a beginner's guide to photography...",
  "Create a course about modern architecture...",
];

const HeroSection = () => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCreate = () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    // Simulate course creation
    setTimeout(() => {
      setIsLoading(false);
      console.log("Creating course:", prompt);
    }, 2000);
  };

  return (
    <section className="w-full py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            Let's build something <span className="gradient-text">amazing</span>
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            placeholder={placeholders[currentPlaceholder]}
            className="flex-1 h-14 px-6 text-base shadow-sm focus:shadow-md transition-all"
          />
          <Button
            onClick={handleCreate}
            disabled={isLoading || !prompt.trim()}
            variant="hero"
            size="lg"
            className="sm:w-auto w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                Create Course
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
