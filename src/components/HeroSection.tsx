import { useState, useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const placeholders = [
  "Create a course on the history of jazz",
  "Build a 5-module course on sustainable gardening",
  "Design a short course on ethical AI",
  "Develop a beginner's guide to photography",
  "Create a course about modern architecture",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentPhrase = placeholders[currentIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 2500;
    const pauseAfterDeleting = 500;

    if (!isDeleting && currentText === currentPhrase) {
      // Pause after finishing typing
      const timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      // Pause after deleting, then move to next phrase
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % placeholders.length);
      }, pauseAfterDeleting);
      return () => clearTimeout(timeout);
    }

    // Type or delete one character
    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentPhrase.slice(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

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
          <div className="flex-1 relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              placeholder={`${currentText}${showCursor ? "|" : ""}`}
              className="h-14 px-6 text-base shadow-sm focus:shadow-md transition-all"
            />
          </div>
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
