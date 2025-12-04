import headshot from "@/assets/headshot-bw.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div className="relative flex justify-center md:justify-start">
          {/* Copper outline behind the image */}
          <div
            className="absolute inset-4 rounded-3xl border border-primary/40 opacity-80"
            aria-hidden="true"
          />
          <img
            src={headshot}
            alt="Medjine"
            className="relative w-full h-auto max-w-md rounded-3xl object-cover bg-black shadow-xl shadow-black/40"
          />
        </div>

        {/* Text side */}
        <div className="md:pl-8">
          {/* Small label */}
          <p className="font-body text-xs tracking-[0.35em] text-primary mb-3 uppercase">
            About
          </p>

          {/* Title – kept as you like it */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            The Sound of{" "}
            <span className="text-primary">Connection</span>
          </h2>

          {/* New bio text */}
          <div className="font-body text-sm md:text-base text-muted-foreground leading-relaxed space-y-4 max-w-xl">
            <p>
              Born from rhythm and shaped by quiet transformation, she carries a story
              written in movement, intuition, and reinvention.
            </p>
            <p>
              Her path through art and self-discovery awakened a deeper calling behind the
              decks—where emotion becomes sound and sound becomes ritual.
            </p>
            <p>
              Blending Afrohouse pulse with echoes of ancestral roots, her sets unfold like
              spells: hypnotic, intimate, magnetic.
            </p>
            <p>
              She doesn’t just play music; she shifts energy—turning crowds into a single
              heartbeat and the night into something sacred, unforgettable, and beautifully
              unknown.
            </p>
          </div>

          {/* Stats row removed on purpose */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
