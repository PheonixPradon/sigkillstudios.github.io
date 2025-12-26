import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import gameEchoes from "@/assets/game-echoes.png";
import gamePetals from "@/assets/game-petals.png";
import gameJpkk from "@/assets/game-jpkk.png";

interface Game {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  status: string;
  link?: string;
}

const games: Game[] = [
  {
    id: "whispers",
    title: "Jigsaw Puzzle: Kudaketa Kakera",
    image: gameJpkk,
    description: "Relax, unwind, and challenge your mind with Jigsaw Puzzle: Kudaketa Kakera — a beautifully crafted puzzle game inspired by Japanese art, nature, and culture.",
    year: "2025",
    status: "Released ->",
    link: "https://play.google.com/store/apps/details?id=com.sigkillstudios.jigsawpuzzle"
  },
  {
    id: "echoes",
    title: "Echoes of the Forest",
    image: gameEchoes,
    description: "A dreamlike journey through an enchanted woodland, where memories drift like leaves and every step uncovers forgotten truths.",
    year: "2026",
    status: "Coming Soon",
  },
  {
    id: "petals",
    title: "Where Petals Fall",
    image: gamePetals,
    description: "Stand at the edge of the world and watch the seasons change. A meditative experience about letting go and finding peace.",
    year: "2027",
    status: "Coming Soon",
  },
];

const GameCarousel = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = scrollRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-gradient-soft overflow-hidden" id="games">
      <div className="container px-6 md:px-8">
        <div
          className={cn(
            "text-center mb-0 opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Our Games
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Stories told through art, music, and emotion
          </p>
        </div>

        {/* Featured Banner */}
        <div
          className={cn(
            "relative mb-12 rounded-3xl overflow-hidden transition-all duration-700 ease-gentle",
            selectedGame ? "h-36 md:h-44 lg:h-52" : "h-0 opacity-0"
          )}
        >
          {selectedGame && (
            <>
              <img
                src={gamePetals}
                alt={selectedGame.title}
                className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 pt-12 pb-6 pl-8 pr-8 md:pt-16 md:pb-8 md:pl-12 md:pr-12">
                <h3 className="font-display text-2xl md:text-4xl font-light text-foreground mb-3">
                  {selectedGame.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  {selectedGame.description}
                </p>
                {selectedGame.link && selectedGame.status !== "Coming Soon" ? (
                  <a
                    href={selectedGame.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-xs text-primary font-body tracking-widest uppercase hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    {selectedGame.status}
                  </a>
                ) : (
                  <span className="inline-block mt-4 text-xs text-primary font-body tracking-widest uppercase">
                    {selectedGame.status}
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollRef}
          className="relative -mx-6 px-6 md:-mx-8 md:px-8"
        >
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-6 scrollbar-thin snap-x snap-mandatory">
            {games.map((game, index) => (
              <div
                key={game.id}
                className={cn(
                  "flex-shrink-0 snap-center opacity-0",
                  isVisible && "animate-fade-up"
                )}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <button
                  onClick={() => setSelectedGame(selectedGame?.id === game.id ? null : game)}
                  className={cn(
                    "group relative w-64 md:w-72 lg:w-80 aspect-square rounded-2xl overflow-hidden",
                    "transition-all duration-500 ease-gentle",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-4 focus:ring-offset-background",
                    selectedGame?.id === game.id
                      ? "scale-105 shadow-card ring-2 ring-primary/30"
                      : "hover:scale-102 hover:shadow-soft"
                  )}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700 ease-gentle",
                      "group-hover:scale-110",
                      selectedGame?.id === game.id && "scale-110"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent",
                      "transition-opacity duration-500",
                      selectedGame?.id === game.id ? "opacity-80" : "opacity-60 group-hover:opacity-70"
                    )}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl md:text-2xl font-light text-cream mb-1">
                      {game.title}
                    </h3>
                    <span className="font-body text-xs text-cream/70 tracking-wider">
                      {game.year}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedGame?.id === game.id
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Select ${game.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCarousel;
