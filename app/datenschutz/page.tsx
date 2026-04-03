import { Terminal } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Datenschutzerklärung – DigitalStrides',
  robots: { index: false },
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-dim hover:text-white transition-colors mb-8 block">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span style={{ color: '#FFCC00' }}>&lt;</span> ZURÜCK ZUR STARTSEITE
        </Link>
        <div className="text-[10px] font-mono tracking-[0.3em] mb-3" style={{ color: '#FFCC00' }}>LEGAL</div>
        <h1 className="font-display font-bold text-4xl uppercase text-white mb-2">DATENSCHUTZ&shy;ERKLÄRUNG</h1>
        <div className="h-px w-16" style={{ backgroundColor: '#FFCC00' }} />
      </div>

      <div className="space-y-8 font-mono text-sm" style={{ color: '#71717A' }}>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">1. Verantwortlicher</h2>
          <p>Verantwortlicher im Sinne der DSGVO ist:<br /><br />
          DigitalStrides · Nico Becker<br />
          Haller Ring 21, 74906 Bad Rappenau<br />
          E-Mail: <a href="mailto:nico.becker@digitalstrides.de" style={{ color: '#FFCC00' }}>nico.becker@digitalstrides.de</a>
          </p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Dienste und die Kommunikation mit Ihnen erforderlich ist. Dies umfasst insbesondere Daten, die Sie uns aktiv über das Kontaktformular mitteilen (Name, E-Mail-Adresse, Unternehmen, Nachricht).</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">3. Kontaktformular (Art. 6 Abs. 1 lit. b DSGVO)</h2>
          <p>Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, ggf. Unternehmen, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">4. Hosting & Server-Logs</h2>
          <p>Diese Website wird auf einem VPS-Server gehostet. Der Hosting-Anbieter erhebt automatisch sogenannte Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">5. Keine Cookies / kein Tracking</h2>
          <p>Diese Website verwendet keine Tracking-Cookies, keine Analyse-Tools (wie Google Analytics) und keine Werbenetzwerke. Es werden keine personenbezogenen Daten für Marketingzwecke erhoben oder weitergegeben.</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">6. Speicherdauer</h2>
          <p>Personenbezogene Daten, die uns über das Kontaktformular übermittelt werden, werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen (in der Regel nach 3 Jahren).</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">7. Ihre Rechte (Art. 15–22 DSGVO)</h2>
          <p>Sie haben jederzeit das Recht auf:<br /><br />
          – <strong className="text-white">Auskunft</strong> über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)<br />
          – <strong className="text-white">Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)<br />
          – <strong className="text-white">Löschung</strong> Ihrer Daten (Art. 17 DSGVO)<br />
          – <strong className="text-white">Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)<br />
          – <strong className="text-white">Datenübertragbarkeit</strong> (Art. 20 DSGVO)<br />
          – <strong className="text-white">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)<br /><br />
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:nico.becker@digitalstrides.de" style={{ color: '#FFCC00' }}>nico.becker@digitalstrides.de</a>
          </p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Baden-Württemberg ist:<br /><br />
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
          Postfach 10 29 32, 70025 Stuttgart<br />
          <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" style={{ color: '#FFCC00' }}>www.baden-wuerttemberg.datenschutz.de</a>
          </p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
        </section>

      </div>
    </main>
  )
}
