import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import Hero from "@/components/hero";
import Tape from "@/components/tape";
import Manifesto from "@/components/manifesto";
import Services from "@/components/services";
import Process from "@/components/process";
import Stats from "@/components/stats";
import Work from "@/components/work";
import Logos from "@/components/logos";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Insights from "@/components/insights";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { AppWrapper } from "@/components/app-wrapper";
import { localBusinessJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <AppWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <ScrollReveal />
      <Hero />
      <Tape />
      <Manifesto />
      <Services />
      <Process />
      <Stats />
      <Work />
      <Logos />
      <Testimonials />
      <Team />
      <Faq />
      <Insights />
      <Contact />
      <Footer />
    </AppWrapper>
  );
}
