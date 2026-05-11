# Prozess-Optimierung – Website Rebuild Automation V3

**Letzte Aktualisierung:** 2026-05-11  
**Projektdurchläufe:** 13 Websites in einem Batch

---

## Erkenntnisse aus diesem Durchlauf

### 1. Template-Abdeckung ist zu eng

**Problem:** Von 7 Templates sind nur 4 wirklich universell einsetzbar. `pixel-perfect-clone-52135` (Reinigung) und `pixel-perfect-clone-95586` (Anwalt) sind zu spezialisiert für andere Branchen. Das `sight-to-code-dream` musste 8× als Fallback verwendet werden.

**Empfehlung für CLAUDE.md:** Ein generisches "Universal" Template für Branchen außerhalb SHK und Sicherheit hinzufügen. Branchen wie Fahrschulen, Yoga, Kosmetik, Handwerk-Allgemein brauchen eigene Templates.

---

### 2. Firecrawl Rate-Limiting bei gleichzeitigen Requests

**Problem:** 13 gleichzeitige Crawl-Anfragen führen zu 429-Fehlern (Rate Limit: 14 req/min). Die Retry-Logik mit 50s Wartezeit funktioniert, aber der Gesamtprozess dauert ~15 Minuten für 13 URLs.

**Lösung:** In CLAUDE.md dokumentieren: Max 3 Crawl-Jobs gleichzeitig starten, dann warten. Oder: `scrapeOptions.limit=10` statt 20 für schnellere Crawls.

---

### 3. Bilder-Download schlägt häufig fehl

**Problem:** Die meisten Bilder auf gecrawlten Websites sind CDN-geschützt (signierte URLs mit Ablaufdatum) oder Tracking-Pixel. Direkte Downloads per PowerShell scheitern meist.

**Empfehlung:** Im README.md der `images/kunde/` Ordner klar kommunizieren, dass der Kunde eigene Bilder liefern muss. Template-Platzhalter-Bilder integrieren.

---

### 4. Datenqualität variiert stark nach Website-Typ

**Gut gecrawlt (>80% Daten):**
- SHK-Websites (WordPress, strukturierter Content)
- Fahrschulen (klare Seiten-Hierarchie)

**Schlecht gecrawlt (<60% Daten):**
- Wix/Website-Editor Seiten (sehrfit.de – fast nur Bild-URLs)
- Sehr alte Websites (fat-daddys-tattoo.de – WordPress 2016)
- Single-Page mit JavaScript (swa.berlin)

**Empfehlung:** Bei Wix/Website-Builder Seiten: scrape direkt mit `formats: ["html"]` und extrahiere Inhalte aus dem HTML statt Markdown.

---

### 5. Farb-Extraktion aus Crawl-Daten

**Problem:** Moderne Websites nutzen CSS-in-JS (Tailwind, CSS Modules) – klassische CSS-Variablen sind im gecrawlten HTML oft nicht sichtbar.

**Lösung:** Fallback-Strategie gut: branchenpassende Generierung. Für zukünftige Runs: Puppeteer/Playwright Screenshot + Farb-Analyse wäre genauer.

---

### 6. Parallelisierung mit Subagents

**Problem:** Die 3 Subagents (je ~4-5 Websites) haben das Claude-Tageslimit erreicht (Pro-Plan Limit).

**Empfehlung:** Max 2-3 Websites pro Subagent oder sequenzielle Verarbeitung. Bei Team-/Enterprise-Plänen: Vollparallelisierung möglich.

---

## Empfohlene CLAUDE.md Verbesserungen

### Neue Template-Kategorien:
```
- Universal-Dienstleister (Fahrschule, Kosmetik, Coaching, Yoga, Fitness)
- Kreativ/Kunst (Tattoo, Galerie, Fotografie, Goldschmiede)
- Gesundheit (Physio, Massage, Ernährungsberatung)
```

### Firecrawl-Optimierung:
```
- Max 3 gleichzeitige Jobs
- limit: 10-15 (statt 20)
- Retry-Wartezeit: 65s (statt 50s) bei 429-Fehler
```

### Fallback bei schlechter Crawl-Qualität:
```
- Wenn markdown < 500 Zeichen: HTML-Parsing direkt
- Bei Wix/Squarespace: Website-Builder erkannt → HTML-only Modus
```

---

## Template-Bewertung nach 13 Projekten

| Template | Einsätze | Ø-Score | Stärken | Schwächen |
|----------|----------|---------|---------|-----------|
| handwerker-klon | 2 | 92.5 | Perfekt für SHK, viele Seiten | Nur SHK |
| hlr-websiteentwurf | 1 | 92 | Solar+SHK, modern | TanStack Router komplex |
| sight-to-code-dream | 8 | 70.1 | Flexibel, alle Branchen | Zu generisch, wenig Branchenspezifik |
| zeal-security-blueprint | 1 | 72 | Viele Seiten, Sicherheit | Sehr dunkel für manche Branchen |
| pixel-perfect-clone-52135 | 0 | – | Blog, SEO-stark | Nur Reinigung |
| pixel-perfect-clone-95586 | 0 | – | Anwalt spezifisch | Sehr eng |
| remix-of-pixel-perfect-clone | 0 | – | Kompakt SHK | Zu ähnlich zu handwerker-klon |

---

## Nächste Verbesserungen (Priorität)

1. **HOCH:** Universal-Template für Dienstleister (nicht SHK) entwickeln
2. **HOCH:** Automatischen Logo-Download verbessern (mehr URL-Patterns)
3. **MITTEL:** Farb-Extraktion aus Screenshots (Puppeteer/Playwright)
4. **MITTEL:** Kontaktformular-Backend automatisch konfigurieren (Formspree/EmailJS)
5. **NIEDRIG:** Automatisches GitHub-Push nach Generierung
