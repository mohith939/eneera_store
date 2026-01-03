import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    title: "Premium Raw Honey",
    subtitle: "Wild-Harvested from Ancient Forests",
    description: "Experience the pure taste of nature. Unprocessed, unfiltered, unpasteurized.",
    cta: "Shop Now",
    ctaLink: "/products?category=honey",
    price: "₹649/-",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=400&fit=crop",
    badge: "Bestseller",
    bgColor: "from-amber-50 to-orange-50",
  },
  {
    id: 2,
    title: "Organic Jaggery",
    subtitle: "Traditional Cane Sugar Alternative",
    description: "Made using time-tested methods. Pure, unrefined, and nutrient-rich.",
    cta: "Explore",
    ctaLink: "/products?category=jaggery",
    price: "₹289/-",
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=800&h=400&fit=crop",
    badge: "New Arrival",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    id: 3,
    title: "Superfood Collection",
    subtitle: "Moringa • Turmeric • Amla",
    description: "Lab-tested superfoods to boost your immunity and energy levels.",
    cta: "View All",
    ctaLink: "/products?category=superfoods",
    price: "From ₹329/-",
    image: "https://images.unsplash.com/photo-1622484211148-bd7e25cf1953?w=800&h=400&fit=crop",
    badge: "Limited Stock",
    bgColor: "from-lime-50 to-green-50",
  },
];

export function CampaignBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`w-full flex-shrink-0 relative bg-gradient-to-r ${banner.bgColor}`}
          >
            <div className="container-wide py-8 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  {banner.badge && (
                    <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-semibold rounded-full mb-4">
                      {banner.badge}
                    </span>
                  )}
                  
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 leading-tight">
                    {banner.title}
                  </h2>
                  
                  <p className="text-base md:text-lg text-primary font-medium mb-3">
                    {banner.subtitle}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
                    {banner.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                    <Link
                      to={banner.ctaLink}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-full hover:bg-eneera-deep-green transition-all duration-300 shadow-card"
                    >
                      {banner.cta}
                    </Link>
                    <span className="font-serif text-2xl md:text-3xl text-foreground">
                      {banner.price}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover rounded-2xl shadow-dramatic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-card hover:bg-background transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="text-foreground" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-card hover:bg-background transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-primary" 
                : "w-2 bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/10">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / banners.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}