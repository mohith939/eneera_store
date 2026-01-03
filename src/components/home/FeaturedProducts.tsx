import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const featuredProducts = [
  {
    name: "Raw Forest Honey",
    tagline: "Unprocessed. Wild-harvested.",
    price: 649,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop",
    slug: "raw-forest-honey",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 127,
  },
  {
    name: "Organic Jaggery",
    tagline: "Traditional process. Pure cane.",
    price: 289,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop",
    slug: "organic-jaggery",
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    name: "Moringa Powder",
    tagline: "Shade-dried. Nutrient-rich.",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop",
    slug: "moringa-powder",
    badge: "New",
    rating: 4.7,
    reviews: 54,
  },
  {
    name: "Turmeric Powder",
    tagline: "High curcumin. Lab verified.",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop",
    slug: "turmeric-powder",
    badge: null,
    rating: 4.9,
    reviews: 112,
  },
];

export function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-14 md:py-20 bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-2">
              <span className="w-6 h-[1px] bg-primary" />
              Our Bestsellers
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
              Shop Our Products
            </h2>
          </div>
          
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase font-medium text-foreground hover:text-primary transition-colors"
          >
            View All
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-eneera-cream mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-2 left-2 px-2.5 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-medium rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-eneera-gold text-eneera-charcoal text-[10px] font-bold rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}

                {/* Quick view hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 bg-background text-foreground text-xs uppercase tracking-wider font-medium rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-1.5">
                <Star size={12} className="fill-eneera-gold text-eneera-gold" />
                <span className="text-xs font-medium text-foreground">{product.rating}</span>
                <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
              </div>

              <h3 className="font-serif text-sm md:text-base text-foreground mb-0.5 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-[11px] text-muted-foreground mb-1.5">{product.tagline}</p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
