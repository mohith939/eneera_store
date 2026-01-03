import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    name: "Raw Forest Honey",
    tagline: "Unprocessed. Unpasteurized. Harvested from pristine forest regions.",
    price: 649,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=800&fit=crop",
    slug: "raw-forest-honey",
  },
  {
    name: "Organic Jaggery",
    tagline: "Traditional process. Zero chemicals. Pure cane sweetness.",
    price: 289,
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=800&fit=crop",
    slug: "organic-jaggery",
  },
  {
    name: "Moringa Powder",
    tagline: "Shade-dried leaves. Maximum nutrient retention. Lab verified.",
    price: 399,
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=800&fit=crop",
    slug: "moringa-powder",
  },
  {
    name: "Turmeric Powder",
    tagline: "High curcumin content. Single-origin. Third-party tested.",
    price: 349,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=800&fit=crop",
    slug: "turmeric-powder",
  },
];

export function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-section bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-eneera-linen/50 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
              <span className="w-6 h-[1px] bg-primary" />
              Selected Products
            </span>
            <h2 className="font-serif text-heading text-foreground">
              Carefully sourced.<br />
              <span className="text-gradient">Lab tested.</span>
            </h2>
          </div>
          
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase font-medium text-foreground hover:text-primary transition-colors"
          >
            View All Products
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.slug} {...product} index={index} />
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="section-divider mt-20" />
      </div>
    </section>
  );
}