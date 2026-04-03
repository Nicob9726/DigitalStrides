'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 'T_001',
    name: 'Markus S.',
    role: 'Elektriker · Einzelunternehmer',
    text: 'Ich hab früher jeden Abend 2 Stunden damit verbracht, Angebote zu schreiben. Das war meine Feierabendzeit. Heute läuft das automatisch – und ich kriege sogar mehr Aufträge, weil die Angebote viel schneller rausgehen.',
    stars: 5,
    accent: '#FFCC00',
  },
  {
    id: 'T_002',
    name: 'Sarah M.',
    role: 'Unternehmensberaterin · 2-Personen-Firma',
    text: 'Ich habe wochenlang gezögert, weil ich dachte, das ist alles viel zu kompliziert für mich. Aber DigitalStrides hat alles erklärt und eingerichtet. Jetzt beantwortet mein KI-Assistent die ersten Anfragen – und ich habe wieder Zeit für meine eigentliche Arbeit.',
    stars: 5,
    accent: '#FFCC00',
  },
  {
    id: 'T_003',
    name: 'Thomas W.',
    role: 'Inhaber · Online-Shop mit 4 Mitarbeitern',
    text: 'Wir haben keinen extra Mitarbeiter eingestellt, obwohl unser Umsatz um 40% gewachsen ist. Die Automatisierungen fangen den Großteil der Arbeit ab. Das war die beste Investition des Jahres.',
    stars: 5,
    accent: '#FFCC00',
  },
  {
    id: 'T_004',
    name: 'Lisa H.',
    role: 'Steuerberaterin · 3-Personen-Kanzlei',
    text: 'Wir bekommen jetzt täglich automatisch einen Überblick über alle offenen Aufgaben und Fristen. Früher hat das meine Assistentin jeden Morgen manuell zusammengestellt. Das spart uns jede Woche mehrere Stunden.',
    stars: 5,
    accent: '#FFCC00',
  },
]

export default function Testimonials() {
  return (
    <section className="section-spacing border-y" style={{ backgroundColor: 'rgba(17,22,20,0.4)', borderColor: 'rgba(255,204,0,0.1)' }} aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>KUNDENSTIMMEN</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
            <span className="text-[10px] font-mono" style={{ color: '#52525B' }}>04 BEWERTUNGEN</span>
          </div>
          <h2 id="testimonials-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white">
            WAS KUNDEN SAGEN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,204,0,0.08)' }}>
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 lg:p-8 group transition-colors duration-200"
              style={{ backgroundColor: '#000000' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111614')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-[10px] font-mono tracking-widest" style={{ color: t.accent, opacity: 0.5 }}>{t.id}</div>
                <div className="flex gap-0.5" aria-label={`${t.stars} Sterne`}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3 h-3" style={{ fill: '#FBBF24', color: '#FBBF24' }} aria-hidden="true" />
                  ))}
                </div>
              </div>

              <p className="text-sm font-mono leading-relaxed mb-6" style={{ color: '#71717A' }}>
                <span style={{ color: t.accent }}>&ldquo;</span>
                {t.text}
                <span style={{ color: t.accent }}>&rdquo;</span>
              </p>

              <footer className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,204,0,0.08)' }}>
                <div className="w-8 h-8 flex items-center justify-center font-display font-bold text-xs flex-shrink-0" style={{ backgroundColor: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}25` }} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-white">{t.name}</div>
                  <div className="text-[10px] font-mono tracking-wider" style={{ color: '#52525B' }}>{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
