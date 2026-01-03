import { Users, Leaf, Mountain, Factory, Microscope } from "lucide-react";

const badges = [
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Happy families across India",
  },
  {
    icon: Leaf,
    title: "Formulated with Superfoods",
    description: "Powerful natural ingredients",
  },
  {
    icon: Mountain,
    title: "Sourced from Nature",
    description: "Pure, pristine origins",
  },
  {
    icon: Factory,
    title: "Ethical Process",
    description: "Transparent supply chain",
  },
  {
    icon: Microscope,
    title: "Lab Certified",
    description: "Purity you can trust",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 md:py-20 bg-eneera-cream/60">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-eneera-linen flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-soft">
                <badge.icon 
                  size={32} 
                  strokeWidth={1.5} 
                  className="text-primary"
                />
              </div>
              
              {/* Text */}
              <h3 className="font-sans text-xs md:text-sm font-semibold text-foreground uppercase tracking-wide mb-1">
                {badge.title}
              </h3>
              <p className="text-[11px] md:text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
