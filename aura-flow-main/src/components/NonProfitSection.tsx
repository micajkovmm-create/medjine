import { Heart } from "lucide-react";
import logo from "@/assets/LOGO.svg";
import djAction from "@/assets/dj-action.jpg";

const NonProfitSection = () => {
  return (
    <section
      id="nonprofit"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={djAction}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
      </div>

      {/* Glow Element */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE — TEXT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart size={20} className="text-primary" fill="currentColor" />
              <p className="font-body text-sm tracking-[0.3em] text-primary uppercase">
                Giving Back
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sunshine 4U
              <br />
              <span className="text-gradient">Project</span>
            </h2>

            <p className="font-body text-lg text-foreground/70 leading-relaxed mb-6">
              This project was created to give back—to uplift communities where
              support, connection, and hope are needed most. Its mission is to
              offer real help, open doors to opportunity, and remind people of
              their strength and worth.
            </p>

            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              By fostering human connection and empowering individuals with
              resources, care, and compassion, it strives to build a future
              where every person has the chance to rise, rebuild, and thrive.
            </p>
          </div>

          {/* RIGHT SIDE — LOGO */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="Sunshine4U Logo"
              className="w-64 md:w-72 opacity-90 drop-shadow-[0_0_25px_rgba(255,150,80,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonProfitSection;
