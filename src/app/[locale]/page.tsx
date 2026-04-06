import { Hero } from "~/components/sections/hero";
import { TrustBar } from "~/components/sections/trust-bar";
import { BankLogos } from "~/components/sections/bank-logos";
import { HowItWorks } from "~/components/sections/how-it-works";
import { DemoVideo } from "~/components/sections/demo-video";
import { FeaturesTabs } from "~/components/sections/features-tabs";
import { StatsBar } from "~/components/sections/stats-bar";
import { Testimonials } from "~/components/sections/testimonials";
import { CtaSection } from "~/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BankLogos />
      <HowItWorks />
      <DemoVideo />
      <FeaturesTabs />
      <StatsBar />
      <Testimonials />
      <CtaSection />
    </>
  );
}
