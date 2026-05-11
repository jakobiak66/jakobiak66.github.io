import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ServiceCards } from "@/components/site/ServiceCards";
import { Emergency } from "@/components/site/Emergency";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";

import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";



export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <Services />
        <Testimonials />
        
        <Faq />
        <Emergency />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
