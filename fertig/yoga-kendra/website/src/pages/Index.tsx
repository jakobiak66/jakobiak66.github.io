import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { FuerUnternehmen } from "@/components/site/FuerUnternehmen";
import { About } from "@/components/site/About";
import { WarumYoga } from "@/components/site/WarumYoga";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Services />
      <FuerUnternehmen />
      <About />
      <WarumYoga />
      <Testimonials />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Index;
