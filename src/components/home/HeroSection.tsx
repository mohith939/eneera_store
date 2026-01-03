import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-eneera-cream via-background to-eneera-linen">
      {/* Decorative Elements */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="container-wide relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium">
              Premium Organic Nutrition
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-5">
              Built on 
              <span className="block text-primary">Purity,</span>
              Not Marketing.
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              We source carefully, test every product, and present clean 
              nutrition without noise. Because your health deserves honesty.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-8">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:bg-eneera-deep-green transition-all duration-300 shadow-card hover:shadow-dramatic group"
              >
                Shop Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-foreground/20 text-foreground text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Our Story
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-primary" />
                <span>Lab Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf size={16} className="text-primary" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <span>FSSAI Approved</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Background circle */}
              <div className="absolute inset-0 -m-4 rounded-full bg-eneera-linen/60" />
              
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
              <div className="absolute -bottom-3 -left-3 md:-left-6 bg-background p-3 md:p-4 rounded-xl shadow-elevated">
                <p className="font-serif text-2xl md:text-3xl text-primary mb-0.5">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Lab Tested</p>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-3 -right-3 md:-right-6 bg-background p-3 md:p-4 rounded-xl shadow-elevated">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Certified</p>
                <p className="font-serif text-lg md:text-xl text-primary">Organic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
