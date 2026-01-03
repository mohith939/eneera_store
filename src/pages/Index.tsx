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

const Index = () => {
  return (
    <Layout>
      <DiscountPopup />
      <CampaignBanner />
      <HeroSection />
      <MarqueeBar />
      <TrustBadges />
      <ProductShowcase />
      <OriginPromise />
      <ProcessSection />
      <FeaturedProducts />
      <WhyLoveSection />
      <TestimonialsSection />
      <VideoShowcase />
      <CertificationBanner />
      <CategoryTabs />
      <PressMentions />
      <CTASection />
    </Layout>
  );
};

export default Index;
