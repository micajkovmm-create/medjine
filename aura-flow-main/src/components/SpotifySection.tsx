const ListenSection = () => {
  return (
    <section id="listen" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="font-body text-sm tracking-[0.3em] text-primary uppercase">
          Latest Mixes
        </p>
        <h2 className="font-display text-5xl font-bold text-foreground">
          Listen
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">

        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2173434432&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>

        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: 100,
            marginTop: "8px",
          }}
        >
          <a
            href="https://soundcloud.com/djmedjine"
            title="MΞDJINΞ"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            MΞDJINΞ
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/djmedjine/afro-house-2025-mix-p2-medjine"
            title="Afro House 2025 Mix P2 (MΞDJINΞ)"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Afro House 2025 Mix P2 (MΞDJINΞ)
          </a>
        </div>

      </div>
    </section>
  );
};

export default ListenSection;
