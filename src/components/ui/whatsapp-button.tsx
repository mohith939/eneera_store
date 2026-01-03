import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = "Hello! I'm interested in ENEERA products.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform duration-300">
          <MessageCircle size={24} className="text-white" fill="white" strokeWidth={0} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background text-xs tracking-wide px-3 py-2 whitespace-nowrap">
            Need help? Chat with us
          </div>
        </div>
      </div>
    </a>
  );
}