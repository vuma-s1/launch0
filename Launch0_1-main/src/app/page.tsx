import HeroSection from '@/components/sections/hero-section';
import SeeSection from '@/components/sections/SeeSection';
import ShippingSection from '@/components/sections/shipping-section';
import ProblemsSection from '@/components/sections/problems-section';
import SolutionSection from '@/components/sections/solution-section';
import OfferRulesSection from '@/components/sections/offer-rules-section';
import TimeManagementSection from '@/components/sections/time-management-section';
import DesignSection from '@/components/sections/design-section';
import SecretIngredientsSection from '@/components/sections/secret-ingredients-section';
import SkillUpSection from '@/components/sections/skill-up-section';
import GlobalCommunitySection from '@/components/sections/global-community-section';
import FoundersNetworkSection from '@/components/sections/founders-network-section';
import FAQSection from '@/components/sections/faq-section';
import PricingSection from '@/components/sections/pricing-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* See Section */}
      <SeeSection />

      {/* Shipping Section */}
      <ShippingSection />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Offer Rules Section */}
      <OfferRulesSection />

      {/* Time Management Section */}
      <TimeManagementSection />

      {/* Secret Ingredients Section */}
      <SecretIngredientsSection />

      {/* Design Section */}
      <DesignSection />

      {/* Skill Up Section */}
      <SkillUpSection />

      {/* Global Community Section */}
      <GlobalCommunitySection />

      {/* Founders Network Section */}
      <FoundersNetworkSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
