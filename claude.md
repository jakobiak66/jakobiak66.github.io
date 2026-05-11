# Website Rebuild Automation V3

## Ziel
Alte Kundenwebseiten automatisch auslesen, analysieren und 
in moderne Templates übertragen. Templates werden intelligent
erweitert wenn die alte Website Seiten hat die im Template fehlen.
Nach jedem Durchlauf wird der Prozess selbst analysiert und 
optimiert.

## Umgebungsvariablen
- FIRECRAWL_API_KEY – in Systemumgebungsvariablen
- ANTHROPIC_API_KEY – in Systemumgebungsvariablen

## Projektstruktur
template_projekt_v3/
├── CLAUDE.md
├── PROZESS_OPTIMIERUNG.md    ← wird automatisch aktualisiert
├── Templates/
│   └── [7 template-ordner]/
│       └── meta.json
└── fertig/
    └── [domain-name]/        ← automatisch aus URL
        ├── raw_crawl.json
        ├── normalized_data.json
        ├── farben.json
        ├── image_map.json
        ├── seiten_analyse.json
        ├── cost_report.json
        ├── report.md
        ├── images/
        │   ├── original/
        │   └── kunde/
        │       └── README.md
        └── website/
            └── public/
                └── images/

## Projektname automatisch generieren
Leite den Projektordner-Namen aus der URL ab:
- https://www.elektro-schirmer.com/ → elektro-schirmer
- https://christ-berlin.de/ → christ-berlin
- Kleinbuchstaben, Bindestriche statt Leerzeichen
- www. und http(s):// entfernen

## Bei mehreren Websites
Verarbeite jede Website nacheinander komplett (Schritte 0-11).
Erstelle am Ende eine /fertig/GESAMT_REPORT.md mit:
- Übersicht aller verarbeiteten Websites
- Gesamt-Kosten
- Qualitäts-Scores im Vergleich
- Welches Template wie oft gewählt wurde

## Dein Ablauf bei jeder neuen Kundenwebsite

### Schritt 0 – Templates analysieren
Gehe durch jeden Ordner in /Templates/:
- Lies die Hauptdatei (index.html, App.tsx, main.tsx o.ä.)
- Erkenne Seitenstruktur, Branche, Stil, Komponenten
- Erkenne wo Bilder und Farben definiert sind
- Erkenne den visuellen Stil (minimalistisch, modern, 
  futuristisch, klassisch, verspielt etc.)
- Erstelle /Templates/[name]/meta.json:
{
  "name": "",
  "beschreibung": "",
  "stil": "",
  "geeignet_fuer": [],
  "seiten": [],
  "hauptdatei": "",
  "css_variablen_datei": "",
  "komponenten_ordner": "",
  "platzhalter": [],
  "bild_platzhalter": [],
  "farb_variablen": [],
  "erweiterbar": true
}

### Schritt 1 – Website scrapen mit Firecrawl
Nutze die Firecrawl API:
- Endpoint: https://api.firecrawl.dev/v1/crawl
- Max 20 Unterseiten
- Formate: markdown + html
- Speichere Rohdaten → /fertig/[projektname]/raw_crawl.json

Messe:
- Anzahl gecrawlter Seiten
- Kosten (Firecrawl: $0.001 pro Seite)
- Dauer in Sekunden

### Schritt 2 – Seiten-Analyse
Analysiere welche Seiten/Sektionen die alte Website hat:

Erkenne:
- Alle vorhandenen Seiten (Home, Über uns, Leistungen etc.)
- Einzigartige Sektionen die nur diese Website hat
- Struktur und Hierarchie der Navigation
- Welche Inhaltstypen pro Seite (Text, Bilder, Formulare etc.)

Vergleiche mit dem später gewählten Template:
- Welche Seiten sind im Template vorhanden? ✅
- Welche Seiten fehlen im Template aber sind auf der alten Site? ❌
- Welche Template-Seiten gibt es nicht auf der alten Site? ➕

Speichere → /fertig/[projektname]/seiten_analyse.json:
{
  "alte_website_seiten": [],
  "template_seiten": [],
  "seiten_vorhanden": [],
  "seiten_fehlend_im_template": [],
  "seiten_nur_im_template": [],
  "neue_seiten_erstellen": []
}

### Schritt 3 – Farben extrahieren
Analysiere das gecrawlte HTML/CSS:

Suche nach:
- CSS Variablen (--primary-color, --accent, etc.)
- Häufig verwendete HEX/RGB Werte
- Hintergrundfarben, Textfarben, Button-Farben
- Inline styles
- Tailwind Klassen (bg-blue-600 etc.)

Fallback falls keine Farben gefunden:
- Nutze neutrale professionelle Farben passend zur Branche
- Dokumentiere dass Farben nicht extrahiert werden konnten

Erstelle /fertig/[projektname]/farben.json:
{
  "primaer": "#hexwert",
  "sekundaer": "#hexwert",
  "akzent": "#hexwert",
  "hintergrund": "#hexwert",
  "text": "#hexwert",
  "text_hell": "#hexwert",
  "button": "#hexwert",
  "button_hover": "#hexwert",
  "quelle": "extrahiert|generiert|fallback",
  "alle_gefundenen": []
}

### Schritt 4 – Logo extrahieren
Suche das Logo auf mehreren Wegen:

Weg 1 – HTML Tags:
- <img> mit "logo" im src, alt oder class
- <svg> mit "logo" in id oder class
- <a href="/"> mit Bild darin

Weg 2 – CSS:
- background-image in Header/Nav Elementen
- Suche nach logo.png, logo.svg, logo.jpg in allen URLs

Weg 3 – Direkte URL-Versuche:
- [domain]/logo.png
- [domain]/logo.svg
- [domain]/logo.jpg
- [domain]/images/logo.png
- [domain]/img/logo.png
- [domain]/assets/logo.png
- [domain]/wp-content/uploads/
- [domain]/favicon.ico als letzter Fallback

Lade Logo → /fertig/[projektname]/images/original/logo.png
Falls nicht gefunden: in report.md dokumentieren

### Schritt 5 – Bilder herunterladen
Extrahiere ALLE Bild-URLs aus raw_crawl.json:

Suche in:
- Alle <img src="..."> Tags
- CSS background-image: url(...)
- srcset Attribute
- data-src (lazy loading)
- og:image Meta Tags
- Twitter Card Bilder
- Hintergrundbilder in Style-Attributen

Lade herunter → /fertig/[projektname]/images/original/
- Benenne sinnvoll: hero.jpg, team-1.jpg, service-1.jpg
- Filtere: alles unter 10kb, Tracking-Pixel, externe Icons
- Logo separat (Schritt 4)

Erstelle image_map.json:
{
  "logo": "images/original/logo.png",
  "hero": "images/original/hero.jpg",
  "team": [],
  "leistungen": [],
  "galerie": [],
  "sonstige": []
}

Erstelle /fertig/[projektname]/images/kunde/README.md:
"Kundenbilder hier ablegen. Gleiche Dateinamen
wie in image_map.json. Diese ersetzen die 
automatisch heruntergeladenen Bilder."

### Schritt 6 – Daten normalisieren
{
  "firma": "",
  "slogan": "",
  "beschreibung": "",
  "branche": "",
  "leistungen": [],
  "team": [],
  "kontakt": {
    "email": "",
    "telefon": "",
    "adresse": "",
    "stadt": "",
    "plz": ""
  },
  "oeffnungszeiten": "",
  "bilder": {
    "logo": "",
    "hero": "",
    "team": [],
    "leistungen": []
  },
  "farben": "[Verweis auf farben.json]",
  "kundenstimmen": [],
  "social_media": {},
  "impressum_vorhanden": false,
  "datenschutz_vorhanden": false
}
Speichere → /fertig/[projektname]/normalized_data.json

### Schritt 7 – Template auswählen
Vergleiche Branche, Stil und Struktur mit allen meta.json:

Bewertungskriterien:
- Branche passt? (40 Punkte)
- Seitenstruktur ähnlich? (30 Punkte)
- Stil passend? (20 Punkte)
- Erweiterbar für fehlende Seiten? (10 Punkte)

Wähle Template mit höchstem Score.
Dokumentiere Scores aller Templates in report.md.

### Schritt 8 – Template befüllen UND erweitern
Kopiere gewähltes Template → /fertig/[projektname]/website/

A) BEFÜLLEN:
- Ersetze alle Text-Platzhalter mit echten Kundendaten
- Ersetze alle Bild-Referenzen mit Pfaden aus image_map.json
- Passe CSS-Variablen und tailwind.config.ts mit farben.json an
- Logo in Header, Footer und Favicon einbauen
- Generiere Impressum und Datenschutz aus Kontaktdaten

B) ERWEITERN – für jede Seite in "seiten_fehlend_im_template":
- Analysiere den Stil der bestehenden Template-Komponenten
- Erstelle neue Komponente im GLEICHEN Stil und gleicher 
  Technologie (React/TypeScript/Tailwind)
- Nutze gleiche CSS-Variablen, gleiche Abstände, 
  gleiche Animationen wie das Template
- Füge neue Seite in Navigation ein
- Befülle direkt mit echten Kundendaten

Beispiel: Template hat keine Galerie-Seite aber alte 
Website hatte eine → erstelle Galerie-Komponente im 
Template-Stil mit den heruntergeladenen Bildern.

### Schritt 9 – GitHub Pages vorbereiten
Erstelle /fertig/[projektname]/website/vite.config.ts:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/[projektname]/',
})

Erstelle /fertig/[projektname]/website/.github/workflows/deploy.yml:

name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

Erstelle /fertig/[projektname]/github_pages_setup.md:
Schritte um die Website live zu schalten:
1. fertig/[projektname]/website/ als eigenes GitHub Repo pushen
2. Repo Settings → Pages → Source: gh-pages Branch
3. Link: https://jakobiak66.github.io/[projektname]/

### Schritt 10 – Cost & Quality Report
Erstelle /fertig/[projektname]/cost_report.json:
{
  "datum": "",
  "projektname": "",
  "url": "",
  "firecrawl": {
    "seiten_gecrawlt": 0,
    "kosten_usd": 0.00,
    "dauer_sekunden": 0
  },
  "bilder": {
    "gefunden": 0,
    "heruntergeladen": 0,
    "gefiltert": 0,
    "logo_gefunden": true,
    "gesamt_groesse_mb": 0.00
  },
  "farben": {
    "gefunden": 0,
    "quelle": "",
    "uebertragen": true
  },
  "seiten": {
    "alte_website": 0,
    "template_original": 0,
    "neu_erstellt": 0,
    "gesamt_final": 0
  },
  "anthropic": {
    "input_tokens": 0,
    "output_tokens": 0,
    "kosten_usd": 0.00
  },
  "gesamt_kosten_usd": 0.00,
  "qualitaet": {
    "score": 0,
    "felder_gefunden": [],
    "felder_fehlend": [],
    "seiten_generiert": [],
    "bilder_fehlend": [],
    "farben_uebertragen": []
  }
}

Erstelle /fertig/[projektname]/report.md

### Schritt 11 – Prozess selbst analysieren
Nach jedem abgeschlossenen Projekt:

Analysiere was gut/schlecht lief:
- Welche Daten konnten nicht extrahiert werden und warum?
- Welche Schritte haben am längsten gedauert?
- Wo waren die größten Datenlücken?
- Was hätte den Prozess schneller/besser gemacht?
- Welche Website-Typen funktionieren gut/schlecht?

Aktualisiere /PROZESS_OPTIMIERUNG.md:
- Füge neue Erkenntnisse hinzu
- Dokumentiere Muster die du erkannt hast
- Schlage konkrete Verbesserungen für CLAUDE.md vor
- Notiere welche Website-Typen besondere Behandlung brauchen

## Wichtige Hinweise
- Projektordner immer aus Domain ableiten
- Schritt 0 nur einmal ausführen (wenn meta.json fehlt)
- Farben mit Fallback – nie ohne Farben weitermachen
- Logo alle 3 Wege versuchen
- Neue Seiten IMMER im Template-Stil bauen
- GitHub Pages Config immer erstellen
- PROZESS_OPTIMIERUNG.md nach jedem Projekt updaten
- Bei Fehlern: weitermachen und dokumentieren
- Kosten pro Projekt UND gesamt tracken