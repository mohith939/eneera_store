import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const promoSlides = [
  {
    id: 1,
    text: "Free Shipping on Orders Above ₹999",
    highlight: "Free Shipping",
  },
  {
    id: 2,
    text: "New Arrivals — Organic Cold-Pressed Oils",
    highlight: "New Arrivals",
  },
  {
    id: 3,
    text: "Lab-Tested Purity — Every Batch Certified",
    highlight: "Lab-Tested",
  },
  {
    id: 4,
    text: "First Order? Use Code PURE10 for 10% Off",
    highlight: "PURE10",
  },
];

export function PromoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
  };

  return (
    <div className="bg-eneera-deep-green text-primary-foreground relative overflow-hidden">
      <div className="container-wide relative">
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>

        {/* Slides */}
        <div className="relative h-10 flex items-center justify-center overflow-hidden">
          {promoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-y-full"
                  : "opacity-0 translate-y-full"
              }`}
            >
              <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-center">
                <span className="text-eneera-gold font-medium">{slide.highlight}</span>
                <span className="mx-2 text-primary-foreground/40">—</span>
                <span className="text-primary-foreground/90">
                  {slide.text.replace(slide.highlight, "").replace(" — ", " ").trim()}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {promoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-eneera-gold w-3"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}