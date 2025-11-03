import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Security } from "@/components/security";
import { Pricing } from "@/components/pricing";
import { Integrations } from "@/components/integrations";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { VantaBackground } from "@/components/vanta-background";
import { SkipToContent } from "@/components/skip-to-content";

export default function Home() {
  return (
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen relative">
        <VantaBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <SocialProof />
          <Features />
          <HowItWorks />
          <Security />
          <Pricing />
          <Integrations />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}

