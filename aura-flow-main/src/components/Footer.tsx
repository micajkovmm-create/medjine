const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-card border-t border-border/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo Text with Vermin Vibes 2 */}
        <p className="font-vermin text-2xl text-foreground tracking-wide">
          MEDJINE
        </p>

        {/* Copyright + Made With Love */}
        <div className="text-center md:text-left">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Medjine. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground/70 mt-1 tracking-wide">
            Made with Love
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Terms
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
