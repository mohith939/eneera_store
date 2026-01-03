import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/home/ProductCard";

const allProducts = [
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
  {
    name: "Cold-Pressed Coconut Oil",
    tagline: "Virgin. Unrefined. Aromatic.",
    price: 549,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=750&fit=crop",
    slug: "coconut-oil",
  },
  {
    name: "Organic Amla Powder",
    tagline: "Vitamin C powerhouse. Natural drying.",
    price: 329,
    image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&h=750&fit=crop",
    slug: "amla-powder",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-eneera-cream">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 fade-in-up">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto fade-in-up stagger-1">
            Carefully sourced. Lab tested. Honestly presented.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {allProducts.map((product, index) => (
              <ProductCard key={product.slug} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-eneera-cream border-t border-border">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground">
            All products are certified organic and third-party lab tested.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
