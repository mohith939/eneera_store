import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-eneera-charcoal text-primary-foreground">
      {/* Main footer content */}
      <div className="container-wide py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-[0.1em] text-primary-foreground">
                ENEERA
              </span>
            </Link>
            <p className="text-primary-foreground/60 leading-relaxed mb-6 max-w-xs">
              Clean nutrition, calmly presented. Premium organic products you can trust.
            </p>
            
            {/* Social/contact icons */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@eneera.in"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 hover:border-eneera-gold hover:text-eneera-gold transition-colors"
                aria-label="Email us"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 hover:border-eneera-gold hover:text-eneera-gold transition-colors"
                aria-label="Call us"
              >
                <Phone size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              {["Products", "About", "Quality", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-eneera-gold transition-colors"
                  >
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {["Shipping & Delivery", "Returns & Refunds", "FAQ", "Track Order"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/70 hover:text-eneera-gold transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary-foreground/40 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:hello@eneera.in"
                  className="text-sm text-primary-foreground/70 hover:text-eneera-gold transition-colors"
                >
                  hello@eneera.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary-foreground/40 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-primary-foreground/70 hover:text-eneera-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-foreground/40 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-primary-foreground/70">
                  India-wide delivery
                </span>
              </div>
            </div>

            {/* Newsletter hint */}
            <div className="mt-8 p-4 border border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/50 mb-2">Coming Soon</p>
              <p className="text-sm text-primary-foreground/70">
                Subscribe for updates on new products and offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} ENEERA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors cursor-pointer">
              Refund Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}