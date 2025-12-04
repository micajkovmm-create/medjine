import { useState } from "react";
import { Instagram, Youtube, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-card relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary mb-4 uppercase">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Let&apos;s Create Something Extraordinary
            </h3>
            <p className="font-body text-foreground/70 text-lg leading-relaxed mb-8">
              For bookings, collaborations, or press inquiries, reach out
              through the form or connect directly with the team.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Booking
                </p>
                <a
                  href="mailto:medjinebooking@gmail.com"
                  className="font-display text-lg text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={18} />
                  medjinebooking@gmail.com
                </a>
              </div>

              {/* Management Removed */}
            </div>

            {/* Social Links */}
            <div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Follow
              </p>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/iammedjine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border/50 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@iammedjine?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border/50 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.5 2c.4 2.1 1.9 3.8 4 4v3.1c-1.5 0-2.9-.5-4-1.4v6.8c0 3-2.5 5.4-5.5 5.4S1.5 17.5 1.5 14.5 4 9 7 9c.7 0 1.4.1 2 .4v3.3c-.6-.4-1.3-.6-2-.6-1.7 0-3 1.3-3 2.9s1.3 2.9 3 2.9c1.7 0 3-1.3 3-2.9V2h2.5z" />
                  </svg>
                </a>

                {/* SoundCloud */}
                <a
                  href="https://soundcloud.com/djmedjine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border/50 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.5 10.5c-.2 0-.4 0-.6.1-.3-2.3-2.3-4.1-4.7-4.1-1 0-1.9.3-2.7.8-.3.2-.4.5-.4.9v7.1c0 .6.4 1 1 1h7.4c2 0 3.5-1.5 3.5-3.4s-1.5-3.4-3.5-3.4zM5 9c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1V10c0-.6-.4-1-1-1zm3 1c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1zm2-1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1V10c0-.6-.4-1-1-1z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@iammedjine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border/50 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (unchanged) */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm text-muted-foreground uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b border-border/50 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm text-muted-foreground uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b border-border/50 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm text-muted-foreground uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border/50 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell us about your event or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full glow-effect flex items-center justify-center gap-3 mt-8"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
