import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  tagline: string;
  price: number;
  image: string;
  slug: string;
  index?: number;
}

export function ProductCard({ name, tagline, price, image, slug, index = 0 }: ProductCardProps) {
  return (
    <Link
      to={`/products/${slug}`}
      className="group block fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-eneera-linen mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-eneera-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick view badge */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-2 px-4 py-2 bg-background text-foreground text-xs tracking-[0.1em] uppercase font-medium">
            View Details
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-4 left-4 w-8 h-[1px] bg-eneera-gold" />
          <div className="absolute top-4 left-4 w-[1px] h-8 bg-eneera-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm font-medium text-primary whitespace-nowrap mt-1">
            ₹{price.toLocaleString('en-IN')}
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tagline}
        </p>
      </div>
    </Link>
  );
}