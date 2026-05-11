# GitHub Pages Setup – Alle 13 Websites auf einmal

Dieses System baut alle 13 Websites automatisch und hostet sie
auf einem einzigen GitHub Pages Account.

## Ziel-Struktur nach dem Deployment

```
https://jakobiak66.github.io/                    ← Landing Page (alle 13 Sites)
https://jakobiak66.github.io/haustechnik-hun/    ← Haustechnik Hun
https://jakobiak66.github.io/heizung-sanitaer-adamek/
https://jakobiak66.github.io/shk-rathmann/
https://jakobiak66.github.io/christ-berlin/
https://jakobiak66.github.io/swa-berlin/
https://jakobiak66.github.io/goldschmiede-cifci/
https://jakobiak66.github.io/susanneheitmann/
https://jakobiak66.github.io/fahrschulekolb/
https://jakobiak66.github.io/yoga-kendra/
https://jakobiak66.github.io/sehrfit/
https://jakobiak66.github.io/fahrschule-salman/
https://jakobiak66.github.io/fat-daddys-tattoo/
https://jakobiak66.github.io/fahrschule-frank-dopf/
```

---

## Schritt-für-Schritt Anleitung

### Schritt 1 – GitHub Repository erstellen

1. Gehe zu https://github.com/new
2. Repository-Name: **`jakobiak66.github.io`** (für Root-URL) ODER einen beliebigen Namen
   - Bei Name `jakobiak66.github.io` → Sites sind direkt unter `https://jakobiak66.github.io/`
   - Bei anderem Namen (z.B. `websites`) → Sites sind unter `https://jakobiak66.github.io/websites/`
3. Visibility: **Public**
4. **OHNE** README initialisieren
5. Klick "Create repository"

### Schritt 2 – Git initialisieren und pushen

Öffne PowerShell im Ordner `template_projekt_v3_github/`:

```powershell
# Git initialisieren
git init
git add .
git commit -m "Initial commit: 13 Kundenwebseiten"

# Mit GitHub verbinden (URL anpassen)
git remote add origin https://github.com/jakobiak66/jakobiak66.github.io.git
git branch -M main
git push -u origin main
```

### Schritt 3 – GitHub Pages aktivieren

1. Gehe zu deinem Repo auf GitHub
2. **Settings** → **Pages**
3. Source: **GitHub Actions** (nicht "Deploy from branch")
4. Speichern

### Schritt 4 – Workflow starten

Der Workflow startet automatisch beim Push. Du kannst ihn auch manuell starten:
- **Actions** → **"Deploy All 13 Websites to GitHub Pages"** → **"Run workflow"**

### Schritt 5 – Warten und prüfen

- Der Build dauert ca. **5-10 Minuten** (13 Projekte parallel)
- Nach Abschluss: `https://jakobiak66.github.io/` aufrufen
- Dort siehst du die Landing Page mit Links zu allen 13 Sites

---

## Wie der Workflow funktioniert

```
Push zu main
    │
    ▼
┌─────────────────────────────────────────┐
│  PHASE 1: Build (parallel, 13 Jobs)     │
│  ┌──────────────┐  ┌──────────────┐     │
│  │haustechnik   │  │christ-berlin │ ... │
│  │npm install   │  │npm install   │     │
│  │vite build    │  │vite build    │     │
│  │--base=/name/ │  │--base=/name/ │     │
│  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────┐
│  PHASE 2: Assemble & Deploy             │
│  dist/                                  │
│  ├── index.html   ← Landing Page        │
│  ├── haustechnik-hun/                   │
│  ├── christ-berlin/                     │
│  └── ... (alle 13)                      │
│       ↓                                 │
│  GitHub Pages Deploy                    │
└─────────────────────────────────────────┘
```

---

## Bekannte Einschränkungen

### TanStack Start Projekte (christ-berlin, swa-berlin, goldschmiede-cifci)
Diese 3 Projekte verwenden `@lovable.dev/vite-tanstack-config` und TanStack Router.
Falls der Build fehlschlägt (z.B. wegen SSR-Konfiguration), gibt es zwei Lösungen:

**Option A – In Lovable.dev bearbeiten:**
Öffne das Projekt in Lovable.dev, es baut und deployed automatisch.

**Option B – vite.config.ts anpassen:**
```typescript
// Ersetze den Inhalt von vite.config.ts:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/[projektname]/',
})
```

### Client-Side Routing (404 Fehler bei direktem URL-Aufruf)
React Router und TanStack Router laden Seiten client-seitig.
GitHub Pages gibt bei direktem URL-Aufruf (z.B. `/haustechnik-hun/ueber-uns`) einen 404-Fehler.

**Lösung:** Eine `404.html` Datei im dist-Ordner hinzufügen die zurück zu `index.html` redirected.
Der Workflow kann dafür erweitert werden.

---

## Dateien in diesem Ordner

| Datei | Zweck |
|-------|-------|
| `index.html` | Landing Page mit Links zu allen 13 Sites |
| `github_pages_setup.md` | Diese Anleitung |
| `/.github/workflows/deploy-all.yml` | GitHub Actions Workflow (im Repo-Root) |
