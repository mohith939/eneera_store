import { Link } from "react-router-dom";

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
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-[4/5] bg-eneera-cream overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
      </div>
      
      <div className="space-y-1">
        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {tagline}
        </p>
        <p className="text-sm font-medium text-foreground pt-2">
          ₹{price.toLocaleString('en-IN')}
        </p>
      </div>
    </Link>
  );
}
