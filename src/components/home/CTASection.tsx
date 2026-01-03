import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-section bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Experience clean nutrition.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-md mx-auto">
          Browse our carefully curated selection of premium organic products.
        </p>
        <Link
          to="/products"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-sm tracking-wider uppercase hover:bg-background/90 transition-colors"
        >
          Shop Now
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
