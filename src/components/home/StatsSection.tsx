const stats = [
  {
    value: "10,000+",
    label: "Happy Customers",
    description: "Families trust ENEERA",
  },
  {
    value: "100%",
    label: "Lab Tested",
    description: "Every batch verified",
  },
  {
    value: "25+",
    label: "States Served",
    description: "Across India",
  },
  {
    value: "4.9★",
    label: "Average Rating",
    description: "Customer reviews",
  },
];

export function StatsSection() {
  return (
    <section className="py-10 md:py-14 bg-eneera-deep-green text-primary-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-eneera-gold mb-1">
                {stat.value}
              </p>
              <p className="font-medium text-sm uppercase tracking-wide mb-0.5">
                {stat.label}
              </p>
              <p className="text-xs text-primary-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
