import { Link } from "react-router-dom";

export function BrandStory() {
  return (
    <section className="py-section bg-background">
      <div className="container-narrow text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Why ENEERA
        </span>
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-6 mb-8 text-balance leading-tight">
          We exist because we couldn't find 
          <span className="text-primary"> premium organic brands </span>
          we could truly believe in.
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Most organic brands focus on labels and marketing. We focus on genuine 
          purity and clean nutrition. Every product is thoughtfully sourced and 
          calmly presented, so you can trust what you consume every day.
        </p>

        <div className="section-divider mb-10" />

        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors link-underline"
        >
          Read Our Story
        </Link>
      </div>
    </section>
  );
}
