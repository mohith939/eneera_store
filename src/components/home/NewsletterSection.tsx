import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to ENEERA!",
        description: "You'll receive our latest updates and exclusive offers.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-eneera-cream">
      <div className="container-narrow text-center">
        <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
          <span className="w-6 h-[1px] bg-primary" />
          Stay Connected
          <span className="w-6 h-[1px] bg-primary" />
        </span>
        
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
          Join the ENEERA Family
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm md:text-base">
          Subscribe for exclusive offers, health tips, and early access to new products. 
          Get 10% off your first order!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className="px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-medium text-sm tracking-wide hover:bg-eneera-deep-green transition-all duration-300 flex items-center gap-2 disabled:opacity-70"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={16} />
                  <span className="hidden sm:inline">Subscribed</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span className="hidden sm:inline">Subscribe</span>
                </>
              )}
            </button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          By subscribing, you agree to receive marketing communications. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
