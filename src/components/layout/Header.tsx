import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, ShoppingBag, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from "lucide-react";

const navItems = [
  { 
    label: "Shop", 
    path: "/products",
    submenu: [
      { label: "All Products", path: "/products" },
      { label: "Honey", path: "/products?category=honey" },
      { label: "Jaggery", path: "/products?category=jaggery" },
      { label: "Superfoods", path: "/products?category=superfoods" },
      { label: "Oils", path: "/products?category=oils" },
    ]
  },
  { label: "About Us", path: "/about" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
  { label: "Just Launched", path: "/just-launched", highlight: true },
];

const promoMessages = [
  { text: "Just Launched: Premium Jamun Honey", link: "/just-launched", highlight: true },
  { text: "Free Shipping on orders over ₹750", link: "/products" },
  { text: "Get 10% OFF on your first order", link: "/products" },
  { text: "100% Organic • Lab Certified • Pure", link: "/quality" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
          <Link 
            to={promoMessages[currentPromo].link}
            className="text-center hover:underline"
          >
            <p className="text-xs md:text-sm tracking-wide animate-fade-in flex items-center gap-2" key={currentPromo}>
              {promoMessages[currentPromo].highlight && (
                <Sparkles size={14} className="text-eneera-gold" />
              )}
              {promoMessages[currentPromo].text}
              {promoMessages[currentPromo].highlight && (
                <span className="text-eneera-gold">→</span>
              )}
            </p>
          </Link>

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
            <ul className="hidden lg:flex items-center gap-6">
              {/* Shop with Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setShowShopDropdown(true)}
                onMouseLeave={() => setShowShopDropdown(false)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isActive("/products")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Shop
                  <ChevronDown size={14} className={`transition-transform ${showShopDropdown ? "rotate-180" : ""}`} />
                </Link>

                {/* Dropdown */}
                {showShopDropdown && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background rounded-lg shadow-elevated border border-border py-2 min-w-[180px]">
                      {navItems[0].submenu?.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-eneera-cream hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/about"
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isActive("/about")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  About Us
                </Link>
              </li>
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
              <ul className="hidden lg:flex items-center gap-6">
                <li>
                  <Link
                    to="/quality"
                    className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                      isActive("/quality")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Quality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                      isActive("/contact")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/just-launched"
                    className={`flex items-center gap-1.5 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 px-3 py-1.5 rounded-full ${
                      isActive("/just-launched")
                        ? "bg-primary text-primary-foreground"
                        : "bg-eneera-gold/20 text-primary hover:bg-eneera-gold/30"
                    }`}
                  >
                    <Sparkles size={12} />
                    Just Launched
                  </Link>
                </li>
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
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                    0
                  </span>
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
              <li className="border-b border-border/30">
                <Link
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 text-lg font-medium transition-colors ${
                    isActive("/products") ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  Shop All
                </Link>
              </li>
              <li className="border-b border-border/30">
                <Link
                  to="/just-launched"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 py-4 text-lg font-medium transition-colors ${
                    isActive("/just-launched") ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <Sparkles size={18} className="text-eneera-gold" />
                  Just Launched
                </Link>
              </li>
              <li className="border-b border-border/30">
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 text-lg font-medium transition-colors ${
                    isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="border-b border-border/30">
                <Link
                  to="/quality"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 text-lg font-medium transition-colors ${
                    isActive("/quality") ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  Quality
                </Link>
              </li>
              <li className="border-b border-border/30">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 text-lg font-medium transition-colors ${
                    isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
