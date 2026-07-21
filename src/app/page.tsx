import { BeforeAfter } from "@/components/BeforeAfter";
import { BookingForm } from "@/components/BookingForm";
import { DirtGame } from "@/components/DirtGame";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { LoyaltySection } from "@/components/LoyaltySection";
import { PackSelector } from "@/components/PackSelector";
import { ProBanner } from "@/components/ProBanner";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { TrustRibbon } from "@/components/TrustRibbon";
import { WhyNova } from "@/components/WhyNova";
import { ZoneChecker } from "@/components/ZoneChecker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustRibbon />
      <Steps />
      <PackSelector />
      <BeforeAfter />
      <LoyaltySection />
      <BookingForm />
      <WhyNova />
      <ZoneChecker />
      <DirtGame />
      <ProBanner />
      <Testimonials />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}
