import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const categories = [
  { id: "all", label: "All Products", slug: "/products" },
  { id: "honey", label: "Honey", slug: "/products?category=honey" },
  { id: "jaggery", label: "Jaggery", slug: "/products?category=jaggery" },
  { id: "superfoods", label: "Superfoods", slug: "/products?category=superfoods" },
  { id: "oils", label: "Oils", slug: "/products?category=oils" },
];

const categoryProducts: Record<string, Array<{
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  image: string;
  slug: string;
  badge: string | null;
  rating: number;
  reviews: number;
}>> = {
  all: [
    { name: "Raw Forest Honey", tagline: "Unprocessed. Wild-harvested.", price: 649, originalPrice: 799, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop", slug: "raw-forest-honey", badge: "Bestseller", rating: 4.9, reviews: 127 },
    { name: "Organic Jaggery", tagline: "Traditional process. Pure cane.", price: 289, originalPrice: 349, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "organic-jaggery", badge: null, rating: 4.8, reviews: 89 },
    { name: "Moringa Powder", tagline: "Shade-dried. Nutrient-rich.", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop", slug: "moringa-powder", badge: "New", rating: 4.7, reviews: 54 },
    { name: "Turmeric Powder", tagline: "High curcumin. Lab verified.", price: 349, originalPrice: 399, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop", slug: "turmeric-powder", badge: null, rating: 4.9, reviews: 112 },
  ],
  honey: [
    { name: "Raw Forest Honey", tagline: "Unprocessed. Wild-harvested.", price: 649, originalPrice: 799, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop", slug: "raw-forest-honey", badge: "Bestseller", rating: 4.9, reviews: 127 },
    { name: "Multifloral Honey", tagline: "Diverse flora. Rich taste.", price: 549, originalPrice: 649, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop", slug: "multifloral-honey", badge: null, rating: 4.8, reviews: 76 },
  ],
  jaggery: [
    { name: "Organic Jaggery", tagline: "Traditional process. Pure cane.", price: 289, originalPrice: 349, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "organic-jaggery", badge: null, rating: 4.8, reviews: 89 },
    { name: "Jaggery Powder", tagline: "Easy to use. Same goodness.", price: 249, originalPrice: 299, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "jaggery-powder", badge: "New", rating: 4.7, reviews: 45 },
  ],
  superfoods: [
    { name: "Moringa Powder", tagline: "Shade-dried. Nutrient-rich.", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop", slug: "moringa-powder", badge: "New", rating: 4.7, reviews: 54 },
    { name: "Turmeric Powder", tagline: "High curcumin. Lab verified.", price: 349, originalPrice: 399, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop", slug: "turmeric-powder", badge: null, rating: 4.9, reviews: 112 },
    { name: "Amla Powder", tagline: "Vitamin C powerhouse.", price: 329, originalPrice: 399, image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&h=600&fit=crop", slug: "amla-powder", badge: null, rating: 4.6, reviews: 38 },
  ],
  oils: [
    { name: "Cold-Pressed Coconut Oil", tagline: "Virgin. Unrefined.", price: 549, originalPrice: 649, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=600&fit=crop", slug: "coconut-oil", badge: null, rating: 4.8, reviews: 67 },
    { name: "Groundnut Oil", tagline: "Traditional pressed.", price: 449, originalPrice: 549, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop", slug: "groundnut-oil", badge: null, rating: 4.7, reviews: 42 },
  ],
};

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrollPosition, setScrollPosition] = useState(0);

  const products = categoryProducts[activeCategory] || categoryProducts.all;
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollPosition < products.length - 4;

  const scrollProducts = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - 1));
    } else {
      setScrollPosition(Math.min(products.length - 4, scrollPosition + 1));
    }
  };

  return (
    <section className="py-14 md:py-20 bg-eneera-linen">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
            <span className="w-6 h-[1px] bg-primary" />
            Shop by Category
            <span className="w-6 h-[1px] bg-primary" />
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
            Explore Our Range
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setScrollPosition(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-background text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {products.length > 4 && (
            <>
              <button
                onClick={() => scrollProducts('left')}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-background shadow-elevated flex items-center justify-center transition-all ${
                  canScrollLeft ? "opacity-100 hover:scale-110" : "opacity-0 pointer-events-none"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollProducts('right')}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-background shadow-elevated flex items-center justify-center transition-all ${
                  canScrollRight ? "opacity-100 hover:scale-110" : "opacity-0 pointer-events-none"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-5 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${scrollPosition * (100 / 4 + 5)}%)` }}
            >
              {products.map((product, index) => (
                <Link
                  key={`${product.slug}-${index}`}
                  to={`/products/${product.slug}`}
                  className="group flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-background mb-3 shadow-soft group-hover:shadow-card transition-shadow duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                    {/* Quick Add */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-eneera-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-full py-2 bg-background text-foreground text-xs uppercase tracking-wider font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        Quick View
                      </button>
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
                    <span className="font-semibold text-foreground">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
