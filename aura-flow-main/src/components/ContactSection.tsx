import { useState } from "react";
import { Instagram, Youtube, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);
      console.log("Contact response:", response.status, data);

      if (response.ok && data?.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Network problem. Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-card relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary mb-4 uppercase">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Let&apos;s Create Something Extraordinary
            </h3>
            <p className="font-body text-foreground/70 text-lg leading-relaxed mb-8">
              For bookings, collaborations, or press inquiries, reach out
              through the form or connect directly with the team.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Booking
                </p>
                <a
                  href="mailto:contact@medjine.com"
                  className="font-display text-lg text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={18} />
                  contact@medjine.com
                </a>
              </div>
            </div>

            <div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Follow
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/iammedjine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border/50 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
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

          {/* RIGHT: form */}
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
                  id="name"
                  type="text"
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
                  id="email"
                  type="email"
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
