'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingUp, EuroIcon } from 'lucide-react'

const cases = [
  {
    id: 'CASE_001',
    type: 'HANDWERKER / EINZELUNTERNEHMER',
    before: 'Max, Elektriker – schrieb jeden Abend manuell Angebote. 2 Stunden täglich. Kunden warteten oft 3 Tage auf eine Rückmeldung und buchten woanders.',
    after: 'Heute füllt ein Interessent ein kurzes Formular aus. Das Angebot landet automatisch in seinem Postfach – innerhalb von 5 Minuten.',
    results: [
      { icon: Clock, value: '2h → 5min', label: 'Angebot erstellen' },
      { icon: TrendingUp, value: '+40%', label: 'Mehr Aufträge' },
      { icon: EuroIcon, value: '8.400€', label: 'Mehr Umsatz / Jahr' },
    ],
    accent: '#FFCC00',
  },
  {
    id: 'CASE_002',
    type: 'DIENSTLEISTER / 3-PERSONEN-TEAM',
    before: 'Eine Unternehmensberaterin verlor täglich Stunden damit, Interessenten per E-Mail zu qualifizieren, Termine zu koordinieren und Follow-ups zu schreiben.',
    after: 'Ein KI-Assistent übernimmt die erste Kommunikation, qualifiziert automatisch und bucht nur noch passende Termine in ihren Kalender.',
    results: [
      { icon: Clock, value: '3h / Tag', label: 'Zurückgewonnen' },
      { icon: TrendingUp, value: '2x mehr', label: 'Kundenkapazität' },
      { icon: EuroIcon, value: '15.000€', label: 'Mehr Umsatz / Jahr' },
    ],
    accent: '#FFCC00',
  },
  {
    id: 'CASE_003',
    type: 'ONLINE-SHOP / 5-PERSONEN-TEAM',
    before: 'Ein kleiner Online-Shop bekam täglich 80 Kundenanfragen per E-Mail. Das Team verbrachte den halben Tag mit Standardantworten zu Lieferzeiten, Rücksendungen und Bestellstatus.',
    after: 'Ein KI-Assistent beantwortet 85% aller Anfragen automatisch. Das Team kümmert sich nur noch um echte Ausnahmen.',
    results: [
      { icon: Clock, value: '85%', label: 'Anfragen automatisch' },
      { icon: TrendingUp, value: '4h / Tag', label: 'Team entlastet' },
      { icon: EuroIcon, value: 'Kein Extra-', label: 'Mitarbeiter nötig' },
    ],
    accent: '#FFCC00',
  },
]

export default function CaseStudies() {
  return (
    <section id="referenzen" className="section-spacing" aria-labelledby="cases-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>ERFOLGSGESCHICHTEN</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
            <span className="text-[10px] font-mono" style={{ color: '#52525B' }}>03 BEISPIELE</span>
          </div>
          <h2 id="cases-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            ECHTE ERGEBNISSE
          </h2>
          <p className="text-sm font-mono max-w-xl" style={{ color: '#71717A' }}>
            Keine komplizierten Großprojekte. Einfache Automatisierungen – mit messbarem Unterschied im Alltag.
          </p>
        </motion.div>

        <div className="space-y-px" style={{ backgroundColor: 'rgba(255,204,0,0.08)' }}>
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group transition-colors duration-200"
              style={{ backgroundColor: '#000000' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111614')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
            >
              <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Label */}
                <div className="lg:col-span-2">
                  <div className="text-[10px] font-mono tracking-widest mb-1" style={{ color: c.accent }}>{c.id}</div>
                  <div className="text-[10px] font-mono text-white font-semibold tracking-wider leading-tight">{c.type}</div>
                </div>

                {/* Before / After */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest mb-2" style={{ color: '#FF2D55' }}>VORHER</div>
                    <p className="text-sm font-mono leading-relaxed" style={{ color: '#71717A' }}>{c.before}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest mb-2" style={{ color: c.accent }}>NACHHER</div>
                    <p className="text-sm font-mono leading-relaxed" style={{ color: '#71717A' }}>{c.after}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-4">
                  <div className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#52525B' }}>ERGEBNIS</div>
                  <div className="grid grid-cols-3 gap-3" aria-label="Ergebnisse">
                    {c.results.map((r) => {
                      const Icon = r.icon
                      return (
                        <div key={r.label} className="text-center">
                          <Icon className="w-3.5 h-3.5 mx-auto mb-1.5" style={{ color: c.accent }} aria-hidden="true" />
                          <div className="font-display font-bold text-sm" style={{ color: c.accent }}>{r.value}</div>
                          <div className="text-[10px] font-mono leading-tight mt-0.5" style={{ color: '#52525B' }}>{r.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
