import { Leaf, Shield, FlaskConical } from "lucide-react";

const promises = [
  {
    icon: Leaf,
    title: "100% Natural & Pure",
    description: "We source only the purest ingredients from trusted farms and forests across India.",
  },
  {
    icon: Shield,
    title: "Lab Certified",
    description: "Every batch is third-party tested to ensure quality, safety, and authenticity.",
  },
  {
    icon: FlaskConical,
    title: "No Artificial Anything",
    description: "We don't believe in shortcuts. No preservatives, no additives, no compromises.",
  },
];

export function OriginPromise() {
  return (
    <section className="py-12 md:py-16 bg-eneera-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
            <span className="w-6 h-[1px] bg-primary" />
            Why ENEERA
            <span className="w-6 h-[1px] bg-primary" />
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
            The ENEERA Promise
          </h2>
        </div>

        {/* Promise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                <promise.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {promise.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
