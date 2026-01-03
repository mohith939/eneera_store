import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const showcaseItems = [
  {
    id: 1,
    video: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    productImage: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=100&h=100&fit=crop",
    productName: "Raw Forest Honey",
    price: 649,
    originalPrice: 799,
    discount: 19,
    caption: "My morning wellness ritual",
  },
  {
    id: 2,
    video: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    productImage: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=100&h=100&fit=crop",
    productName: "Organic Jaggery",
    price: 289,
    originalPrice: 349,
    discount: 17,
    caption: "Sweet and healthy alternative",
  },
  {
    id: 3,
    video: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    productImage: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=100&h=100&fit=crop",
    productName: "Moringa Powder",
    price: 399,
    originalPrice: 499,
    discount: 20,
    caption: "Daily superfood boost",
  },
  {
    id: 4,
    video: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    productImage: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=100&h=100&fit=crop",
    productName: "Turmeric Powder",
    price: 349,
    originalPrice: 399,
    discount: 13,
    caption: "Golden immunity booster",
  },
  {
    id: 5,
    video: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
    productImage: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=100&h=100&fit=crop",
    productName: "Coconut Oil",
    price: 549,
    originalPrice: 649,
    discount: 15,
    caption: "Pure cold-pressed goodness",
  },
];

export function VideoShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#a8d5a0]">
      <div className="container-wide mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-eneera-charcoal/70 mb-3">
              <span className="w-6 h-[1px] bg-eneera-charcoal/30" />
              Real Stories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-eneera-charcoal">
              See What Our Customers Say
            </h2>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-soft hover:shadow-card transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-soft hover:shadow-card transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-8 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {showcaseItems.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.productName.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex-shrink-0 w-56 md:w-64 group"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Video/Image Card */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-background mb-4 shadow-card">
              <img
                src={item.video}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-eneera-charcoal/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center">
                  <Play size={24} className="text-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-background/90 font-medium truncate">
                  {item.caption}
                </p>
              </div>
              
              {/* Product thumbnail */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-14 h-14 rounded-lg overflow-hidden border-2 border-background shadow-elevated">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center">
              <h3 className="font-serif text-base text-eneera-charcoal mb-1 truncate">
                {item.productName}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold text-eneera-charcoal">₹{item.price}</span>
                <span className="text-sm text-eneera-charcoal/60 line-through">₹{item.originalPrice}</span>
                <span className="text-xs text-red-600 font-medium">{item.discount}% off</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile scroll buttons */}
      <div className="flex md:hidden items-center justify-center gap-3 mt-6">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-soft"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-soft"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} className="text-foreground" />
        </button>
      </div>
    </section>
  );
}