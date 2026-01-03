import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    name: "Raw Forest Honey",
    tagline: "Unprocessed. Unpasteurized. Pure.",
    price: 649,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=750&fit=crop",
    slug: "raw-forest-honey",
  },
  {
    name: "Organic Jaggery",
    tagline: "Traditional process. No chemicals.",
    price: 289,
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=750&fit=crop",
    slug: "organic-jaggery",
  },
  {
    name: "Moringa Powder",
    tagline: "Shade-dried. Nutrient-dense.",
    price: 399,
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=750&fit=crop",
    slug: "moringa-powder",
  },
  {
    name: "Turmeric Powder",
    tagline: "High curcumin. Lab-verified.",
    price: 349,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=750&fit=crop",
    slug: "turmeric-powder",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-section bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Selected Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">
            Carefully sourced. Lab tested.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.slug} {...product} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors link-underline"
          >
            View All Products
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
