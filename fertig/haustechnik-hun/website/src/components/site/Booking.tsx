import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Phone, Wrench } from "lucide-react";

const days = Array.from({ length: 30 }, (_, i) => i + 1);
const slots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

export const Booking = () => {
  const [day, setDay] = useState<number | null>(15);
  const [slot, setSlot] = useState<string | null>("11:00");

  return (
    <section id="kontakt" className="container py-20">
      <div className="text-center mb-10">
        <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Termin</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
          Jetzt Ihren kostenlosen Beratungstermin anfragen!
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Wählen Sie einen Termin, der Ihnen passt. Wir rufen Sie pünktlich zurück — unverbindlich und kostenlos.
        </p>
      </div>

      <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden grid lg:grid-cols-3">
        {/* Left: details */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-border bg-surface-soft">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold text-primary-dark">Haustechnik Hun</div>
              <div className="text-xs text-muted-foreground">Beratungsgespräch · 30 Min</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Persönliches Erstgespräch zu Ihrem Sanitär-, Heizungs- oder Solarprojekt — unverbindlich und kostenlos.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-foreground"><Clock className="h-4 w-4 text-primary" /> 30 Minuten</div>
            <div className="flex items-center gap-2 text-foreground"><Phone className="h-4 w-4 text-primary" /> Telefongespräch</div>
            <div className="flex items-center gap-2 text-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> Kostenfrei & unverbindlich</div>
          </div>
        </div>

        {/* Middle: calendar */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-border">
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary-dark text-sm">Wählen Sie einen Tag</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-2">
            {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d) => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => {
              const disabled = d % 7 === 0 || d % 7 === 6;
              const active = d === day;
              return (
                <button
                  key={d}
                  disabled={disabled}
                  onClick={() => setDay(d)}
                  className={`h-9 rounded-lg text-sm font-medium transition-smooth ${
                    active
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : disabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: time slots */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary-dark text-sm">Verfügbare Uhrzeiten</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {slots.map((s) => {
              const active = s === slot;
              return (
                <button
                  key={s}
                  onClick={() => setSlot(s)}
                  className={`h-10 rounded-lg text-sm font-medium border-2 transition-smooth ${
                    active ? "border-primary bg-secondary text-primary-dark" : "border-border hover:border-primary/50"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl bg-surface-soft p-4 mb-5 flex items-center gap-3">
            {/* 📷 PLATZHALTER: Foto von Laszlo Hun als Ansprechpartner */}
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#e5e7eb', border: '2px dashed #d1d5db',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', flexShrink: 0
            }}>📷</div>
            <div>
              <div className="text-xs text-muted-foreground">Ihr Ansprechpartner</div>
              <div className="font-semibold text-primary-dark text-sm">Laszlo Hun</div>
              <div className="text-xs text-muted-foreground">Installateur- und Heizungsbaumeister</div>
            </div>
          </div>

          <Button variant="hero" size="lg" className="w-full" asChild>
            <a href="tel:+4975519450480">
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
