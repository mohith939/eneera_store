import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Star, Grid3X3, LayoutList, ChevronDown, Filter, X } from "lucide-react";

const categories = [
  { id: "all", label: "All Products", count: 10 },
  { id: "honey", label: "Honey", count: 3 },
  { id: "jaggery", label: "Jaggery", count: 2 },
  { id: "superfoods", label: "Superfoods", count: 3 },
  { id: "oils", label: "Oils", count: 2 },
];

const concerns = [
  { id: "immunity", label: "Immunity Boost" },
  { id: "energy", label: "Energy & Stamina" },
  { id: "digestion", label: "Digestion" },
  { id: "skin", label: "Skin & Hair" },
  { id: "weight", label: "Weight Management" },
];

const allProducts = [
  { name: "Raw Forest Honey", tagline: "Unprocessed. Wild-harvested.", price: 649, originalPrice: 799, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop", slug: "raw-forest-honey", badge: "Bestseller", category: "honey", rating: 4.9, reviews: 127, concerns: ["immunity", "energy", "skin"] },
  { name: "Organic Jaggery", tagline: "Traditional process. Pure cane.", price: 289, originalPrice: 349, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "organic-jaggery", badge: null, category: "jaggery", rating: 4.8, reviews: 89, concerns: ["energy", "digestion"] },
  { name: "Moringa Powder", tagline: "Shade-dried. Nutrient-rich.", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop", slug: "moringa-powder", badge: "New", category: "superfoods", rating: 4.7, reviews: 54, concerns: ["immunity", "energy", "weight"] },
  { name: "Turmeric Powder", tagline: "High curcumin. Lab verified.", price: 349, originalPrice: 399, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop", slug: "turmeric-powder", badge: null, category: "superfoods", rating: 4.9, reviews: 112, concerns: ["immunity", "skin", "digestion"] },
  { name: "Cold-Pressed Coconut Oil", tagline: "Virgin. Unrefined.", price: 549, originalPrice: 649, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=600&fit=crop", slug: "coconut-oil", badge: null, category: "oils", rating: 4.8, reviews: 67, concerns: ["skin", "digestion"] },
  { name: "Organic Amla Powder", tagline: "Vitamin C powerhouse.", price: 329, originalPrice: 399, image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&h=600&fit=crop", slug: "amla-powder", badge: null, category: "superfoods", rating: 4.6, reviews: 38, concerns: ["immunity", "skin"] },
  { name: "Multifloral Honey", tagline: "Diverse flora. Rich taste.", price: 549, originalPrice: 649, image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&h=600&fit=crop", slug: "multifloral-honey", badge: null, category: "honey", rating: 4.8, reviews: 76, concerns: ["immunity", "energy"] },
  { name: "Jaggery Powder", tagline: "Easy to use. Same goodness.", price: 249, originalPrice: 299, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "jaggery-powder", badge: "New", category: "jaggery", rating: 4.7, reviews: 45, concerns: ["energy", "digestion"] },
  { name: "Groundnut Oil", tagline: "Traditional pressed.", price: 449, originalPrice: 549, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop", slug: "groundnut-oil", badge: null, category: "oils", rating: 4.7, reviews: 42, concerns: ["digestion"] },
  { name: "Wild Jamun Honey", tagline: "Seasonal. Limited batch.", price: 749, originalPrice: 899, image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&h=600&fit=crop", slug: "jamun-honey", badge: "Limited", category: "honey", rating: 4.9, reviews: 23, concerns: ["immunity", "digestion"] },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const concernParam = searchParams.get("concern") || "";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedConcern, setSelectedConcern] = useState(concernParam);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const concernMatch = !selectedConcern || product.concerns.includes(selectedConcern);
    return categoryMatch && concernMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.badge === "New" ? 1 : -1;
      default:
        return b.badge === "Bestseller" ? 1 : -1;
    }
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setSearchParams(params);
  };

  const handleConcernChange = (concern: string) => {
    const newConcern = selectedConcern === concern ? "" : concern;
    setSelectedConcern(newConcern);
    const params = new URLSearchParams(searchParams);
    if (!newConcern) {
      params.delete("concern");
    } else {
      params.set("concern", newConcern);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedConcern("");
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedConcern !== "";

  return (
    <Layout>
      {/* Clean Header */}
      <section className="pt-24 pb-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                Shop All Products
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Carefully sourced. Lab tested. Honestly presented.
              </p>
            </div>
            
            {/* Sort & View on Desktop */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-background border border-border px-4 py-2 pr-10 rounded-lg text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-1 border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                >
                  <LayoutList size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 bg-eneera-cream border-b border-border sticky top-[72px] z-20">
        <div className="container-wide">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all font-medium ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-secondary border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Concern Filter Bar */}
      <section className="py-3 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap uppercase tracking-wide">Shop by:</span>
            {concerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => handleConcernChange(concern.id)}
                className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  selectedConcern === concern.id
                    ? "bg-eneera-gold text-eneera-charcoal font-medium"
                    : "bg-muted text-foreground hover:bg-secondary"
                }`}
              >
                {concern.label}
              </button>
            ))}
            
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-2 px-3 py-1.5 text-xs text-destructive hover:text-destructive/80 flex items-center gap-1"
              >
                <X size={12} />
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container-wide">
          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing <span className="font-medium text-foreground">{sortedProducts.length}</span> products
          </p>

          {/* Products */}
          <div className={`grid gap-4 md:gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
              : "grid-cols-1 md:grid-cols-2"
          }`}>
            {sortedProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className={`group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-300 ${
                  viewMode === "list" ? "flex" : "block"
                }`}
              >
                <div className={`relative overflow-hidden bg-eneera-cream ${
                  viewMode === "list" ? "w-40 h-40 flex-shrink-0" : "aspect-square"
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className={`absolute top-2 left-2 px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold rounded-full ${
                      product.badge === "Bestseller" 
                        ? "bg-primary text-primary-foreground"
                        : product.badge === "New"
                        ? "bg-eneera-gold text-eneera-charcoal"
                        : "bg-eneera-charcoal text-white"
                    }`}>
                      {product.badge}
                    </span>
                  )}

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <span className="absolute top-2 right-2 px-2 py-1 bg-destructive text-white text-[9px] font-bold rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-1.5">
                    <Star size={12} className="fill-eneera-gold text-eneera-gold" />
                    <span className="text-xs font-medium text-foreground">{product.rating}</span>
                    <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                  </div>

                  <h3 className="font-serif text-sm md:text-base text-foreground mb-0.5 group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mb-2 line-clamp-1">{product.tagline}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground text-sm">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                  </div>

                  {viewMode === "list" && (
                    <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-medium rounded-full hover:bg-eneera-deep-green transition-colors w-fit">
                      Add to Cart
                    </button>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <span className="text-xs tracking-wider uppercase">FSSAI Certified</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
            <span className="text-xs tracking-wider uppercase">Lab Tested</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
            <span className="text-xs tracking-wider uppercase">100% Organic</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
            <span className="text-xs tracking-wider uppercase">Free Shipping 500+</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;