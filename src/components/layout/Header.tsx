import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, ShoppingBag, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const handleSearch = () => {
    toast({
      title: "Search",
      description: "Search functionality coming soon!",
    });
  };

  const handleAccount = () => {
    toast({
      title: "Account",
      description: "Account login coming soon!",
    });
  };

  const handleCart = () => {
    toast({
      title: "Cart",
      description: "Shopping cart coming soon!",
    });
  };

  return (
    <>
      {/* Top Promo Bar */}
      <div className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="relative h-9 flex items-center justify-center overflow-hidden">
          {/* Prev Arrow */}
          <button
            onClick={() => setCurrentPromo((prev) => (prev - 1 + promoMessages.length) % promoMessages.length)}
            className="absolute left-3 p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Previous promotion"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Promo Text */}
          <Link 
            to={promoMessages[currentPromo].link}
            className="text-center hover:underline"
          >
            <p className="text-[11px] md:text-xs tracking-wide animate-fade-in flex items-center gap-2" key={currentPromo}>
              {promoMessages[currentPromo].highlight && (
                <Sparkles size={12} className="text-eneera-gold" />
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
            className="absolute right-3 p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Next promotion"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[calc(100%+2.25rem)]"
        } ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md shadow-soft py-1.5"
            : "bg-background py-2"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Left Navigation */}
            <ul className="hidden lg:flex items-center gap-5">
              {/* Shop with Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setShowShopDropdown(true)}
                onMouseLeave={() => setShowShopDropdown(false)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isActive("/products")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Shop
                  <ChevronDown size={12} className={`transition-transform ${showShopDropdown ? "rotate-180" : ""}`} />
                </Link>

                {/* Dropdown */}
                {showShopDropdown && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background rounded-lg shadow-elevated border border-border py-1.5 min-w-[160px]">
                      {navItems[0].submenu?.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
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
                  className={`text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isActive("/about")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>

            {/* Center Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0"
            >
              <span className="font-serif text-xl md:text-2xl tracking-[0.12em] text-foreground hover:text-primary transition-colors">
                ENEERA
              </span>
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center gap-5">
              <ul className="hidden lg:flex items-center gap-5">
                <li>
                  <Link
                    to="/quality"
                    className={`text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
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
                    className={`text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
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
                    className={`flex items-center gap-1 text-xs font-medium tracking-wide uppercase transition-colors duration-200 px-2.5 py-1 rounded-full ${
                      isActive("/just-launched")
                        ? "bg-primary text-primary-foreground"
                        : "bg-eneera-gold/20 text-primary hover:bg-eneera-gold/30"
                    }`}
                  >
                    <Sparkles size={10} />
                    New
                  </Link>
                </li>
              </ul>

              {/* Icons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleSearch}
                  className="hidden md:block text-foreground hover:text-primary transition-colors" 
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={1.5} />
                </button>
                <button 
                  onClick={handleAccount}
                  className="hidden md:block text-foreground hover:text-primary transition-colors" 
                  aria-label="Account"
                >
                  <User size={18} strokeWidth={1.5} />
                </button>
                <button 
                  onClick={handleCart}
                  className="text-foreground hover:text-primary transition-colors relative" 
                  aria-label="Cart"
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary text-primary-foreground text-[9px] rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[5.5rem] bg-background z-40 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-6">
            <ul className="space-y-0.5">
              <li className="border-b border-border/30">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-border/30">
                <Link
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors ${
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
                  className={`flex items-center gap-2 py-3 text-base font-medium transition-colors ${
                    isActive("/just-launched") ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <Sparkles size={16} className="text-eneera-gold" />
                  Just Launched
                </Link>
              </li>
              <li className="border-b border-border/30">
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors ${
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
                  className={`block py-3 text-base font-medium transition-colors ${
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
                  className={`block py-3 text-base font-medium transition-colors ${
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
