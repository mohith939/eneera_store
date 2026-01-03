const processSteps = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    title: "Farm to Table Sourcing",
    description: "Direct partnerships with organic farmers",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    title: "Traditional Processing",
    description: "Time-tested methods preserved",
  },
  {
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    title: "Lab Tested Quality",
    description: "Third-party verified purity",
  },
];

export function ProcessSection() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container-wide">
        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-eneera-charcoal/80 via-eneera-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-serif text-base md:text-lg text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-white/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
