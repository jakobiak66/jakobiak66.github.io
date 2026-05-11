
# Kontaktformular mit Supabase Edge Function verbinden

## Zusammenfassung
Das bestehende Kontaktformular wird so angepasst, dass beim Absenden die Daten an die Supabase Edge Function gesendet werden. Die Formularstruktur bleibt unverändert.

## Was wird geändert

### Datei: `src/pages/Kontakt.tsx`

**1. State-Management hinzufügen**
- States für alle Formularfelder (name, company, email, phone, message)
- Loading-State für den Sende-Button
- Formular nach erfolgreichem Senden leeren

**2. Submit-Logik anpassen**
Die `handleSubmit`-Funktion wird erweitert:

```text
POST https://dcyeadkbwimxkrmrogdg.supabase.co/functions/v1/contact

Headers:
  Content-Type: application/json
  apikey: sb_publishable_drqi8iz6hw5Mpvh9L9TrXA_2OdenjRp
  x-tenant: zeal-security
  x-token: aaa9399398s8sdvsv2o4sfn230ftien49djdjt950wsmdsmr0aa03m3

Body:
{
  "form": "kontakt",
  "name": "...",
  "email": "...",
  "telefon": "...",
  "nachricht": "..."
}
```

**3. Feld-Mapping**
| Formularfeld | API-Feld |
|--------------|----------|
| Name (name) | name |
| E-Mail (email) | email |
| Telefon (phone) | telefon |
| Nachricht (message) | nachricht |

**4. Response-Handling**
- Bei `{ ok: true }`: Erfolgsmeldung via Toast anzeigen, alle Felder leeren
- Bei Fehler: Fehlermeldung aus der API-Response im Toast anzeigen

**5. UX-Verbesserungen**
- Loading-Spinner im Button während des Sendens
- Button während des Sendens deaktiviert
- Fehlerbehandlung für Netzwerkfehler

## Hinweis zum API-Key
Der `apikey` ist ein publishable Key und kann sicher im Frontend-Code verwendet werden (ähnlich wie Supabase anon keys oder Stripe publishable keys).

## Technische Details

Die Implementierung nutzt:
- React `useState` für Formular-State
- Native `fetch` API für den POST-Request
- Bestehende `useToast` Hook für Benachrichtigungen
