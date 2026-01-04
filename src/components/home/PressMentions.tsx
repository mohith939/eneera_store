import { Quote } from "lucide-react";

const pressMentions = [
  {
    outlet: "Health Today",
    quote: "ENEERA sets a new standard for organic nutrition in India. Their commitment to purity is unmatched.",
  },
  {
    outlet: "Wellness India",
    quote: "A brand that genuinely cares about what goes into your body. Lab-tested, pure, and trustworthy.",
  },
];

export function PressMentions() {
  return (
    <section className="py-14 md:py-20 bg-eneera-linen/50 relative overflow-hidden">
      {/* Decorative background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Press Quotes */}
          <div className="space-y-6">
            {pressMentions.map((mention, index) => (
              <div
                key={mention.outlet}
                className="relative p-5 md:p-6 bg-background rounded-lg shadow-card"
              >
                <Quote 
                  size={28} 
                  className="absolute -top-3 -left-2 text-primary/20" 
                />
                <div className="flex items-start gap-3 mb-3">
                  <div className="px-3 py-1.5 bg-eneera-cream rounded text-sm font-semibold text-foreground">
                    {mention.outlet}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic text-sm md:text-base">
                  "{mention.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Right: Achievement */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              <span className="w-6 h-[1px] bg-primary" />
              Recognition
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
              Committed to
              <span className="block text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm md:text-base">
              Our dedication to purity and quality has earned recognition from 
              health experts and satisfied customers alike. Every product we 
              offer is a testament to our unwavering standards.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary mb-0.5">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Lab Tested</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary mb-0.5">10k+</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary mb-0.5">6+</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
