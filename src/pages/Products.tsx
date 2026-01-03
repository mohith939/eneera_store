import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Star, SlidersHorizontal, Grid3X3, LayoutList, ChevronDown } from "lucide-react";

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
  { name: "Raw Forest Honey", tagline: "Unprocessed. Wild-harvested.", price: 649, originalPrice: 799, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop", slug: "raw-forest-honey", badge: "Bestseller", category: "honey", rating: 4.9, reviews: 127, concerns: ["immunity", "energy", "skin"] },
  { name: "Organic Jaggery", tagline: "Traditional process. Pure cane.", price: 289, originalPrice: 349, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "organic-jaggery", badge: null, category: "jaggery", rating: 4.8, reviews: 89, concerns: ["energy", "digestion"] },
  { name: "Moringa Powder", tagline: "Shade-dried. Nutrient-rich.", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=600&fit=crop", slug: "moringa-powder", badge: "New", category: "superfoods", rating: 4.7, reviews: 54, concerns: ["immunity", "energy", "weight"] },
  { name: "Turmeric Powder", tagline: "High curcumin. Lab verified.", price: 349, originalPrice: 399, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop", slug: "turmeric-powder", badge: null, category: "superfoods", rating: 4.9, reviews: 112, concerns: ["immunity", "skin", "digestion"] },
  { name: "Cold-Pressed Coconut Oil", tagline: "Virgin. Unrefined.", price: 549, originalPrice: 649, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=600&fit=crop", slug: "coconut-oil", badge: null, category: "oils", rating: 4.8, reviews: 67, concerns: ["skin", "digestion"] },
  { name: "Organic Amla Powder", tagline: "Vitamin C powerhouse.", price: 329, originalPrice: 399, image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&h=600&fit=crop", slug: "amla-powder", badge: null, category: "superfoods", rating: 4.6, reviews: 38, concerns: ["immunity", "skin"] },
  { name: "Multifloral Honey", tagline: "Diverse flora. Rich taste.", price: 549, originalPrice: 649, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop", slug: "multifloral-honey", badge: null, category: "honey", rating: 4.8, reviews: 76, concerns: ["immunity", "energy"] },
  { name: "Jaggery Powder", tagline: "Easy to use. Same goodness.", price: 249, originalPrice: 299, image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=600&fit=crop", slug: "jaggery-powder", badge: "New", category: "jaggery", rating: 4.7, reviews: 45, concerns: ["energy", "digestion"] },
  { name: "Groundnut Oil", tagline: "Traditional pressed.", price: 449, originalPrice: 549, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop", slug: "groundnut-oil", badge: null, category: "oils", rating: 4.7, reviews: 42, concerns: ["digestion"] },
  { name: "Wild Jamun Honey", tagline: "Seasonal. Limited batch.", price: 749, originalPrice: 899, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop", slug: "jamun-honey", badge: "Limited", category: "honey", rating: 4.9, reviews: 23, concerns: ["immunity", "digestion"] },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const concernParam = searchParams.get("concern") || "";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedConcern, setSelectedConcern] = useState(concernParam);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

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

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-eneera-cream to-background">
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

      {/* Shop by Concern */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
            <span className="text-sm font-medium text-foreground whitespace-nowrap">Shop by Concern:</span>
            {concerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => handleConcernChange(concern.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedConcern === concern.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-eneera-cream text-foreground hover:bg-secondary"
                }`}
              >
                {concern.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-section bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="sticky top-32 space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-eneera-cream text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-xs ${selectedCategory === cat.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          ({cat.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-4">Price Range</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-border" />
                      Under ₹300
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-border" />
                      ₹300 - ₹500
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-border" />
                      ₹500 - ₹800
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-border" />
                      Above ₹800
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-eneera-cream rounded-lg text-sm"
                  >
                    <SlidersHorizontal size={16} />
                    Filters
                  </button>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{sortedProducts.length}</span> products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-eneera-cream px-4 py-2 pr-10 rounded-lg text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                  <div className="hidden md:flex items-center gap-1 bg-eneera-cream rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid" ? "bg-background shadow-soft" : ""}`}
                    >
                      <Grid3X3 size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list" ? "bg-background shadow-soft" : ""}`}
                    >
                      <LayoutList size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {sortedProducts.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className={`group ${viewMode === "list" ? "flex gap-6" : "block"}`}
                  >
                    <div className={`relative overflow-hidden bg-eneera-cream mb-4 shadow-soft group-hover:shadow-card transition-all duration-300 ${
                      viewMode === "list" ? "w-48 h-48 rounded-lg flex-shrink-0" : "aspect-square rounded-xl"
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Badge */}
                      {product.badge && (
                        <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-wider font-medium rounded-full ${
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
                        <span className="absolute top-3 right-3 px-2 py-1 bg-destructive text-white text-[10px] font-bold rounded-full">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    <div className={viewMode === "list" ? "flex-1" : ""}>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={14} className="fill-eneera-gold text-eneera-gold" />
                        <span className="text-sm font-medium text-foreground">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      <h3 className="font-serif text-base md:text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">{product.tagline}</p>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                        )}
                      </div>

                      {viewMode === "list" && (
                        <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-medium rounded-full hover:bg-eneera-deep-green transition-colors">
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-primary text-primary-foreground">
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
