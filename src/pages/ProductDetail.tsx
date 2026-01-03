import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Star, Minus, Plus, ChevronDown, ChevronUp, Check, Truck, Shield, Award, Leaf, FlaskConical, Heart, Share2 } from "lucide-react";

// Product data (would come from API/database in real app)
const productsData: Record<string, {
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  images: string[];
  rating: number;
  reviews: number;
  description: string;
  variants: { name: string; price: number; originalPrice: number }[];
  whatsInside: string[];
  perfectFor: string[];
  offLimits: string[];
  certifications: string[];
  shelfLife: string;
  moreInfo: string;
}> = {
  "raw-forest-honey": {
    name: "Raw Forest Honey",
    tagline: "Unprocessed. Wild-harvested. Pure.",
    price: 649,
    originalPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&h=800&fit=crop",
    ],
    rating: 4.9,
    reviews: 127,
    description: "Our Raw Forest Honey is sourced directly from the wild forests of Western Ghats. Unprocessed and unpasteurized to preserve all natural enzymes and nutrients.",
    variants: [
      { name: "250g Jar", price: 399, originalPrice: 449 },
      { name: "500g Jar", price: 649, originalPrice: 799 },
      { name: "1kg Jar", price: 1199, originalPrice: 1499 },
    ],
    whatsInside: [
      "100% Pure Raw Honey",
      "Wild-harvested from pristine forest regions",
      "Contains natural enzymes, pollen & propolis",
      "Unheated and unprocessed to retain nutrients",
      "Rich in antioxidants and antibacterial properties",
    ],
    perfectFor: [
      "Daily wellness routine as a natural sweetener",
      "Boosting immunity and energy levels",
      "Soothing sore throats and coughs",
      "Face masks and natural skincare",
      "Those seeking an unprocessed, pure honey experience",
    ],
    offLimits: [
      "No added sugar or syrups",
      "No artificial colors or flavors",
      "No heating or pasteurization",
      "No blending with other honeys",
      "Not suitable for infants under 1 year",
    ],
    certifications: ["FSSAI", "100% Organic", "Lab Tested", "Non-GMO"],
    shelfLife: "24 months from manufacturing date",
    moreInfo: "Store in a cool, dry place. Crystallization is natural for raw honey and indicates purity. Gently warm to liquefy if needed.",
  },
  "organic-jaggery": {
    name: "Organic Jaggery",
    tagline: "Traditional process. Pure cane.",
    price: 289,
    originalPrice: 349,
    images: [
      "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=800&h=800&fit=crop",
    ],
    rating: 4.8,
    reviews: 89,
    description: "Made using traditional methods passed down through generations. Our organic jaggery retains all the natural minerals and has a rich, caramel-like taste.",
    variants: [
      { name: "500g Block", price: 289, originalPrice: 349 },
      { name: "1kg Block", price: 499, originalPrice: 599 },
    ],
    whatsInside: [
      "100% Organic Sugarcane",
      "Traditional open-pan process",
      "Rich in iron, magnesium, and potassium",
      "Natural caramel flavor",
      "No chemical processing",
    ],
    perfectFor: [
      "Replacing refined sugar in cooking",
      "Traditional Indian sweets and desserts",
      "Natural energy boost",
      "Iron supplementation naturally",
      "Health-conscious families",
    ],
    offLimits: [
      "No refined sugar added",
      "No chemical bleaching",
      "No artificial colors",
      "No preservatives",
      "No synthetic additives",
    ],
    certifications: ["FSSAI", "Organic Certified", "Lab Tested"],
    shelfLife: "12 months from manufacturing date",
    moreInfo: "Store in an airtight container away from moisture. Natural color variations may occur.",
  },
  "moringa-powder": {
    name: "Moringa Powder",
    tagline: "Shade-dried. Nutrient-rich.",
    price: 399,
    originalPrice: 499,
    images: [
      "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=800&h=800&fit=crop",
    ],
    rating: 4.7,
    reviews: 54,
    description: "Our Moringa is shade-dried to preserve maximum nutrients. Known as the 'Miracle Tree', it's packed with vitamins, minerals, and antioxidants.",
    variants: [
      { name: "100g Pouch", price: 399, originalPrice: 499 },
      { name: "250g Pouch", price: 849, originalPrice: 1049 },
    ],
    whatsInside: [
      "100% Pure Moringa Leaves",
      "Shade-dried for nutrient retention",
      "Rich in Vitamin A, C, E, and K",
      "Contains all 9 essential amino acids",
      "High in iron and calcium",
    ],
    perfectFor: [
      "Adding to smoothies and juices",
      "Morning wellness routine",
      "Natural energy and immunity boost",
      "Vegetarians seeking plant protein",
      "Those looking to improve overall nutrition",
    ],
    offLimits: [
      "No fillers or binders",
      "No artificial colors",
      "No preservatives",
      "No added flavors",
      "No chemical processing",
    ],
    certifications: ["FSSAI", "Organic", "Lab Tested", "Non-GMO"],
    shelfLife: "18 months from manufacturing date",
    moreInfo: "Add 1 teaspoon to water, smoothies, or food. Start with small amounts and gradually increase.",
  },
  "turmeric-powder": {
    name: "Turmeric Powder",
    tagline: "High curcumin. Lab verified.",
    price: 349,
    originalPrice: 399,
    images: [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=800&fit=crop",
    ],
    rating: 4.9,
    reviews: 112,
    description: "Our turmeric is sourced from Lakadong region, known for the highest curcumin content. Lab-verified for purity and potency.",
    variants: [
      { name: "100g Pouch", price: 349, originalPrice: 399 },
      { name: "250g Pouch", price: 749, originalPrice: 899 },
    ],
    whatsInside: [
      "100% Pure Lakadong Turmeric",
      "7-9% Curcumin content (highest in India)",
      "Single-origin, traceable source",
      "Stone-ground for fine texture",
      "Vibrant golden-orange color",
    ],
    perfectFor: [
      "Golden milk (Haldi Doodh)",
      "Anti-inflammatory support",
      "Cooking and food seasoning",
      "Face masks and skincare",
      "Daily wellness routine",
    ],
    offLimits: [
      "No lead oxide coloring",
      "No starch or fillers",
      "No artificial enhancers",
      "No blending with inferior varieties",
      "No chemical processing",
    ],
    certifications: ["FSSAI", "Lab Tested", "Non-GMO", "High Curcumin Certified"],
    shelfLife: "24 months from manufacturing date",
    moreInfo: "Store in a cool, dark place. For best absorption, consume with black pepper and healthy fats.",
  },
};

// Fallback product for unknown slugs
const defaultProduct = productsData["raw-forest-honey"];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug && productsData[slug] ? productsData[slug] : defaultProduct;

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<string[]>(["whats-inside"]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentVariant = product.variants[selectedVariant];
  const discount = Math.round((1 - currentVariant.price / currentVariant.originalPrice) * 100);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-eneera-cream py-3">
        <div className="container-wide">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left: Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-xl overflow-hidden bg-eneera-cream">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="space-y-6">
              {/* Title & Rating */}
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground mb-4">{product.tagline}</p>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "fill-eneera-gold text-eneera-gold"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">({product.rating})</span>
                  <span className="text-sm text-muted-foreground">{product.reviews} reviews</span>
                </div>
              </div>

              {/* Variants */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Size</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        selectedVariant === index
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-semibold text-foreground">₹{currentVariant.price}</span>
                <span className="text-lg text-muted-foreground line-through">₹{currentVariant.originalPrice}</span>
                <span className="px-2 py-1 bg-eneera-gold text-eneera-charcoal text-xs font-bold rounded">
                  {discount}% OFF
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-eneera-cream transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-eneera-cream transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button className="flex-1 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-eneera-deep-green transition-colors">
                  Add to Cart
                </button>

                <button className="p-4 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <Heart size={20} />
                </button>

                <button className="p-4 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Buy Now */}
              <button className="w-full py-4 bg-eneera-charcoal text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-foreground transition-colors">
                Buy It Now
              </button>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 py-4 border-t border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck size={18} className="text-primary" />
                  <span>Free Shipping 750+</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield size={18} className="text-primary" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award size={18} className="text-primary" />
                  <span>Lab Certified</span>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Certifications</p>
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-2 bg-eneera-cream rounded-lg">
                      <Check size={14} className="text-primary" />
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-3 pt-4">
                {/* What's Inside */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("whats-inside")}
                    className="w-full flex items-center justify-between p-4 bg-eneera-cream/50 hover:bg-eneera-cream transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Leaf size={18} className="text-primary" />
                      <span className="font-medium text-foreground">What's Inside</span>
                    </div>
                    {openAccordions.includes("whats-inside") ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {openAccordions.includes("whats-inside") && (
                    <div className="p-4 space-y-2">
                      {product.whatsInside.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Perfect For */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("perfect-for")}
                    className="w-full flex items-center justify-between p-4 bg-eneera-cream/50 hover:bg-eneera-cream transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Heart size={18} className="text-primary" />
                      <span className="font-medium text-foreground">ENEERA is Perfect For</span>
                    </div>
                    {openAccordions.includes("perfect-for") ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {openAccordions.includes("perfect-for") && (
                    <div className="p-4 space-y-2">
                      {product.perfectFor.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Off Limits */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("off-limits")}
                    className="w-full flex items-center justify-between p-4 bg-eneera-cream/50 hover:bg-eneera-cream transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-primary" />
                      <span className="font-medium text-foreground">Off Limits: What We Don't Do</span>
                    </div>
                    {openAccordions.includes("off-limits") ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {openAccordions.includes("off-limits") && (
                    <div className="p-4 space-y-2">
                      {product.offLimits.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-destructive mt-0.5 flex-shrink-0">✕</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Lab Reports */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("lab-reports")}
                    className="w-full flex items-center justify-between p-4 bg-eneera-cream/50 hover:bg-eneera-cream transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FlaskConical size={18} className="text-primary" />
                      <span className="font-medium text-foreground">Lab Reports & Certifications</span>
                    </div>
                    {openAccordions.includes("lab-reports") ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {openAccordions.includes("lab-reports") && (
                    <div className="p-4 space-y-3">
                      <p className="text-sm text-muted-foreground">
                        All our products are third-party tested for purity, quality, and safety.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {product.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2 px-4 py-2 bg-eneera-cream rounded-lg">
                            <Award size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">{cert}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Shelf Life:</strong> {product.shelfLife}
                      </p>
                    </div>
                  )}
                </div>

                {/* More Info */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("more-info")}
                    className="w-full flex items-center justify-between p-4 bg-eneera-cream/50 hover:bg-eneera-cream transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-medium">ℹ</span>
                      <span className="font-medium text-foreground">More Info</span>
                    </div>
                    {openAccordions.includes("more-info") ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {openAccordions.includes("more-info") && (
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{product.moreInfo}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Badges */}
      <section className="py-12 bg-eneera-cream">
        <div className="container-wide">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              { icon: "🌿", label: "100% Natural" },
              { icon: "🧪", label: "Lab Tested" },
              { icon: "🏆", label: "Premium Quality" },
              { icon: "🚫", label: "No Additives" },
              { icon: "🌱", label: "Organic" },
              { icon: "✓", label: "FSSAI Certified" },
            ].map((badge, index) => (
              <div key={index} className="space-y-2">
                <span className="text-2xl">{badge.icon}</span>
                <p className="text-xs font-medium text-foreground">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
