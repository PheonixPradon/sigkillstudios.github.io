import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToGames = () => {
    const gamesSection = document.getElementById("games");
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={cn(
            "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-coral/40 animate-float",
            "opacity-0 transition-opacity duration-1000",
            isLoaded && "opacity-100"
          )}
          style={{ animationDelay: "0s" }}
        />
        <div
          className={cn(
            "absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-gold/50 animate-drift",
            "opacity-0 transition-opacity duration-1000",
            isLoaded && "opacity-100"
          )}
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className={cn(
            "absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-teal/30 animate-float",
            "opacity-0 transition-opacity duration-1000",
            isLoaded && "opacity-100"
          )}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={cn(
            "absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-sage/40 animate-gentle-pulse",
            "opacity-0 transition-opacity duration-1000",
            isLoaded && "opacity-100"
          )}
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Studio Name */}
          <h1
            className={cn(
              "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground mb-6",
              "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            Sigkill Studios
          </h1>

          {/* Tagline */}
          <p
            className={cn(
              "font-body text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-12",
              "opacity-0 translate-y-6 transition-all duration-1000 ease-out delay-300",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            Where stories breathe and colors sing
          </p>

          {/* CTA Button */}
          <div
            className={cn(
              "opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-500",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToGames}
              className="font-body font-light tracking-wider"
            >
              Explore Our Games
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-12 left-1/2 -translate-x-1/2",
          "opacity-0 transition-opacity duration-1000 delay-1000",
          isLoaded && "opacity-100"
        )}
      >
        <div className="flex flex-col items-center gap-2 animate-gentle-pulse">
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
