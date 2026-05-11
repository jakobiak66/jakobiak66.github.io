import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import SkipLink from "@/components/SkipLink";

const Datenschutz = () => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead title="Datenschutzerklärung | Zeal Security & Service GmbH" description="Datenschutzerklärung der Zeal Security & Service GmbH – Informationen zur Datenverarbeitung gemäß DSGVO." canonicalPath="/datenschutz" />
      <SkipLink />
      <Navigation />
      
      <main id="main-content" role="main">
        <section className="gradient-subtle py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-12 text-4xl md:text-5xl font-bold">Datenschutz­erklärung</h1>
              
              <div className="space-y-12">
                {/* 1. Datenschutz auf einen Blick */}
                <section>
                  <h2 className="mb-6 text-2xl font-semibold">1. Datenschutz auf einen Blick</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold">Allgemeine Hinweise</h3>
                  <p className="mb-6 text-muted-foreground">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Datenerfassung auf dieser Website</h3>
                  
                  <h4 className="mb-2 text-lg font-medium">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                  <p className="mb-4 text-muted-foreground">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Wie erfassen wir Ihre Daten?</h4>
                  <p className="mb-4 text-muted-foreground">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Wofür nutzen wir Ihre Daten?</h4>
                  <p className="mb-4 text-muted-foreground">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p className="mb-4 text-muted-foreground">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                </section>

                {/* 2. Hosting */}
                <section>
                  <h2 className="mb-6 text-2xl font-semibold">2. Hosting</h2>
                  <p className="mb-4 text-muted-foreground">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

                  <h3 className="mb-3 text-xl font-semibold">Externes Hosting</h3>
                  <p className="mb-4 text-muted-foreground">
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters bzw. dessen Unterauftragsverarbeitern verarbeitet. Hierbei kann es sich insbesondere um IP-Adressen, Logdaten (z. B. Zeitpunkt des Seitenaufrufs), Meta- und Kommunikationsdaten sowie sonstige Daten handeln, die bei der Nutzung einer Website anfallen.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Das externe Hosting erfolgt zum Zwecke der sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO) sowie – soweit im Einzelfall erforderlich – zur Vertragsanbahnung/Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Soweit im Rahmen des Hostings Cookies oder vergleichbare Technologien eingesetzt werden, erfolgt dies entweder (i) soweit technisch erforderlich (§ 25 Abs. 2 TDDDG) oder (ii) auf Grundlage Ihrer Einwilligung (§ 25 Abs. 1 TDDDG i. V. m. Art. 6 Abs. 1 lit. a DSGVO); eine erteilte Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    <strong>Wir setzen folgenden Hoster ein:</strong><br />
                    Lovable Labs Incorporated, 1111b South Governors Avenue, Dover, DE 19904, USA
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Unterauftragsverarbeiter</h4>
                  <p className="mb-4 text-muted-foreground">
                    Unser Hoster setzt Unterauftragsverarbeiter ein (z. B. Cloudflare als Content-Delivery-Netzwerk / Caching). Eine aktuelle Liste der Unterauftragsverarbeiter stellt Lovable bereit unter:{" "}
                    <a href="https://enterprise.lovable.dev/subprocessors" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://enterprise.lovable.dev/subprocessors</a>
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Verarbeitungsorte / Drittlandübermittlung</h4>
                  <p className="mb-4 text-muted-foreground">
                    Nach Angaben von Lovable kann eine Verarbeitung von Kundendaten in den USA (primär) sowie im Vereinigten Königreich und in Belgien erfolgen. Soweit eine Übermittlung in die USA bzw. in andere Drittländer erfolgt, erfolgt diese auf Grundlage geeigneter Garantien (insbesondere EU-Standardvertragsklauseln (SCC) und – soweit anwendbar – weiterer anerkannter Transfermechanismen). Informationen hierzu bzw. eine Kopie der geeigneten Garantien können Sie bei uns anfordern.
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Auftragsverarbeitung</h4>
                  <p className="mb-4 text-muted-foreground">
                    Wir haben mit dem Anbieter einen Vertrag über Auftragsverarbeitung (AVV/DPA) geschlossen. Weitere Informationen zur Datenverarbeitung durch Lovable finden Sie hier:{" "}
                    <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://lovable.dev/privacy</a>
                    <br />
                    Informationen zur Auftragsverarbeitung (DPA):{" "}
                    <a href="https://lovable.dev/data-processing-agreement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://lovable.dev/data-processing-agreement</a>
                  </p>
                </section>

                {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
                <section>
                  <h2 className="mb-6 text-2xl font-semibold">3. Allgemeine Hinweise und Pflicht­informationen</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold">Datenschutz</h3>
                  <p className="mb-4 text-muted-foreground">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="mb-4 text-muted-foreground">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <address className="mb-4 text-muted-foreground not-italic">
                    <strong>Zeal Security & Service GmbH</strong><br />
                    Trautenaustraße 23<br />
                    10717 Berlin<br /><br />
                    Telefon: 0163 462 9993<br />
                    E-Mail: <a href="mailto:office@zealsecurity.de" className="text-primary hover:underline">office@zealsecurity.de</a>
                  </address>
                  <p className="mb-4 text-muted-foreground">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Speicherdauer</h3>
                  <p className="mb-4 text-muted-foreground">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                  <p className="mb-4 text-muted-foreground">
                    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Empfänger von personenbezogenen Daten</h3>
                  <p className="mb-4 text-muted-foreground">
                    Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="mb-4 text-muted-foreground">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                  <div className="mb-4 rounded-lg border-l-4 border-primary bg-muted/50 p-4">
                    <p className="mb-4 font-medium text-foreground">
                      WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                    </p>
                    <p className="font-medium text-foreground">
                      WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                    </p>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
                  <p className="mb-4 text-muted-foreground">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Recht auf Daten­übertrag­barkeit</h3>
                  <p className="mb-4 text-muted-foreground">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Auskunft, Berichtigung und Löschung</h3>
                  <p className="mb-4 text-muted-foreground">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Recht auf Einschränkung der Verarbeitung</h3>
                  <p className="mb-4 text-muted-foreground">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  </ul>
                  <p className="mb-4 text-muted-foreground">
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">SSL- bzw. TLS-Verschlüsselung</h3>
                  <p className="mb-4 text-muted-foreground">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Widerspruch gegen Werbe-E-Mails</h3>
                  <p className="mb-4 text-muted-foreground">
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                  </p>
                </section>

                {/* 4. Datenerfassung auf dieser Website */}
                <section>
                  <h2 className="mb-6 text-2xl font-semibold">4. Datenerfassung auf dieser Website</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold">Kontaktformular</h3>
                  <p className="mb-4 text-muted-foreground">
                    Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, verarbeiten wir die von Ihnen angegebenen Daten (insbesondere Name/Unternehmen, E-Mail-Adresse, Telefonnummer sowie Ihr Anliegen) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Bearbeitung Ihrer Anfrage erforderlich ist (z. B. an technische Dienstleister für die Übermittlung von Formularanfragen, siehe unten) oder wenn eine sonstige Rechtsgrundlage dies erlaubt.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    <strong>Speicherdauer:</strong> Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck für die Speicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Einsatz von Supabase (Edge Functions) zur Verarbeitung von Formularanfragen</h3>
                  <p className="mb-4 text-muted-foreground">
                    Für die technische Entgegennahme und Verarbeitung von Anfragen über unser Kontaktformular nutzen wir Supabase (Edge Functions). Dabei werden die von Ihnen in das Formular eingegebenen Daten (z. B. Name/Unternehmen, E-Mail-Adresse, Telefonnummer, Nachricht) serverseitig verarbeitet und – je nach technischer Ausgestaltung – ggf. zwischengespeichert (z. B. zur Fehleranalyse oder Nachverfolgung der Anfrage). Zusätzlich können technische Protokolldaten anfallen (z. B. IP-Adresse, Zeitpunkt der Anfrage, Browser-/Geräteinformationen), um die sichere und fehlerfreie Übermittlung zu ermöglichen.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen/Vertrag) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Bearbeitung und IT-Sicherheit).
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    <strong>Empfänger/Kategorie Empfänger:</strong> Supabase, Inc. (technischer Dienstleister).<br />
                    <strong>Verarbeitungsorte:</strong> Je nach gewählter Supabase-Region. Bei Wahl einer EU-Region (z. B. Frankfurt) erfolgt die Verarbeitung primär im EU/EWR.<br />
                    <strong>Auftragsverarbeitung:</strong> Es besteht ein Vertrag über Auftragsverarbeitung (DPA/AVV) mit dem Anbieter.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">E-Mail-Versand über Resend</h3>
                  <p className="mb-4 text-muted-foreground">
                    Für den Versand von Kontaktformular-Inhalten und/oder Formularbenachrichtigungen per E-Mail nutzen wir den Dienst Resend (E-Mail-API). Hierzu werden insbesondere Absender-/Empfängerinformationen (z. B. E-Mail-Adresse, Name) sowie der Inhalt der Nachricht verarbeitet.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen/Vertrag) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen Zustellung und Missbrauchsvermeidung).
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    <strong>Empfänger/Kategorie Empfänger:</strong> Plus Five Five, Inc. (Resend), 2261 Market Street #5039, San Francisco, CA 94114, USA.<br />
                    <strong>Drittlandübermittlung:</strong> Resend verarbeitet personenbezogene Daten nach Anbieterangaben primär in den USA. Die Übermittlung erfolgt auf Grundlage geeigneter Garantien (u. a. EU-Standardvertragsklauseln) und – soweit anwendbar – weiterer anerkannter Transfermechanismen (z. B. EU-US Data Privacy Framework).<br />
                    <strong>Auftragsverarbeitung:</strong> Es besteht ein Vertrag über Auftragsverarbeitung (DPA/AVV) mit dem Anbieter.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p className="mb-4 text-muted-foreground">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                  </p>

                  <h3 className="mb-3 text-xl font-semibold">Kommunikation via WhatsApp (Link)</h3>
                  <p className="mb-4 text-muted-foreground">
                    Auf unserer Website stellen wir einen Link bereit, über den Sie uns per WhatsApp kontaktieren können. Beim bloßen Besuch unserer Website werden dadurch in der Regel noch keine Daten an WhatsApp übermittelt. Erst wenn Sie den WhatsApp-Link anklicken, werden Sie zu WhatsApp bzw. auf eine WhatsApp-Webseite weitergeleitet. Dabei kann WhatsApp insbesondere Ihre IP-Adresse sowie ggf. weitere technische Informationen (z. B. Geräte-/Browserinformationen) verarbeiten. Wenn Sie anschließend mit uns über WhatsApp kommunizieren, verarbeitet WhatsApp die dabei anfallenden Daten (z. B. Telefonnummer, Profilinformationen, Nachrichteninhalte sowie Kommunikations-Metadaten) nach den eigenen Datenschutzbestimmungen.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Wir verarbeiten Ihre über WhatsApp übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung/Erfüllung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Kommunikation). Sofern eine Einwilligung erforderlich ist bzw. abgefragt wird, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; eine Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Anbieter von WhatsApp in Europa ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Eine Übermittlung von Daten in die USA kann nicht ausgeschlossen werden. WhatsApp stellt hierzu Informationen zu Transfermechanismen (z. B. EU-Standardvertragsklauseln) bereit; zudem ist WhatsApp LLC im EU-US Data Privacy Framework gelistet.
                  </p>
                  <p className="mb-4 text-muted-foreground"><strong>Weitere Informationen:</strong></p>
                  <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Datenschutzrichtlinie (EEA): <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.whatsapp.com/legal/privacy-policy-eea</a></li>
                    <li>Business Data Transfer Addendum: <a href="https://www.whatsapp.com/legal/business-data-transfer-addendum" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.whatsapp.com/legal/business-data-transfer-addendum</a></li>
                    <li>DPF-Hinweis/Listing: <a href="https://www.dataprivacyframework.gov/participant/7735" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.dataprivacyframework.gov/participant/7735</a></li>
                  </ul>
                </section>

                {/* 5. Eigene Dienste */}
                <section>
                  <h2 className="mb-6 text-2xl font-semibold">5. Eigene Dienste</h2>
                  
                  <h3 className="mb-3 text-xl font-semibold">Umgang mit Bewerberdaten</h3>
                  <p className="mb-4 text-muted-foreground">
                    Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich behandelt werden.
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Umfang und Zweck der Datenerhebung</h4>
                  <p className="mb-4 text-muted-foreground">
                    Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z. B. Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgesprächen etc.), soweit dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür ist § 26 BDSG nach deutschem Recht (Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine Vertragsanbahnung) und – sofern Sie eine Einwilligung erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist jederzeit widerrufbar. Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens ausschließlich an Personen weitergegeben, die an der Bearbeitung Ihrer Bewerbung beteiligt sind.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Sofern die Bewerbung erfolgreich ist, werden die von Ihnen eingereichten Daten auf Grundlage von § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in unseren Datenverarbeitungssystemen gespeichert.
                  </p>

                  <h4 className="mb-2 text-lg font-medium">Aufbewahrungsdauer der Daten</h4>
                  <p className="mb-4 text-muted-foreground">
                    Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung oder Zurückziehung der Bewerbung) bei uns aufzubewahren. Anschließend werden die Daten gelöscht und die physischen Bewerbungsunterlagen vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken im Falle eines Rechtsstreits. Sofern ersichtlich ist, dass die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z. B. aufgrund eines drohenden oder anhängigen Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die weitergehende Aufbewahrung entfällt.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) erteilt haben oder wenn gesetzliche Aufbewahrungspflichten der Löschung entgegenstehen.
                  </p>
                </section>

                <div className="mt-8 border-t border-border pt-8">
                  <p className="text-sm text-muted-foreground">Stand: Januar 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
