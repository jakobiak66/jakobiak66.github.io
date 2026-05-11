import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Guarantees } from "@/components/site/Guarantees";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CallCta } from "@/components/site/CallCta";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Benefits />
      <Services />
      <About />
      <Process />
      <Guarantees />
      <Testimonials />
      <Faq />
      <CallCta />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Index;
