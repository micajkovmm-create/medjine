import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

type EventItem = {
  date: string;
  city: string;
  venue: string;
  status: "tickets" | "rsvp" | "sold out" | string;
  url?: string;
};

// Fallback data if events.json can't load
const fallbackEvents: EventItem[] = [
  {
    date: "Dec 04",
    city: "Miami",
    venue: "Amante Bar by Rosanegra",
    status: "rsvp",
    url: "https://www.rosanegrarestaurant.us/restaurants-miami?utm_source=google&utm_medium=paid_ads&utm_campaign=search_marca&utm_term=rosanegra%20miami&utm_campaign=MIA_RNM_SEARCH_EN&utm_source=adwords&utm_medium=ppc&hsa_acc=4342994478&hsa_cam=21913517206&hsa_grp=183536244387&hsa_ad=756160216515&hsa_src=g&hsa_tgt=kwd-2329117887114&hsa_kw=rosanegra%20miami&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21913517206&gbraid=0AAAAA9fX4llTf-sAELT-iGfz7QJZ8DRVp&gclid=Cj0KCQiA_8TJBhDNARIsAPX5qxQ1KC7aMiBFoawUCJIt3AkgJ9B1ONG3zKukTiqPGlU8C-MtmBzvZ7EaAqzlEALw_wcB"
  },
  {
    date: "Dec 06",
    city: "Miami",
    venue: "Zuma",
    status: "rsvp",
    url: "https://www.zumarestaurant.com/en/miami?utm_source=google&utm_medium=text_ads&utm_campaign=AOS_Miami&gad_source=1&gad_campaignid=19189446138&gbraid=0AAAAAot2w_o3NmdSDsY_on-ZWzhLY1SX2&gclid=Cj0KCQiA_8TJBhDNARIsAPX5qxTaraYPCdI0pFUJ9dPpCuzcP5LZOr3Wv4nihQE-Dp9wwMiqkvPyP9MaAowbEALw_wcB"
  },
  {
    date: "Dec 06",
    city: "Miami",
    venue: "Barsecco",
    status: "rsvp",
    url: "https://www.barsecco.com/"
  },
  {
    date: "Dec 11",
    city: "Miami",
    venue: "Amante Bar by Rosanegra",
    status: "rsvp",
    url: "https://www.rosanegrarestaurant.us/restaurants-miami?utm_source=google&utm_medium=paid_ads&utm_campaign=search_marca&utm_term=rosanegra%20miami&utm_campaign=MIA_RNM_SEARCH_EN&utm_source=adwords&utm_medium=ppc&hsa_acc=4342994478&hsa_cam=21913517206&hsa_grp=183536244387&hsa_ad=756160216515&hsa_src=g&hsa_tgt=kwd-2329117887114&hsa_kw=rosanegra%20miami&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21913517206&gbraid=0AAAAA9fX4llTf-sAELT-iGfz7QJZ8DRVp&gclid=Cj0KCQiA_8TJBhDNARIsAPX5qxQ1KC7aMiBFoawUCJIt3AkgJ9B1ONG3zKukTiqPGlU8C-MtmBzvZ7EaAqzlEALw_wcB"
  },
  {
    date: "Dec 13",
    city: "Miami",
    venue: "Barsecco",
    status: "rsvp",
    url: "https://www.barsecco.com/"
  }
];

const AgendaSection = () => {
  const [events, setEvents] = useState<EventItem[]>(fallbackEvents);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data: EventItem[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setEvents(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section
      id="agenda"
      className="section-padding bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary mb-4 uppercase">
            Upcoming Shows
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Agenda
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => {
            const isClickable =
              !!event.url &&
              (event.status === "tickets" || event.status === "rsvp");

            return (
              <div
                key={index}
                className="group relative border-b border-border/50 py-6 md:py-8 cursor-pointer transition-all duration-500 hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                  {/* Date */}
                  <div className="flex items-center gap-4 md:w-32">
                    <Calendar size={16} className="text-primary" />
                    <span className="font-display text-lg md:text-xl font-semibold text-foreground">
                      {event.date}
                    </span>
                  </div>

                  {/* Venue & City */}
                  <div className="flex-1 md:text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.venue}
                    </h3>
                    <div className="flex items-center gap-2 md:justify-center mt-1">
                      <MapPin size={14} className="text-muted-foreground" />
                      <span className="font-body text-sm text-muted-foreground">
                        {event.city}
                      </span>
                    </div>
                  </div>

                  {/* Status + Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:w-56">

                    {isClickable ? (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span
                          className={`font-body text-xs tracking-wider uppercase ${
                            event.status === "sold out"
                              ? "text-muted-foreground"
                              : "text-primary"
                          }`}
                        >
                          {event.status}
                        </span>
                        <ArrowRight
                          size={20}
                          className="text-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                        />
                      </a>
                    ) : (
                      <>
                        <span
                          className={`font-body text-xs tracking-wider uppercase ${
                            event.status === "sold out"
                              ? "text-muted-foreground"
                              : "text-foreground/60"
                          }`}
                        >
                          {event.status}
                        </span>
                        <ArrowRight
                          size={20}
                          className="text-foreground/30 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                        />
                      </>
                    )}

                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default AgendaSection;
