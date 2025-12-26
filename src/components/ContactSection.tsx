import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 9.991l-2.302 2.302-8.634-8.635z" />
  </svg>
);

const ContactSection = () => {
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

    const element = document.getElementById("contact-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const socialLinks = [
    { name: "YouTube", icon: YouTubeIcon, href: "https://www.youtube.com/@SigkillStudios" },
    { name: "Play Store", icon: PlayStoreIcon, href: "https://play.google.com/store/apps/developer?id=Sigkill+Studios" },
  ];

  return (
    <footer id="contact" className="py-20 md:py-28 bg-gradient-teal">
      <div className="container px-6 md:px-8">
        <div
          id="contact-section"
          className={cn(
            "max-w-2xl mx-auto text-center opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Let's Connect
          </h2>
          
          <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
            We'd love to hear from you. Whether it's a question, a thought, or just a hello.
          </p>

          {/* Email */}
          <a
            href="mailto:sigkillstudios@gmail.com"
            className={cn(
              "inline-block font-body text-lg text-foreground hover:text-primary transition-colors duration-300 mb-12",
              "border-b border-primary/30 hover:border-primary pb-1",
              "opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            sigkillstudios@gmail.com
          </a>

          {/* Social Icons */}
          <div
            className={cn(
              "flex items-center justify-center gap-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  "bg-muted/50 text-muted-foreground",
                  "border border-border/50",
                  "hover:bg-primary/10 hover:text-primary hover:border-primary/30",
                  "transition-all duration-300 ease-gentle",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30"
                )}
                aria-label={social.name}
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className={cn(
              "mt-16 font-body text-sm text-muted-foreground/60 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            © 2026 Sigkill Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
