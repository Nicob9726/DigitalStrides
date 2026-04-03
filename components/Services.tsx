'use client'

import { motion } from 'framer-motion'
import { Mail, UserPlus, Calendar, FileText, BarChart3, MessageCircle } from 'lucide-react'

const services = [
  {
    id: '01',
    icon: Mail,
    problem: 'Dein Postfach läuft über.',
    title: 'E-Mails & Kundenanfragen',
    description:
      'Anfragen werden automatisch beantwortet, kategorisiert und an die richtige Person weitergeleitet. Du siehst nur noch das, was wirklich wichtig ist.',
    gain: 'Bis zu 3 Stunden täglich zurückgewinnen',
    accent: '#FFCC00',
    span: 'lg:col-span-2',
  },
  {
    id: '02',
    icon: UserPlus,
    problem: 'Interessenten springen ab, weil du zu langsam reagierst.',
    title: 'Neue Kunden gewinnen',
    description:
      'Jeder Interessent bekommt sofort eine Antwort. Wer passt, wird automatisch nachverfolgt – bis zum Abschluss. Kein Lead geht mehr verloren.',
    gain: 'Mehr Abschlüsse ohne mehr Aufwand',
    accent: '#FFCC00',
    span: '',
  },
  {
    id: '03',
    icon: Calendar,
    problem: 'Terminfindung kostet ewig.',
    title: 'Termine & Buchungen',
    description:
      'Kunden buchen selbst einen freien Termin. Du bekommst eine Bestätigung. Das endlose Hin-und-Her per E-Mail gehört der Vergangenheit an.',
    gain: '1 Stunde täglich gespart',
    accent: '#FFCC00',
    span: '',
  },
  {
    id: '04',
    icon: FileText,
    problem: 'Angebote und Rechnungen fressen deine Zeit.',
    title: 'Angebote & Rechnungen',
    description:
      'Angebote werden automatisch erstellt und verschickt. Rechnungen gehen pünktlich raus. Zahlungserinnerungen laufen automatisch – ohne dein Zutun.',
    gain: 'Kein Papierkram mehr',
    accent: '#FFCC00',
    span: '',
  },
  {
    id: '05',
    icon: BarChart3,
    problem: 'Du weißt nicht, was in deinem Business gerade wirklich passiert.',
    title: 'Überblick & Auswertungen',
    description:
      'Jeden Morgen landen automatisch die wichtigsten Zahlen in deinem Postfach oder auf deinem Dashboard. Immer up-to-date, ohne manuellen Aufwand.',
    gain: 'Bessere Entscheidungen in weniger Zeit',
    accent: '#FFCC00',
    span: '',
  },
  {
    id: '06',
    icon: MessageCircle,
    problem: 'Du kannst nicht rund um die Uhr für Kunden erreichbar sein.',
    title: 'Dein 24/7-KI-Assistent',
    description:
      'Ein KI-Assistent beantwortet Kundenfragen, qualifiziert Anfragen und bucht Termine – auch nachts, am Wochenende und im Urlaub.',
    gain: 'Immer erreichbar, ohne extra Kosten',
    accent: '#FFCC00',
    span: 'lg:col-span-2',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-spacing" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>LÖSUNGEN</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
            <span className="text-[10px] font-mono" style={{ color: '#52525B' }}>06 AUTOMATISIERUNGEN</span>
          </div>
          <h2 id="services-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            WAS WIR FÜR DICH LÖSEN
          </h2>
          <p className="text-sm font-mono max-w-xl" style={{ color: '#71717A' }}>
            Kein Technikwissen nötig. Wir analysieren, wo du Zeit verlierst – und automatisieren genau das.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,204,0,0.08)' }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`group relative p-6 transition-colors duration-200 ${s.span}`}
                style={{ backgroundColor: '#000000' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111614')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
              >
                {/* ID + Icon */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest px-2 py-0.5" style={{ color: s.accent, border: `1px solid ${s.accent}30` }}>
                    [{s.id}]
                  </span>
                  <div className="w-9 h-9 flex items-center justify-center" style={{ border: `1px solid ${s.accent}20` }}>
                    <Icon className="w-4 h-4" style={{ color: s.accent }} aria-hidden="true" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Problem */}
                <p className="text-xs font-mono mb-3 italic" style={{ color: '#52525B' }}>
                  &ldquo;{s.problem}&rdquo;
                </p>

                {/* Title + description */}
                <h3 className="font-display font-semibold text-lg uppercase text-white mb-3 tracking-wide">
                  {s.title}
                </h3>
                <p className="text-sm font-mono leading-relaxed mb-5" style={{ color: '#71717A' }}>
                  {s.description}
                </p>

                {/* Gain */}
                <div className="flex items-center gap-2 text-xs font-mono font-semibold" style={{ color: s.accent }}>
                  <span aria-hidden="true">&gt;</span>
                  {s.gain}
                </div>

                {/* Hover bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: `linear-gradient(to right, transparent, ${s.accent}, transparent)` }} aria-hidden="true" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
