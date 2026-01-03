import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-elevated hover:scale-105 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
