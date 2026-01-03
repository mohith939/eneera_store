import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-eneera-cream border-t border-border">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-foreground">
              ENEERA
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Clean nutrition, calmly presented.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["Products", "About", "Quality", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors link-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {["Shipping", "Returns", "FAQ"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer link-underline">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Questions about our products?
            </p>
            <a
              href="mailto:hello@eneera.in"
              className="inline-block mt-2 text-sm text-primary hover:text-primary/80 transition-colors link-underline"
            >
              hello@eneera.in
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ENEERA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
