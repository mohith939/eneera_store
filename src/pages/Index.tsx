import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeBar } from "@/components/home/MarqueeBar";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { OriginPromise } from "@/components/home/OriginPromise";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CertificationBanner } from "@/components/home/CertificationBanner";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PressMentions } from "@/components/home/PressMentions";
import { CTASection } from "@/components/home/CTASection";
import { DiscountPopup } from "@/components/ui/DiscountPopup";

const Index = () => {
  return (
    <Layout>
      <DiscountPopup />
      <HeroSection />
      <MarqueeBar />
      <TrustBadges />
      <ProductShowcase />
      <OriginPromise />
      <CertificationBanner />
      <CategoryTabs />
      <ProcessSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <PressMentions />
      <CTASection />
    </Layout>
  );
};

export default Index;
