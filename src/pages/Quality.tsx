import { Layout } from "@/components/layout/Layout";
import { Shield, Beaker, Leaf, FileCheck, Users, Award } from "lucide-react";

const certifications = [
  { name: "FSSAI", description: "Food Safety Standards Authority of India" },
  { name: "India Organic", description: "National organic certification" },
  { name: "NPOP", description: "National Programme for Organic Production" },
];

const qualityPillars = [
  {
    icon: Users,
    title: "Known Suppliers",
    description: "Every supplier is verified and audited. We never source from unknown or anonymous suppliers. Full traceability from farm to you.",
  },
  {
    icon: Beaker,
    title: "Third-Party Lab Testing",
    description: "Every batch is tested by independent laboratories for purity, contamination, and nutritional content. Reports available on request.",
  },
  {
    icon: Shield,
    title: "No Additives Policy",
    description: "No preservatives. No artificial colors. No synthetic additives. Just pure, natural ingredients.",
  },
  {
    icon: FileCheck,
    title: "Batch Traceability",
    description: "Each product comes with a batch code. Track the origin, testing date, and certification status of your purchase.",
  },
  {
    icon: Leaf,
    title: "Organic Certified",
    description: "All products carry recognized organic certifications. We go beyond labels to verify actual organic practices.",
  },
  {
    icon: Award,
    title: "Consistent Standards",
    description: "Same rigorous standards for every product, every batch, every time. Quality is our discipline, not our marketing.",
  },
];

const Quality = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-eneera-cream">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 fade-in-up">
            Quality Standards
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto fade-in-up stagger-1">
            Quality is not a claim. It's our discipline.
          </p>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-section bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              How We Ensure Quality
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">
              Our Six Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {qualityPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <pillar.icon size={28} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-section bg-eneera-cream">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Verified Standards
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="bg-background p-8 text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl text-primary mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-section bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Our Promise
          </h2>
          <p className="text-primary-foreground/90 text-xl max-w-xl mx-auto leading-relaxed">
            If you ever have questions about the sourcing, testing, or quality 
            of any ENEERA product, we will provide complete transparency.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
