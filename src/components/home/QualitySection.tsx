import { Link } from "react-router-dom";
import { Shield, Beaker, Leaf, CheckCircle } from "lucide-react";

const qualityPoints = [
  {
    icon: Leaf,
    title: "Known Sources",
    description: "Every supplier is verified. No anonymous sourcing.",
  },
  {
    icon: Beaker,
    title: "Lab Tested",
    description: "Third-party testing for purity and safety.",
  },
  {
    icon: Shield,
    title: "Certified Organic",
    description: "FSSAI, India Organic, and international certifications.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Quality",
    description: "Same standards. Every batch. Every time.",
  },
];

export function QualitySection() {
  return (
    <section className="py-section bg-eneera-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Our Standards
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6">
              Quality is not a claim.
              <br />
              It's our discipline.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              We don't source from unknown suppliers. We don't sell products without 
              lab testing. This principle guides everything we do.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {qualityPoints.map((point, index) => (
                <div 
                  key={point.title}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <point.icon size={24} className="text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-medium text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/quality"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-eneera-stone/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop"
                alt="Quality sourcing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-elevated">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                Certified
              </p>
              <p className="font-serif text-2xl text-primary">100%</p>
              <p className="text-sm text-foreground">Organic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
