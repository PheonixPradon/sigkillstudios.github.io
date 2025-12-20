import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-peach overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal/20 blur-3xl animate-drift" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-sky/20 blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-coral/10 blur-2xl animate-gentle-pulse" />

      <div className="container px-6 md:px-8 relative z-10">
        <div
          id="about-section"
          className={cn(
            "max-w-3xl mx-auto text-center opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8">
            About Us
          </h2>
          
          <div className="space-y-6 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p
              className={cn("opacity-0", isVisible && "animate-fade-up")}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We are a small team of artists, musicians, and dreamers who believe 
              that games can be poetry. Every color we choose, every note we compose, 
              is placed with care and intention.
            </p>
            
            <p
              className={cn("opacity-0", isVisible && "animate-fade-up")}
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Our games are not about winning or losing. They are about feeling—
              about the quiet moments that stay with you long after the screen fades to white.
            </p>
            
            <p
              className={cn("opacity-0", isVisible && "animate-fade-up")}
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              We create experiences that speak to the heart.
            </p>
          </div>

          {/* Decorative divider */}
          <div
            className={cn(
              "flex items-center justify-center gap-4 mt-12 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <span className="w-12 h-px bg-primary/30" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
