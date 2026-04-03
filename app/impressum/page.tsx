import { Terminal } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Impressum – DigitalStrides',
  robots: { index: false },
}

export default function Impressum() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-dim hover:text-white transition-colors mb-8 block">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span style={{ color: '#FFCC00' }}>&lt;</span> ZURÜCK ZUR STARTSEITE
        </Link>
        <div className="text-[10px] font-mono tracking-[0.3em] mb-3" style={{ color: '#FFCC00' }}>LEGAL</div>
        <h1 className="font-display font-bold text-4xl uppercase text-white mb-2">IMPRESSUM</h1>
        <div className="h-px w-16" style={{ backgroundColor: '#FFCC00' }} />
      </div>

      <div className="space-y-8 font-mono text-sm" style={{ color: '#71717A' }}>
        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">Angaben gemäß § 5 TMG</h2>
          <p>DigitalStrides<br />
          Nico Becker<br />
          Haller Ring 21<br />
          74906 Bad Rappenau</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">Kontakt</h2>
          <p>E-Mail: <a href="mailto:nico.becker@digitalstrides.de" style={{ color: '#FFCC00' }}>nico.becker@digitalstrides.de</a></p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
          <p>Nico Becker<br />
          Haller Ring 21<br />
          74906 Bad Rappenau</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">Haftung für Inhalte</h2>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">Haftung für Links</h2>
          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-widest uppercase mb-3">Urheberrecht</h2>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        </section>
      </div>
    </main>
  )
}
