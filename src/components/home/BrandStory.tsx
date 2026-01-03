import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-section bg-background relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative text-center">
        {/* Decorative line */}
        <div className="divider-vertical mb-12 mx-auto" />

        <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
          <span className="w-6 h-[1px] bg-primary" />
          Why ENEERA
          <span className="w-6 h-[1px] bg-primary" />
        </span>

        <h2 className="font-serif text-display text-foreground mb-10 text-balance">
          We exist because we couldn't find{" "}
          <span className="text-gradient">premium organic brands</span>{" "}
          we could truly believe in.
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-14">
          Most organic brands focus on labels and marketing. We focus on genuine 
          purity and clean nutrition. Every product is thoughtfully sourced and 
          calmly presented, so you can trust what you consume every day.
        </p>

        {/* Signature/stamp element */}
        <div className="flex items-center justify-center gap-8 mb-14">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-border" />
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center">
            <span className="font-serif text-2xl text-primary">E</span>
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-border" />
        </div>

        <Link
          to="/about"
          className="group inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase font-medium text-foreground hover:text-primary transition-colors"
        >
          Read Our Story
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}