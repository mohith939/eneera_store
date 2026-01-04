import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Star, Grid3X3, LayoutList, ChevronDown, X, ShoppingBag, Eye } from "lucide-react";

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
      {/* Page Header */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-8 bg-gradient-to-b from-eneera-cream/50 to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Products</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                Shop All Products
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-md">
                Carefully sourced. Lab tested. Honestly presented.
              </p>
            </div>
            
            {/* Sort & View Controls */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-background border border-border px-4 py-2.5 pr-10 rounded-lg text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-colors"
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
              <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}`}
                  aria-label="List view"
                >
                  <LayoutList size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky */}
      <section className="sticky top-0 z-30 bg-background border-y border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="py-4 border-b border-border/50">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all font-medium ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-xs ${selectedCategory === cat.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Concern Filter */}
          <div className="py-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap uppercase tracking-wider">
              Shop by:
            </span>
            <div className="flex items-center gap-2">
              {concerns.map((concern) => (
                <button
                  key={concern.id}
                  onClick={() => handleConcernChange(concern.id)}
                  className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all border ${
                    selectedConcern === concern.id
                      ? "bg-eneera-gold text-eneera-charcoal border-eneera-gold font-medium shadow-sm"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {concern.label}
                </button>
              ))}
            </div>
            
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto px-3 py-1.5 text-xs text-destructive hover:text-destructive/80 flex items-center gap-1 whitespace-nowrap font-medium"
              >
                <X size={14} />
                Clear All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{sortedProducts.length}</span> products
            </p>
          </div>

          {/* Products */}
          <div className={`grid gap-6 md:gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
              : "grid-cols-1 lg:grid-cols-2"
          }`}>
            {sortedProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className={`group bg-background rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 ${
                  viewMode === "list" ? "flex gap-6" : "block"
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden bg-gradient-to-br from-eneera-cream to-eneera-cream/50 ${
                  viewMode === "list" ? "w-48 h-48 flex-shrink-0 rounded-l-2xl" : "aspect-square"
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full ${
                        product.badge === "Bestseller" 
                          ? "bg-primary text-primary-foreground"
                          : product.badge === "New"
                          ? "bg-eneera-gold text-eneera-charcoal"
                          : "bg-eneera-charcoal text-white"
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-destructive text-white text-[10px] font-bold rounded-full shadow-md">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <button 
                        className="flex-1 py-2.5 bg-background text-foreground text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-1.5"
                        onClick={(e) => e.preventDefault()}
                      >
                        <ShoppingBag size={14} />
                        Add
                      </button>
                      <button 
                        className="py-2.5 px-3 bg-background/90 text-foreground rounded-full hover:bg-background transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 md:p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-center py-6" : ""}`}>
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-[11px] text-muted-foreground">({product.reviews})</span>
                  </div>

                  <h3 className="font-serif text-base md:text-lg text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{product.tagline}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-lg">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                  </div>

                  {viewMode === "list" && (
                    <button 
                      className="mt-4 px-6 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-eneera-deep-green transition-colors w-fit flex items-center gap-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ShoppingBag size={14} />
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
      <section className="py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: "FSSAI Certified", sublabel: "Government Approved" },
              { label: "Lab Tested", sublabel: "Quality Assured" },
              { label: "100% Organic", sublabel: "No Chemicals" },
              { label: "Free Shipping", sublabel: "Orders ₹500+" },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <p className="text-sm md:text-base font-semibold tracking-wide">{item.label}</p>
                <p className="text-xs text-primary-foreground/70">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
