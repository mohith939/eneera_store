import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("featured-products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-eneera-cream via-background to-eneera-linen" />
        
        {/* Subtle radial accent */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--eneera-gold-light)), transparent)",
          }}
        />

        {/* Geometric pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full border border-primary/10 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/3 right-[15%] w-48 h-48 rounded-full border border-eneera-gold/10 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-[8%] w-20 h-20 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="fade-in-up text-center mb-8">
            <span className="inline-flex items-center gap-3 text-[11px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground">
              <span className="w-8 h-[1px] bg-primary/40" />
              Premium Organic Nutrition
              <span className="w-8 h-[1px] bg-primary/40" />
            </span>
          </div>

          {/* Main headline */}
          <h1 className="fade-in-up stagger-1 text-center font-serif text-display-xl text-foreground mb-8">
            <span className="block">Purity you can</span>
            <span className="text-gradient">trust.</span>
          </h1>

          {/* Subheadline */}
          <p className="fade-in-up stagger-2 text-center max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
            We source carefully, test every product, and present clean nutrition 
            without noise or exaggeration. Because your health deserves honesty.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/products"
              className="btn-premium group bg-primary text-primary-foreground hover:bg-eneera-deep-green"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/quality"
              className="btn-premium border border-foreground/20 text-foreground hover:border-primary hover:text-primary"
            >
              <span className="relative z-10">Our Standards</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="fade-in-up stagger-4 flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-20">
            {[
              { label: "Lab Tested", value: "100%" },
              { label: "Organic Certified", value: "FSSAI" },
              { label: "Known Sources", value: "Every Product" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-primary mb-1">{item.value}</p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Discover</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
}