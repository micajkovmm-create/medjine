import { Instagram, Youtube } from "lucide-react";

/* --- Custom TikTok Icon (Lucide-style) --- */
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 7.5c-2.3 0-4.5-1.8-4.5-4V3h-3v12.5a3.5 3.5 0 1 1-3.5-3.5h.5" />
  </svg>
);

/* --- Custom SoundCloud Icon (Lucide-style) --- */
const SoundCloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 17h2a3 3 0 0 0 0-6 3.5 3.5 0 0 0-.6.05A5 5 0 0 0 7 12" />
    <path d="M2 17h2" />
    <path d="M5 17h1" />
    <path d="M7 17h1" />
    <path d="M9 17h1" />
    <path d="M11 17h1" />
    <path d="M13 17h1" />
    <path d="M15 17h1" />
  </svg>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-new.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* ⚠️ Removed all decorative floating dots */}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-32">

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <a href="#contact" className="btn-primary glow-effect">
            Book Now
          </a>
          <a href="#agenda" className="btn-outline">
            View Agenda
          </a>
        </div>

        {/* Social Icons */}
        <div
          className="flex gap-6 mt-6 animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a
            href="https://www.instagram.com/iammedjine/?hl=en"
            target="_blank"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://www.tiktok.com/@iammedjine?lang=en"
            target="_blank"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
          >
            <TikTokIcon />
          </a>

          <a
            href="https://soundcloud.com/djmedjine?ref=clipboard&p=i&c=0&si=BC5C671B9A6D4798A2BB55C5F3D07E56&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
          >
            <SoundCloudIcon />
          </a>

          <a
            href="https://www.youtube.com/@iammedjine"
            target="_blank"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
          >
            <Youtube size={22} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.2s", opacity: 0 }}
      >
        <span className="font-body text-xs tracking-widest text-foreground/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
