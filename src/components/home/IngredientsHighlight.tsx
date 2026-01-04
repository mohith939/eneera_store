import { Link } from "react-router-dom";

const ingredients = [
  {
    name: "Raw Honey",
    source: "Western Ghats",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    benefit: "Natural immunity booster",
    slug: "raw-forest-honey",
  },
  {
    name: "Organic Jaggery",
    source: "Maharashtra",
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=400&h=400&fit=crop",
    benefit: "Rich in iron & minerals",
    slug: "organic-jaggery",
  },
  {
    name: "Moringa",
    source: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=400&h=400&fit=crop",
    benefit: "90+ nutrients",
    slug: "moringa-powder",
  },
  {
    name: "Turmeric",
    source: "Lakadong, Meghalaya",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    benefit: "High curcumin content",
    slug: "turmeric-powder",
  },
];

export function IngredientsHighlight() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
            <span className="w-6 h-[1px] bg-primary" />
            Sourced with Care
            <span className="w-6 h-[1px] bg-primary" />
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
            Our Hero Ingredients
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Every ingredient is carefully sourced from India's finest regions, 
            ensuring maximum potency and authenticity.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ingredients.map((ingredient) => (
            <Link
              key={ingredient.name}
              to={`/products/${ingredient.slug}`}
              className="group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eneera-charcoal/60 via-transparent to-transparent" />
                
                {/* Source Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                  <span className="text-[10px] text-foreground font-medium">
                    📍 {ingredient.source}
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs text-white/80 mb-0.5">{ingredient.benefit}</p>
                </div>
              </div>

              <h3 className="font-serif text-base md:text-lg text-foreground text-center group-hover:text-primary transition-colors">
                {ingredient.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
