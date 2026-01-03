import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eneera-cream/50 to-background" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-narrow relative z-10 text-center py-20 md:py-32">
        <div className="fade-in-up">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Premium Organic Nutrition
          </span>
        </div>

        <h1 className="fade-in-up stagger-1 font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 text-balance">
          Purity you can trust.
          <br />
          <span className="text-primary">Nutrition you deserve.</span>
        </h1>

        <p className="fade-in-up stagger-2 max-w-xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
          We source carefully, test every product, and present clean nutrition 
          without noise or exaggeration.
        </p>

        <div className="fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Explore Products
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/quality"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors link-underline"
          >
            Our Standards
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
