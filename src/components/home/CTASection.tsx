import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-eneera-deep-green" />
      
      {/* Decorative patterns */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--eneera-gold) / 0.3), transparent 70%)`,
        }}
      />
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-primary-foreground/10" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-primary-foreground/10" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-eneera-gold/10" />

      <div className="container-narrow relative text-center text-primary-foreground">
        <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary-foreground/60 mb-8">
          <span className="w-6 h-[1px] bg-primary-foreground/30" />
          Begin Your Journey
          <span className="w-6 h-[1px] bg-primary-foreground/30" />
        </span>

        <h2 className="font-serif text-display text-primary-foreground mb-6">
          Experience clean nutrition.
        </h2>
        
        <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-lg mx-auto leading-relaxed">
          Browse our carefully curated selection of premium organic products. 
          Each one chosen for its purity and quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="btn-premium group bg-background text-foreground hover:bg-eneera-cream"
          >
            <span className="relative z-10 flex items-center gap-3">
              Shop Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          <Link
            to="/contact"
            className="btn-premium border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60"
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>

        {/* Trust badge */}
        <div className="mt-16 inline-flex items-center gap-4 px-6 py-3 border border-primary-foreground/20 text-primary-foreground/60">
          <span className="text-[11px] tracking-[0.15em] uppercase">
            India-Wide Delivery
          </span>
          <span className="w-[1px] h-4 bg-primary-foreground/20" />
          <span className="text-[11px] tracking-[0.15em] uppercase">
            Secure Payments
          </span>
          <span className="w-[1px] h-4 bg-primary-foreground/20" />
          <span className="text-[11px] tracking-[0.15em] uppercase">
            Quality Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}