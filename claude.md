# Website Rebuild Automation V3 – Final

## Ziel
Alte Kundenwebseiten automatisch auslesen und in moderne
Templates übertragen. Dabei:
- NUR echte Bilder von der Original-Website verwenden
- Seitenstruktur der alten Website exakt spiegeln
- Templates intelligent erweitern oder kürzen
- KI-generierte Bilder sind VERBOTEN

## Umgebungsvariablen
- FIRECRAWL_API_KEY – in Systemumgebungsvariablen
- ANTHROPIC_API_KEY – in Systemumgebungsvariablen

## Projektstruktur
template_projekt_v3/
├── CLAUDE.md
├── PROZESS_OPTIMIERUNG.md
├── .gitignore                ← MUSS existieren vor git add
├── Templates/
│   └── [template-ordner]/
│       └── meta.json
└── fertig/
    └── [domain-name]/
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

## SCHRITT 0a – .gitignore zuerst erstellen
BEVOR irgendeine andere Datei erstellt wird:

fertig/*/raw_crawl.json
fertig/*/node_modules/
fertig/*/dist/
fertig/*/website/node_modules/
fertig/*/website/dist/
**/.env
*.local
.DS_Store

## SCHRITT 0b – Templates analysieren
Für jeden Template-Ordner:
- Lies Hauptdatei (App.tsx, main.tsx, index.html)
- Erkenne: Stil, Branche, Seiten, Komponenten
- Prüfe ob TanStack Router verwendet wird
  Falls ja: konvertiere zu react-router-dom
  (TanStack SSR funktioniert nicht auf GitHub Pages)
- Erstelle meta.json:
{
  "name": "",
  "beschreibung": "",
  "stil": "",
  "geeignet_fuer": [],
  "seiten": [],
  "hauptdatei": "",
  "css_variablen_datei": "",
  "router": "react-router-dom|tanstack",
  "platzhalter": [],
  "bild_platzhalter": [],
  "farb_variablen": []
}

## SCHRITT 1 – Website scrapen
Firecrawl API:
- Endpoint: https://api.firecrawl.dev/v1/crawl
- Max 20 Unterseiten
- Formate: markdown + html
- Speichere NICHT als raw_crawl.json ins Git!
  Speichere temporär, extrahiere Daten, dann löschen.

## SCHRITT 2 – Seiten-Analyse (KRITISCH)
Analysiere GENAU welche Seiten die alte Website hat:

Erstelle seiten_analyse.json:
{
  "alte_website_seiten": [
    {
      "url": "/anfahrt",
      "titel": "Anfahrt",
      "inhalt_typ": "Karte + Adresse",
      "bilder": ["karte.jpg"],
      "navigation_position": 5
    }
  ],
  "template_seiten": [],
  "hinzufuegen": [],
  "entfernen": [],
  "behalten": []
}

Regel: 
- Seite auf alter Website aber nicht im Template → HINZUFÜGEN
- Seite im Template aber nicht auf alter Website → ENTFERNEN
- Beide haben die Seite → BEHALTEN und befüllen

## SCHRITT 3 – Farben extrahieren
Suche nach CSS Variablen, HEX/RGB Werten, Tailwind Klassen.

Fallback falls keine Farben:
- Branchenpassende neutrale Farben generieren
- In report.md dokumentieren

Erstelle farben.json:
{
  "primaer": "#hexwert",
  "sekundaer": "#hexwert",
  "akzent": "#hexwert",
  "hintergrund": "#hexwert",
  "text": "#hexwert",
  "button": "#hexwert",
  "quelle": "extrahiert|generiert"
}

## SCHRITT 4 – Logo extrahieren
Suche in dieser Reihenfolge:
1. <img> mit "logo" in src/alt/class
2. <a href="/"> mit Bild darin
3. CSS background-image in Header/Nav
4. Direkte URLs: /logo.png, /logo.svg, /logo.jpg,
   /images/logo.png, /img/logo.png, /assets/logo.png,
   /wp-content/uploads/, /favicon.ico als letzter Fallback

→ /fertig/[projekt]/images/original/logo.png

## SCHRITT 5 – Bilder herunterladen (KONTEXTBEWUSST)
WICHTIG: Jedes Bild muss mit seinem Kontext gespeichert werden!

Für jedes Bild auf der alten Website:
- Auf welcher Seite war es? (URL)
- In welcher Sektion? (Hero, Team, Leistung, Galerie...)
- Welcher Text stand daneben?
- Was zeigt das Bild?

Erstelle image_map.json:
{
  "logo": {
    "datei": "original/logo.png",
    "kontext": "Header Logo"
  },
  "hero": {
    "datei": "original/hero.jpg", 
    "kontext": "Startseite Hero Banner",
    "original_seite": "/",
    "original_sektion": "header"
  },
  "team": [
    {
      "datei": "original/team-laszlo.jpg",
      "kontext": "Inhaber Laszlo Hun",
      "original_seite": "/ueber-uns",
      "original_sektion": "team"
    }
  ],
  "leistungen": [],
  "galerie": [],
  "sonstige": []
}

Lade alle Bilder herunter → /fertig/[projekt]/images/original/
Filter: unter 10kb, Tracking-Pixel, externe Icons weglassen

## SCHRITT 6 – Daten normalisieren
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
  "bilder": "[Verweis auf image_map.json]",
  "farben": "[Verweis auf farben.json]",
  "kundenstimmen": [],
  "social_media": {},
  "impressum_vorhanden": false,
  "datenschutz_vorhanden": false
}

## SCHRITT 7 – Template auswählen
Bewertung (0-100):
- Branche passt: 40 Punkte
- Seitenstruktur ähnlich: 30 Punkte  
- Stil passend: 20 Punkte
- Erweiterbar: 10 Punkte

Alle Scores in report.md dokumentieren.

## SCHRITT 8 – Template befüllen UND anpassen

### A) BILDER EINBAUEN (STRENGE REGELN):
❌ VERBOTEN: KI-generierte Bilder, Stock-Fotos,
   Unsplash, Placeholder-Dienste
✅ ERLAUBT: Nur Bilder aus /images/original/

Wenn kein passendes Bild vorhanden:
<div class="image-placeholder" style="
  background: #f0f0f0;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-radius: 8px;
  padding: 20px;
">
  <p style="color: #999; text-align: center;">
    📷 Platzhalter<br/>
    <small>[Was hier hin soll]</small>
  </p>
</div>

Bilder KONTEXTBEWUSST platzieren:
- Team-Bild → Team-Sektion
- Hero-Bild → Hero-Sektion  
- Leistungsbild → jeweilige Leistungsseite
- NICHT: Fahrzeugbild in Team-Sektion packen!

### B) SEITEN ANPASSEN:
Seiten aus seiten_analyse.json "hinzufuegen":
- Neue Komponente im exakten Template-Stil erstellen
- Gleiche CSS-Variablen, Abstände, Animationen
- Echte Inhalte von alter Website
- In Navigation einfügen

Seiten aus seiten_analyse.json "entfernen":
- Komponente löschen
- Aus Navigation entfernen
- Aus Router entfernen

### C) FARBEN UND LOGO:
- CSS-Variablen mit farben.json überschreiben
- tailwind.config.ts anpassen
- Logo in Header, Footer, Favicon

### D) IMPRESSUM & DATENSCHUTZ:
Immer generieren aus Kontaktdaten – auch wenn
auf der alten Website nicht vorhanden (Pflicht!)

## SCHRITT 9 – GitHub Pages vorbereiten

### Vite Config:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/[projektname]/',
})

### TanStack Projekte konvertieren:
Falls Template TanStack Router nutzt:
1. Entferne @tanstack/react-router
2. Füge react-router-dom hinzu
3. Konvertiere createFileRoute → normale Komponenten
4. Erstelle App.tsx mit BrowserRouter + Routes
5. Erstelle main.tsx mit ReactDOM.createRoot

### Deploy Workflow:
Erstelle .github/workflows/deploy-all.yml
mit Node.js 24 (nicht 20!):
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
      node-version: 24

## SCHRITT 10 – Build testen (PFLICHT)
cd fertig/[projektname]/website
npm install
npm run build

Falls Fehler: SOFORT fixen bevor nächste Website.
dist/index.html muss existieren!

## SCHRITT 11 – Report erstellen
Erstelle /fertig/[projektname]/report.md:
- Template gewählt + Begründung + Scores
- Bilder: heruntergeladen / Platzhalter gesetzt
- Seiten: hinzugefügt / entfernt
- Farben übernommen
- Was der Kunde noch liefern muss
- Kosten

Erstelle /fertig/[projektname]/cost_report.json

## SCHRITT 12 – Prozess optimieren
Nach jedem Projekt PROZESS_OPTIMIERUNG.md updaten:
- Was lief gut/schlecht?
- Welche Website-Typen brauchen besondere Behandlung?
- Verbesserungsvorschläge für diesen Prompt

## Wichtige Hinweise
- .gitignore VOR allem anderen erstellen
- raw_crawl.json NIE ins Git (enthält fremde API-Tokens)
- KI-Bilder sind VERBOTEN – lieber Platzhalter
- Bilder KONTEXTBEWUSST platzieren
- TanStack immer zu react-router-dom konvertieren
- Build MUSS lokal erfolgreich sein vor Push
- Node.js 24 in GitHub Actions verwenden
- Kosten pro Projekt und gesamt tracken