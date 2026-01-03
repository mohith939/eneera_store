import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Shop", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
];

const promoMessages = [
  "Free Shipping on orders over ₹750",
  "New Launch: Premium Forest Honey",
  "100% Organic • Lab Certified • Pure",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promoMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Promo Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
        <div className="relative h-10 flex items-center justify-center overflow-hidden">
          {/* Prev Arrow */}
          <button
            onClick={() => setCurrentPromo((prev) => (prev - 1 + promoMessages.length) % promoMessages.length)}
            className="absolute left-4 p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Previous promotion"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Promo Text */}
          <div className="text-center">
            <p className="text-xs md:text-sm tracking-wide animate-fade-in" key={currentPromo}>
              {promoMessages[currentPromo]}
            </p>
          </div>

          {/* Next Arrow */}
          <button
            onClick={() => setCurrentPromo((prev) => (prev + 1) % promoMessages.length)}
            className="absolute right-4 p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Next promotion"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
            {promoMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-1 h-1 rounded-full transition-all ${
                  index === currentPromo ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md shadow-soft py-2"
            : "bg-background py-3"
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Left Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.slice(0, 2).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>

            {/* Center Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0"
            >
              <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-foreground hover:text-primary transition-colors">
                ENEERA
              </span>
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center gap-6">
              <ul className="hidden lg:flex items-center gap-8">
                {navItems.slice(2).map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <button className="hidden md:block text-foreground hover:text-primary transition-colors" aria-label="Search">
                  <Search size={20} strokeWidth={1.5} />
                </button>
                <button className="hidden md:block text-foreground hover:text-primary transition-colors" aria-label="Account">
                  <User size={20} strokeWidth={1.5} />
                </button>
                <button className="text-foreground hover:text-primary transition-colors relative" aria-label="Cart">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[6.5rem] bg-background z-40 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container-wide py-8">
            <ul className="space-y-1">
              <li className="border-b border-border/30">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.path} className="border-b border-border/30">
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 text-lg font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
