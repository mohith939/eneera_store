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
    description: "FSSAI, India Organic, and international standards.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Quality",
    description: "Same standards. Every batch. Every time.",
  },
];

export function QualitySection() {
  return (
    <section className="py-section bg-eneera-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary/5" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-eneera-gold/5" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="lg:order-1">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
              <span className="w-6 h-[1px] bg-primary" />
              Our Standards
            </span>
            
            <h2 className="font-serif text-heading text-foreground mb-6">
              Quality is not a claim.
              <br />
              <span className="text-gradient">It's our discipline.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg">
              We don't source from unknown suppliers. We don't sell products without 
              lab testing. This principle guides everything we do.
            </p>

            {/* Quality points grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {qualityPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <point.icon size={20} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-medium text-foreground">{point.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-[52px]">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <Link
                to="/quality"
                className="btn-premium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="relative z-10">Learn More About Our Process</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2 relative">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] overflow-hidden shadow-dramatic">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop"
                  alt="Quality sourcing and testing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent image */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 shadow-elevated hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop"
                  alt="Organic products"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats badge */}
              <div className="absolute -bottom-6 right-8 bg-background p-6 shadow-elevated">
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  Certified
                </p>
                <p className="font-serif text-3xl text-gradient-gold">100%</p>
                <p className="text-sm font-medium text-foreground">Organic</p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <div className="absolute top-0 right-0 w-16 h-[2px] bg-eneera-gold" />
                <div className="absolute top-0 right-0 w-[2px] h-16 bg-eneera-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}