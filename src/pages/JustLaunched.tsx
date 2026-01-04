import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Star, Sparkles, ShoppingBag, ArrowRight, Leaf, Shield, Truck, Award } from "lucide-react";

const justLaunchedProducts = [
  {
    name: "Premium Jamun Honey",
    tagline: "Wild Blackberry Nectar",
    description: "Harvested from pristine forests during the jamun season",
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
    description: "Traditional Bengal jaggery with rich caramel notes",
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
    description: "KSM-66 certified for maximum bioavailability",
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
    description: "Raw honey infused with holy basil extract",
    price: 699,
    originalPrice: 849,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop",
    slug: "tulsi-honey",
    rating: 4.7,
    reviews: 15,
    servings: "350g",
  },
];

const features = [
  { icon: Leaf, label: "100% Natural", sublabel: "No Preservatives" },
  { icon: Shield, label: "Lab Tested", sublabel: "Quality Assured" },
  { icon: Award, label: "Farm Fresh", sublabel: "Direct Sourcing" },
  { icon: Truck, label: "Free Shipping", sublabel: "Orders ₹750+" },
];

const JustLaunched = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-eneera-cream via-background to-eneera-gold-light/30 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/10 rounded-full animate-float opacity-60" />
        <div className="absolute bottom-20 right-16 w-40 h-40 border-2 border-eneera-gold/20 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-eneera-gold/10 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 md:mb-12">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Just Launched</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-eneera-gold/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-eneera-gold" />
              <span className="text-xs tracking-[0.15em] uppercase text-primary font-semibold">
                New Arrivals
              </span>
              <Sparkles className="w-4 h-4 text-eneera-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Just Launched
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Discover our newest additions. Carefully sourced, 
              lab-tested, and crafted for your well-being.
            </p>

            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-eneera-deep-green transition-colors"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Launch Offer Banner */}
      <section className="py-4 md:py-5 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <span>🎉</span>
            <span>Launch Special: Get</span>
            <strong className="text-eneera-gold">20% OFF</strong>
            <span>on all new products</span>
            <span className="hidden md:inline">•</span>
            <span>Use code:</span>
            <code className="bg-primary-foreground/20 px-2 py-0.5 rounded font-mono text-sm">NEWLAUNCH20</code>
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {justLaunchedProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group block"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-eneera-cream to-eneera-cream/50 mb-5 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-eneera-gold text-eneera-charcoal text-[10px] uppercase tracking-wider font-bold rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles size={12} />
                      New
                    </span>
                    <span className="px-2.5 py-1.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full shadow-md">
                      20% OFF
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-5 left-5 right-5">
                      <button 
                        className="w-full py-3 bg-background text-foreground text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2 shadow-lg"
                        onClick={(e) => e.preventDefault()}
                      >
                        <ShoppingBag size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={i < Math.floor(product.rating) ? "fill-eneera-gold text-eneera-gold" : "text-border"} 
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-foreground">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                  
                  <p className="text-xs text-primary font-medium">{product.servings}</p>
                  
                  <div className="flex items-center gap-2 pt-1">
                    <span className="font-bold text-foreground text-lg">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-eneera-cream/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="font-serif text-base md:text-lg text-foreground mb-1">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Explore Our Full Collection
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Discover more organic products crafted with care and tradition.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-eneera-deep-green transition-colors shadow-md"
          >
            Shop All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default JustLaunched;
