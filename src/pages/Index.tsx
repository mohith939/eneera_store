import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { QualitySection } from "@/components/home/QualitySection";
import { BrandStory } from "@/components/home/BrandStory";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <QualitySection />
      <BrandStory />
      <CTASection />
    </Layout>
  );
};

export default Index;
