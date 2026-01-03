import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Star, Sparkles } from "lucide-react";

const justLaunchedProducts = [
  {
    name: "Premium Jamun Honey",
    tagline: "Wild Blackberry Nectar",
    price: 749,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop",
    slug: "jamun-honey",
    rating: 4.9,
    reviews: 23,
    servings: "500g",
  },
  {
    name: "Date Palm Jaggery",
    tagline: "Rare Winter Harvest",
    price: 449,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop",
    slug: "date-palm-jaggery",
    rating: 4.8,
    reviews: 18,
    servings: "400g",
  },
  {
    name: "Ashwagandha Powder",
    tagline: "Adaptogenic Wellness",
    price: 549,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop",
    slug: "ashwagandha-powder",
    rating: 4.9,
    reviews: 31,
    servings: "100g",
  },
  {
    name: "Tulsi Honey Blend",
    tagline: "Immunity Booster",
    price: 699,
    originalPrice: 849,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop",
    slug: "tulsi-honey",
    rating: 4.7,
    reviews: 15,
    servings: "350g",
  },
];

const JustLaunched = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-eneera-cream via-eneera-linen to-eneera-gold-light overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-eneera-gold/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full" />
        
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-eneera-gold" />
              <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
                New Arrivals
              </span>
              <Sparkles className="w-5 h-5 text-eneera-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Just Launched
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Discover our newest additions. Carefully sourced, 
              lab-tested, and crafted for your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Launch Offer Banner */}
      <section className="py-4 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <p className="text-sm md:text-base tracking-wide">
            🎉 Launch Special: Get <strong>20% OFF</strong> on all new products • Use code: <strong>NEWLAUNCH20</strong>
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {justLaunchedProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-eneera-cream mb-4 shadow-soft group-hover:shadow-card transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* New Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-eneera-gold text-eneera-charcoal text-[10px] uppercase tracking-wider font-bold rounded-full flex items-center gap-1">
                      <Sparkles size={12} />
                      New
                    </span>
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full">
                      20% OFF
                    </span>
                  </div>

                  {/* Quick View */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-eneera-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-2.5 bg-background text-foreground text-xs uppercase tracking-wider font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="fill-eneera-gold text-eneera-gold" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="font-serif text-base md:text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{product.tagline}</p>
                <p className="text-xs text-primary mb-2">{product.servings}</p>
                
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-eneera-cream">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "100% Natural", sublabel: "No Preservatives" },
              { label: "Lab Tested", sublabel: "Quality Assured" },
              { label: "Farm Fresh", sublabel: "Direct Sourcing" },
              { label: "Free Shipping", sublabel: "On Orders ₹750+" },
            ].map((feature, index) => (
              <div key={index}>
                <p className="font-serif text-lg text-foreground">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JustLaunched;
