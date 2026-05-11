import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import hero from "@/assets/hero-wohlbefinden.jpg";

const Hero = () => {
  return (
    <section id="willkommen" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Mutter und Tochter genießen warmes Wohlbefinden im hellen Bad"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-white/55" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-light text-brand leading-tight">
          Unser Handwerk.<br />Ihr Wohlbefinden.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-brand-dark/80 font-light leading-relaxed">
          Entdecken Sie unseren ausgezeichneten<br />
          Service rund um Wärme und Wasser.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm px-8">
            <a href="#leistungen">Weitere Infos</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-brand-foreground rounded-sm px-8 bg-white/70 backdrop-blur">
            <a href="#kontakt">Jetzt Termin vereinbaren</a>
          </Button>
        </div>
      </div>
      <a href="#werte" aria-label="Nach unten scrollen" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-brand-dark/60 animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
