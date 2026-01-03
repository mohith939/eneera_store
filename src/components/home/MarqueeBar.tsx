export function MarqueeBar() {
  const items = [
    "100% Organic",
    "Lab Certified",
    "No Added Sugar",
    "Zero Additives",
    "Sustainably Sourced",
    "Tested for Purity",
    "Non-GMO",
    "100% Clean",
    "Ethically Made",
    "FSSAI Certified",
  ];

  return (
    <div className="bg-eneera-cream border-y border-border/50 py-3 overflow-hidden">
      <div className="relative flex">
        {/* First set */}
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
            <span
              key={`first-${index}`}
              className="mx-8 text-sm font-medium text-foreground/80 tracking-wide flex items-center"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-4" />
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {items.map((item, index) => (
            <span
              key={`second-${index}`}
              className="mx-8 text-sm font-medium text-foreground/80 tracking-wide flex items-center"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-4" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
