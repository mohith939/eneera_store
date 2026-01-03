import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeBar } from "@/components/home/MarqueeBar";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PressMentions } from "@/components/home/PressMentions";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeBar />
      <TrustBadges />
      <ProductShowcase />
      <FeaturedProducts />
      <PressMentions />
      <CTASection />
    </Layout>
  );
};

export default Index;
