import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/whatsapp-button";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[calc(2.5rem+5rem)] md:pt-[calc(2.5rem+6rem)]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}