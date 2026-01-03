import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-eneera-cream">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 fade-in-up">
            About ENEERA
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto fade-in-up stagger-1">
            Why we exist and what we stand for.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-section bg-background">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <p className="fade-in-up text-foreground">
              ENEERA was born from a simple frustration: we couldn't find premium 
              organic brands we could truly believe in.
            </p>
            
            <p className="fade-in-up stagger-1 text-muted-foreground">
              Most organic brands focus on labels and marketing. Premium packaging 
              doesn't mean premium quality. Claims don't match reality. Labels alone 
              are not proof.
            </p>

            <p className="fade-in-up stagger-2 text-muted-foreground">
              So we decided to do things differently. We source carefully, test every 
              product, and present clean nutrition calmly — without noise or exaggeration.
            </p>

            <div className="section-divider my-12" />

            <h2 className="fade-in-up stagger-3 font-serif text-2xl md:text-3xl text-foreground text-center">
              Our Principle
            </h2>

            <p className="fade-in-up stagger-4 text-foreground text-center text-xl">
              We don't source from unknown suppliers.
              <br />
              We don't sell products without lab testing.
            </p>

            <p className="fade-in-up stagger-5 text-muted-foreground text-center">
              That's it. This single principle guides everything we do. It justifies 
              our premium positioning. It builds trust naturally. It scales across 
              products, categories, and geographies.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-eneera-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              What We Believe
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Purity Over Marketing",
                description: "We invest in sourcing and testing, not in advertising. The product speaks for itself.",
              },
              {
                title: "Calm Confidence",
                description: "We don't convince. We remove doubt. Through proof, consistency, and clarity.",
              },
              {
                title: "Long-Term Trust",
                description: "We're building relationships, not transactions. Same quality, every time.",
              },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
