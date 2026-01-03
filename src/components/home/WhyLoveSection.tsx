const reasons = [
  {
    title: "Beyond Clean",
    description: "Nothing hidden, nothing artificial—just clean, honest nutrition made for real results.",
    color: "bg-amber-100",
  },
  {
    title: "Super Tasty",
    description: "So smooth and delicious, you won't believe it's healthy—no chalky texture, no trade-offs, just pure yum!",
    color: "bg-amber-200",
  },
  {
    title: "Consciously Crafted",
    description: "In-house made, third-party tested, and crafted with care for you and your family.",
    color: "bg-amber-300",
  },
];

export function WhyLoveSection() {
  return (
    <section className="py-14 md:py-20 bg-eneera-cream">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-eneera-linen overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop"
                  alt="ENEERA Premium Product"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-primary/20" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
              Why you'll love ENEERA
            </h2>

            <div className="space-y-3">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`${reason.color} rounded-lg p-4 flex items-start gap-4 transition-transform duration-300 hover:translate-x-2`}
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-base md:text-lg text-eneera-charcoal font-medium mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-eneera-charcoal/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
