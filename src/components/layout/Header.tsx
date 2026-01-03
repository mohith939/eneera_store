import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { PromoCarousel } from "../home/PromoCarousel";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Promo Carousel - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <PromoCarousel />
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-soft"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="relative group"
            >
              <span className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-foreground">
                ENEERA
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-eneera-gold group-hover:w-full transition-all duration-500" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-6">
              {/* Cart Icon (placeholder) */}
              <button className="hidden md:flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase font-medium">Cart</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[calc(2.5rem+5rem)] bg-background z-40 transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container-wide py-12">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li
                  key={item.path}
                  className={`transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 0.08}s` : "0s" }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 font-serif text-3xl tracking-wide transition-colors border-b border-border/30 ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground hover:pl-4"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile cart */}
            <div
              className={`mt-12 transform transition-all duration-500 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isMenuOpen ? "0.4s" : "0s" }}
            >
              <button className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <span className="text-sm tracking-wider uppercase font-medium">Shopping Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}