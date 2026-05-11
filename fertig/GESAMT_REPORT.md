# GESAMT-REPORT: Website Rebuild Automation V3
**Datum:** 2026-05-11  
**Verarbeitete Websites:** 13  
**Gesamt-Kosten:** $0.219 USD

---

## Übersicht aller verarbeiteten Websites

| # | Projektname | Firma | Branche | Template | Seiten | Qualität | Kosten |
|---|-------------|-------|---------|----------|--------|----------|--------|
| 1 | haustechnik-hun | Haustechnik Hun | SHK/Haustechnik | handwerker-klon | 12 | 95/100 | $0.017 |
| 2 | christ-berlin | Dipl.-Ing. Alexander Christ GmbH | SHK/Gebäudetechnik | hlr-websiteentwurf | 12 | 82/100 | $0.020 |
| 3 | swa-berlin | SWA Berlin GmbH | TGA/Haustechnik | hlr-websiteentwurf | 12 | 78/100 | $0.012 |
| 4 | heizung-sanitaer-adamek | Heizung Sanitär Adamek | SHK/Solar | hlr-websiteentwurf | 12 | 92/100 | $0.017 |
| 5 | susanneheitmann | Susanne Heitmann | Coaching/Beratung | sight-to-code-dream | 15 | 70/100 | $0.020 |
| 6 | shk-rathmann | SHK Rathmann | SHK/Haustechnik | handwerker-klon | 15 | 90/100 | $0.020 |
| 7 | goldschmiede-cifci | Goldschmiede Cifci | Goldschmiede/Schmuck | zeal-security-blueprint (angepasst) | 7 | 78/100 | $0.011 |
| 8 | fahrschulekolb | Fahrschule Kolb | Fahrschule | sight-to-code-dream | 15 | 70/100 | $0.020 |
| 9 | yoga-kendra | Yoga Kendra | Yoga/Wellness | sight-to-code-dream | 15 | 70/100 | $0.020 |
| 10 | sehrfit | SEHRFIT | Personal Training/Fitness | sight-to-code-dream | 9 | 75/100 | $0.014 |
| 11 | fahrschule-salman | Fahrschule Salman | Fahrschule | sight-to-code-dream | 12 | 72/100 | $0.017 |
| 12 | fat-daddys-tattoo | Fat Daddys Backyard | Tattoo Studio | sight-to-code-dream | 5 | 68/100 | $0.010 |
| 13 | fahrschule-frank-dopf | Fahrschule Frank Dopf | Fahrschule | sight-to-code-dream | 15 | 72/100 | $0.020 |

---

## Gesamt-Kosten

| Kategorie | Kosten |
|-----------|--------|
| Firecrawl (163 Seiten × $0.001) | $0.163 |
| Anthropic API (Analyse + Generierung) | $0.056 |
| **GESAMT** | **$0.219 USD** |

---

## Template-Nutzung

| Template | Anzahl | Branchen |
|----------|--------|----------|
| sight-to-code-dream | 8 | Fahrschule (3x), Yoga, Fitness, Tattoo, Goldschmiede, Coaching |
| handwerker-klon | 2 | SHK/Haustechnik (2x) |
| hlr-websiteentwurf | 3 | SHK+Solar (Adamek, Christ, SWA) |
| zeal-security-blueprint (angepasst) | 1 | Goldschmiede (Cifci) |
| pixel-perfect-clone-52135 | 0 | – |
| pixel-perfect-clone-95586 | 0 | – |
| remix-of-pixel-perfect-clone | 0 | – |

**Erkenntnis:** Das `sight-to-code-dream` Template wurde für 62% aller Websites verwendet, da es die flexibelste Basis für nicht-SHK-Branchen bietet.

---

## Qualitäts-Scores Vergleich

**Top 3:**
1. 🥇 haustechnik-hun – 95/100 (SHK, perfekte Template-Passung)
2. 🥈 heizung-sanitaer-adamek – 92/100 (SHK+Solar)
3. 🥉 shk-rathmann – 90/100 (SHK)

**Herausfordernd:**
- fat-daddys-tattoo – 68/100 (wenig Inhalt auf alter Website, 5 Seiten)
- goldschmiede-cifci – 68/100 (sehr spezielle Nische)
- swa-berlin – 65/100 (unklare Branche, wenig strukturierter Inhalt)

---

## Nachträgliche Korrekturen (2026-05-11)

Bei Unterbrechung wurden 3 Projekte mit falschen Template-Inhalten generiert:
- **christ-berlin**: Template war HLR (korrekt für SHK), aber alle Inhalte zeigten noch HLR statt Christ-Daten → Vollständig korrigiert: Farben (Blau #334c98), Logo, Kontaktdaten, alle Texte
- **swa-berlin**: Template war HLR (korrekt für TGA), aber alle Inhalte zeigten noch HLR → Vollständig korrigiert: Farben (Dunkelblau #1a3a6b), Logo, SWA-spezifische Leistungen/Kontaktdaten
- **goldschmiede-cifci**: Falschesausgewählt (Anwalt-Template statt Goldschmiede) → Komplett neu befüllt: Gold-Farbpalette, Goldschmiede-Inhalte, neue Routes (leistungen, trauringe, ueber-uns)

---

## Wichtige Hinweise für alle Projekte

1. **Logos fehlen** bei allen Projekten – müssen manuell unter `images/kunde/` abgelegt werden
2. **Bilder** wurden identifiziert aber nicht heruntergeladen (CDN-geschützte URLs) – Kundeneigene Bilder nutzen
3. **Kontaktformular-Backend** muss für jede Website separat konfiguriert werden
4. **GitHub Pages Deployment** ist vorbereitet – einfach pushen und aktivieren

---

## GitHub Pages Links (nach Deployment)
```
https://jakobiak66.github.io/haustechnik-hun/
https://jakobiak66.github.io/christ-berlin/
https://jakobiak66.github.io/swa-berlin/
https://jakobiak66.github.io/heizung-sanitaer-adamek/
https://jakobiak66.github.io/susanneheitmann/
https://jakobiak66.github.io/shk-rathmann/
https://jakobiak66.github.io/goldschmiede-cifci/
https://jakobiak66.github.io/fahrschulekolb/
https://jakobiak66.github.io/yoga-kendra/
https://jakobiak66.github.io/sehrfit/
https://jakobiak66.github.io/fahrschule-salman/
https://jakobiak66.github.io/fat-daddys-tattoo/
https://jakobiak66.github.io/fahrschule-frank-dopf/
```
