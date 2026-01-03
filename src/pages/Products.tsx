import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const allProducts = [
  {
    name: "Raw Forest Honey",
    tagline: "Unprocessed. Unpasteurized. Pure.",
    price: 649,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop",
    slug: "raw-forest-honey",
    badge: "Bestseller",
  },
  {
    name: "Organic Jaggery",
    tagline: "Traditional process. No chemicals.",
    price: 289,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop",
    slug: "organic-jaggery",
    badge: null,
  },
  {
    name: "Moringa Powder",
    tagline: "Shade-dried. Nutrient-dense.",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop",
    slug: "moringa-powder",
    badge: "New",
  },
  {
    name: "Turmeric Powder",
    tagline: "High curcumin. Lab-verified.",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop",
    slug: "turmeric-powder",
    badge: null,
  },
  {
    name: "Cold-Pressed Coconut Oil",
    tagline: "Virgin. Unrefined. Aromatic.",
    price: 549,
    originalPrice: 649,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=600&fit=crop",
    slug: "coconut-oil",
    badge: null,
  },
  {
    name: "Organic Amla Powder",
    tagline: "Vitamin C powerhouse. Natural drying.",
    price: 329,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&h=600&fit=crop",
    slug: "amla-powder",
    badge: null,
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-eneera-cream to-background">
        <div className="container-narrow text-center">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-4">
            <span className="w-6 h-[1px] bg-primary" />
            Shop
            <span className="w-6 h-[1px] bg-primary" />
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Carefully sourced. Lab tested. Honestly presented.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {allProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-eneera-cream mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-medium rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="px-6 py-2 bg-background text-foreground text-xs uppercase tracking-wider font-medium rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-base md:text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{product.tagline}</p>
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

      {/* Info Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <p className="text-sm md:text-base tracking-wide">
            All products are FSSAI certified organic and third-party lab tested for purity.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
