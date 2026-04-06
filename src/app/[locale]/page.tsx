import { Hero } from "~/components/sections/hero";
import { TrustBar } from "~/components/sections/trust-bar";
import { BankLogos } from "~/components/sections/bank-logos";
import { HowItWorks } from "~/components/sections/how-it-works";
import { FeaturesTabs } from "~/components/sections/features-tabs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BankLogos />
      <HowItWorks />
      <FeaturesTabs />
    </>
  );
}
