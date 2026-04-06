import { Hero } from "~/components/sections/hero";
import { TrustBar } from "~/components/sections/trust-bar";
import { BankLogos } from "~/components/sections/bank-logos";
import { HowItWorks } from "~/components/sections/how-it-works";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BankLogos />
      <HowItWorks />
    </>
  );
}
