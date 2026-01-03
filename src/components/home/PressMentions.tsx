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
    <section className="py-section bg-eneera-linen/50 relative overflow-hidden">
      {/* Decorative background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Press Quotes */}
          <div className="space-y-8">
            {pressMentions.map((mention, index) => (
              <div
                key={mention.outlet}
                className="relative p-6 md:p-8 bg-background rounded-lg shadow-card"
              >
                <Quote 
                  size={32} 
                  className="absolute -top-4 -left-2 text-primary/20" 
                />
                <div className="flex items-start gap-4 mb-4">
                  <div className="px-4 py-2 bg-eneera-cream rounded text-sm font-semibold text-foreground">
                    {mention.outlet}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "{mention.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Right: Achievement */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
              <span className="w-6 h-[1px] bg-primary" />
              Recognition
            </span>
            <h2 className="font-serif text-heading text-foreground mb-4">
              Committed to
              <span className="block text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Our dedication to purity and quality has earned recognition from 
              health experts and satisfied customers alike. Every product we 
              offer is a testament to our unwavering standards.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">100%</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Lab Tested</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">10k+</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">6+</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
