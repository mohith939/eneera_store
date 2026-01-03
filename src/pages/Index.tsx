import { Layout } from "@/components/layout/Layout";
import { CampaignBanner } from "@/components/home/CampaignBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeBar } from "@/components/home/MarqueeBar";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { OriginPromise } from "@/components/home/OriginPromise";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CertificationBanner } from "@/components/home/CertificationBanner";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyLoveSection } from "@/components/home/WhyLoveSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { PressMentions } from "@/components/home/PressMentions";
import { CTASection } from "@/components/home/CTASection";
import { DiscountPopup } from "@/components/ui/DiscountPopup";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FAQSection } from "@/components/home/FAQSection";
import { IngredientsHighlight } from "@/components/home/IngredientsHighlight";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <DiscountPopup />
      <CampaignBanner />
      <HeroSection />
      <MarqueeBar />
      <TrustBadges />
      <FeaturedProducts />
      <StatsSection />
      <ProductShowcase />
      <OriginPromise />
      <ProcessSection />
      <IngredientsHighlight />
      <WhyLoveSection />
      <TestimonialsSection />
      <VideoShowcase />
      <CertificationBanner />
      <CategoryTabs />
      <FAQSection />
      <PressMentions />
      <NewsletterSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
