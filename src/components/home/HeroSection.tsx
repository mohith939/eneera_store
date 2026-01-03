import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-eneera-cream via-background to-eneera-linen">
      {/* Decorative Elements */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="container-wide relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-6 font-medium">
              Premium Organic Nutrition
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Built on 
              <span className="block text-primary">Purity,</span>
              Not Marketing.
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              We source carefully, test every product, and present clean 
              nutrition without noise. Because your health deserves honesty.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-[0.15em] uppercase rounded-full hover:bg-eneera-deep-green transition-all duration-300 shadow-card hover:shadow-dramatic"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-10 py-4 border border-foreground/20 text-foreground text-sm font-medium tracking-[0.15em] uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Background circle */}
              <div className="absolute inset-0 -m-6 rounded-full bg-eneera-linen/60" />
              
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-dramatic">
                <img
                  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=750&fit=crop"
                  alt="ENEERA Premium Organic Products"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-eneera-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background p-4 md:p-6 rounded-xl shadow-elevated">
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">100%</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Lab Tested</p>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-background p-4 md:p-5 rounded-xl shadow-elevated">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Certified</p>
                <p className="font-serif text-xl md:text-2xl text-primary">Organic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
