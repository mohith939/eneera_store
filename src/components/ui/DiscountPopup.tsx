import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subscribe: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("eneera-popup-shown");
    
    if (!popupShown) {
      // Show popup after 5 seconds of browsing
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("eneera-popup-shown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Close after showing success
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-eneera-charcoal/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-dramatic max-w-md w-full overflow-hidden animate-fade-in-scale">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift size={40} className="text-primary" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-3">
              You're In!
            </h3>
            <p className="text-muted-foreground mb-4">
              Check your email for your exclusive 10% discount code.
            </p>
            <p className="text-sm text-primary font-medium">
              Code: ENEERA10
            </p>
          </div>
        ) : (
          // Form State
          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-wider font-medium rounded-full mb-4">
                Exclusive Offer
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Get 10% OFF
              </h3>
              <p className="text-muted-foreground text-sm">
                Be the first to discover new products & wellness drops!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-3 bg-eneera-cream border border-border rounded-lg">
                  <span className="text-lg">🇮🇳</span>
                  <span className="text-sm text-foreground">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Keep me up to date on news and offers
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-eneera-deep-green transition-colors"
              >
                Get 10% OFF
              </button>
            </form>

            <p className="text-[10px] text-muted-foreground text-center mt-4">
              For more information on how we process your data for marketing communication. Check our{" "}
              <a href="/privacy" className="underline hover:text-primary">Privacy policy</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
