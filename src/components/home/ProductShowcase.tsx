import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductBenefit {
  title: string;
  points: string[];
  position: "left" | "right";
}

interface ShowcaseProduct {
  name: string;
  tagline: string;
  image: string;
  slug: string;
  benefits: ProductBenefit[];
}

const showcaseProducts: ShowcaseProduct[] = [
  {
    name: "Raw Forest Honey",
    tagline: "Nature's Purest Sweetness",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=700&fit=crop",
    slug: "raw-forest-honey",
    benefits: [
      {
        title: "Unprocessed",
        points: ["Raw & natural", "No heating", "Enzyme-rich"],
        position: "left",
      },
      {
        title: "Forest Sourced",
        points: ["Wild bee colonies", "Pristine forests", "Chemical-free zones"],
        position: "left",
      },
      {
        title: "Lab Tested",
        points: ["Purity verified", "Heavy metal free", "No adulteration"],
        position: "right",
      },
      {
        title: "Rich in Nutrients",
        points: ["Natural antioxidants", "Vitamins & minerals", "Immunity boost"],
        position: "right",
      },
    ],
  },
  {
    name: "Organic Jaggery",
    tagline: "Traditional Sweetness, Pure Goodness",
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&h=700&fit=crop",
    slug: "organic-jaggery",
    benefits: [
      {
        title: "Traditional Process",
        points: ["Slow cooking", "Open pan method", "No chemicals"],
        position: "left",
      },
      {
        title: "Farm Fresh",
        points: ["Single origin", "Organic farms", "Traceable source"],
        position: "left",
      },
      {
        title: "Iron Rich",
        points: ["Natural iron content", "Blood building", "Energy boosting"],
        position: "right",
      },
      {
        title: "Zero Additives",
        points: ["No preservatives", "No color added", "100% pure cane"],
        position: "right",
      },
    ],
  },
  {
    name: "Moringa Powder",
    tagline: "The Miracle Superfood",
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=600&h=700&fit=crop",
    slug: "moringa-powder",
    benefits: [
      {
        title: "Shade Dried",
        points: ["Maximum nutrients", "Vibrant color", "Natural enzymes"],
        position: "left",
      },
      {
        title: "Single Origin",
        points: ["Tamil Nadu farms", "Organic certified", "Hand harvested"],
        position: "left",
      },
      {
        title: "Nutrient Dense",
        points: ["90+ nutrients", "High protein", "Essential minerals"],
        position: "right",
      },
      {
        title: "Premium Quality",
        points: ["Fine texture", "Mild taste", "Easy to use"],
        position: "right",
      },
    ],
  },
  {
    name: "Turmeric Powder",
    tagline: "Golden Spice, Golden Health",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=700&fit=crop",
    slug: "turmeric-powder",
    benefits: [
      {
        title: "High Curcumin",
        points: ["5%+ curcumin", "Potent antioxidant", "Anti-inflammatory"],
        position: "left",
      },
      {
        title: "Single Origin",
        points: ["Lakadong variety", "Northeast India", "Premium grade"],
        position: "left",
      },
      {
        title: "Lab Verified",
        points: ["Curcumin tested", "No lead content", "100% pure"],
        position: "right",
      },
      {
        title: "Health Benefits",
        points: ["Joint support", "Immunity boost", "Skin health"],
        position: "right",
      },
    ],
  },
];

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = showcaseProducts[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? showcaseProducts.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === showcaseProducts.length - 1 ? 0 : prev + 1
    );
  };

  const leftBenefits = product.benefits.filter((b) => b.position === "left");
  const rightBenefits = product.benefits.filter((b) => b.position === "right");

  return (
    <section className="py-section bg-background relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-4">
            <span className="w-6 h-[1px] bg-primary" />
            Nature's Finest Ingredients
            <span className="w-6 h-[1px] bg-primary" />
          </span>
          <h2 className="font-serif text-display text-foreground">
            {product.name}
          </h2>
        </div>

        {/* Product Showcase Layout */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background border border-border shadow-card flex items-center justify-center hover:bg-eneera-cream hover:border-primary transition-all duration-300 group"
            aria-label="Previous product"
          >
            <ChevronLeft size={24} className="text-foreground group-hover:text-primary transition-colors" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background border border-border shadow-card flex items-center justify-center hover:bg-eneera-cream hover:border-primary transition-all duration-300 group"
            aria-label="Next product"
          >
            <ChevronRight size={24} className="text-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center px-16">
            {/* Left Benefits */}
            <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
              {leftBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-right animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h4 className="font-serif text-lg md:text-xl text-foreground mb-2 underline underline-offset-4 decoration-primary/50">
                    {benefit.title}
                  </h4>
                  <ul className="space-y-1">
                    {benefit.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-muted-foreground"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Center Product Image */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative max-w-md mx-auto">
                {/* Decorative circle */}
                <div className="absolute inset-0 -m-8 rounded-full bg-eneera-cream/50" />
                
                {/* Product Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-dramatic">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Tagline */}
                <p className="text-center mt-6 text-sm text-primary tracking-wide uppercase font-medium">
                  {product.tagline}
                </p>
              </div>
            </div>

            {/* Right Benefits */}
            <div className="lg:col-span-3 space-y-8 order-3">
              {rightBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-left animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.15}s` }}
                >
                  <h4 className="font-serif text-lg md:text-xl text-foreground mb-2 underline underline-offset-4 decoration-primary/50">
                    {benefit.title}
                  </h4>
                  <ul className="space-y-1">
                    {benefit.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-muted-foreground"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {showcaseProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-[0.15em] uppercase rounded-full hover:bg-eneera-deep-green transition-all duration-300 shadow-card hover:shadow-dramatic"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
