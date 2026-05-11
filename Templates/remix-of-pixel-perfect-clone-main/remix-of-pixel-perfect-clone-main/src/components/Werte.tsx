import { Star, CalendarHeart, Handshake } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    Icon: Star,
    title: "Qualität",
    text: "Unser oberstes Ziel ist Ihre Zufriedenheit. Daher bieten wir unseren Kunden Top-Marken zu fairen Preisen und Qualität aus Meisterhand.",
  },
  {
    Icon: CalendarHeart,
    title: "Zuverlässigkeit",
    text: "Wir sind für unsere Kunden da und garantieren Pünktlichkeit und Termintreue. Ob Reparatur, Service oder Sanierung – wir sind Ihr verlässlicher Partner.",
  },
  {
    Icon: Handshake,
    title: "Kundenorientierung",
    text: "Gemeinsam mit unseren Kunden entwickeln wir Lösungen, die technisches Know-how, ansprechendes Design und Kosteneffizienz vereinen.",
  },
];

const Werte = () => (
  <section id="werte" className="py-20 px-6">
    <SectionTitle primary="Unsere Werte." secondary="Ihr Vorteil." />
    <div className="mt-16 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {items.map(({ Icon, title, text }) => (
        <div key={title} className="text-center">
          <Icon className="mx-auto text-brand" size={56} strokeWidth={1.5} />
          <h3 className="mt-6 text-2xl font-light">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70 max-w-xs mx-auto">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Werte;
