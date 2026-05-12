import { Flame, Droplets, Zap, Sun, Droplet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Flame,
    title: "Heizungsinstallation",
    desc: "Neuinstallation und Modernisierung von Heizungsanlagen, Wärmepumpen und Brennwerttechnik.",
    href: "/leistungen/heizungstechnik",
    img: "/christ-berlin/images/heizung.png",
  },
  {
    icon: Droplets,
    title: "Sanitärinstallation",
    desc: "Vom Komplettbad bis zur Reparatur – Komfort und Funktion aus einer Hand.",
    href: "/leistungen/bad-und-sanitaerinstallation",
    img: "/christ-berlin/images/sanitaer.png",
  },
  {
    icon: Sun,
    title: "Solar- & Photovoltaik",
    desc: "Solarthermie und Photovoltaikanlagen – emissionsschonend und wirtschaftlich.",
    href: "/leistungen/solartechnik",
    img: "/christ-berlin/images/solaranlagen.png",
  },
  {
    icon: Zap,
    title: "Schornsteinbau",
    desc: "Fachgerechter Schornsteinbau und Sanierung für sicheren Betrieb Ihrer Feuerstätte.",
    href: "/leistungen/schornsteinbau",
    img: "/christ-berlin/images/schornsteinbau.png",
  },
  {
    icon: Droplet,
    title: "Energieberatung",
    desc: "Individuelle Beratung zu Energieeinsparung, Fördermitteln und modernen Heiztechnologien.",
    href: "/leistungen/energieberatung",
    img: "/christ-berlin/images/energieberatung.png",
  },
];

export function Services() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
        {/* Left: content */}
        <div>
          <span className="inline-flex items-center gap-2 text-white/90 text-xs font-semibold tracking-wide mb-4">
            Unsere Leistungen im Überblick
          </span>
          <h2 className="text-white max-w-2xl">
            Zuverlässiger Service rund um
            <br />
            Heizung, Sanitär und Energie.
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {items.map((it) => (
              <div key={it.title} className="flex flex-col">
                <it.icon
                  size={36}
                  className="text-white mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-white font-extrabold text-lg leading-snug">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  {it.desc}
                </p>
                <Link
                  to={it.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white border-b border-white/40 hover:border-white pb-0.5 self-start transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right: service icons grid */}
        <div className="grid grid-cols-3 gap-4 content-start">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center gap-2 bg-brand/20 rounded-lg p-4">
              <img src={it.img} alt={it.title} className="w-16 h-16 object-contain" />
              <span className="text-white/90 text-xs font-semibold text-center">{it.title}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 bg-brand/20 rounded-lg p-4">
            <div className="w-16 h-16 flex items-center justify-center text-white/60 text-2xl">🏠</div>
            <span className="text-white/90 text-xs font-semibold text-center">Kamine</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-brand/20 rounded-lg p-4">
            <div className="w-16 h-16 flex items-center justify-center text-white/60 text-2xl">💧</div>
            <span className="text-white/90 text-xs font-semibold text-center">Regenwassernutzung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
