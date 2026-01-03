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
    <section className="py-10 md:py-14 bg-eneera-cream/60">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-eneera-linen flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 shadow-soft">
                <badge.icon 
                  size={28} 
                  strokeWidth={1.5} 
                  className="text-primary"
                />
              </div>
              
              {/* Text */}
              <h3 className="font-sans text-xs font-semibold text-foreground uppercase tracking-wide mb-0.5">
                {badge.title}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
