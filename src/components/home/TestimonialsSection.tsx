import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The raw forest honey is absolutely divine! You can really taste the difference from store-bought honey. My family now uses it daily.",
    product: "Raw Forest Honey",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Finally found organic jaggery that tastes like my grandmother used to make. Pure, unadulterated, and delicious. Highly recommend!",
    product: "Organic Jaggery",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Anita Desai",
    location: "Delhi",
    rating: 5,
    text: "I've been using the moringa powder for 3 months now. My energy levels have improved significantly. Great quality product!",
    product: "Moringa Powder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Suresh Nair",
    location: "Chennai",
    rating: 5,
    text: "The turmeric powder has a beautiful golden color and amazing aroma. You can tell it's high quality. Lab-tested really means something here.",
    product: "Turmeric Powder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-2">
            <span className="w-6 h-[1px] bg-primary" />
            Customer Love
            <span className="w-6 h-[1px] bg-primary" />
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-1">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-sm">
            Real stories from our ENEERA family
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 rounded-full bg-eneera-cream flex items-center justify-center shadow-soft hover:shadow-card transition-shadow z-10"
          >
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 rounded-full bg-eneera-cream flex items-center justify-center shadow-soft hover:shadow-card transition-shadow z-10"
          >
            <ChevronRight size={18} className="text-foreground" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-eneera-cream rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-eneera-gold text-eneera-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-5 max-w-xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].product}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
