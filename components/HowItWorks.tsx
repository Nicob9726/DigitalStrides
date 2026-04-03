'use client'

import { motion } from 'framer-motion'
import { Search, Wrench, Rocket } from 'lucide-react'

const steps = [
  {
    id: 'SCHRITT_01',
    icon: Search,
    title: 'WIR SCHAUEN UNS DEIN BUSINESS AN',
    description:
      'In einem kostenlosen 30-Minuten-Gespräch zeigst du uns, wie du aktuell arbeitest. Wir identifizieren gemeinsam, wo du täglich die meiste Zeit verlierst – und was davon als erstes automatisiert werden sollte.',
    details: [
      'Kostenlos & unverbindlich',
      'Keine Technik-Vorkenntnisse nötig',
      'Konkreter Aktionsplan am Ende',
      'Du entscheidest, ob wir loslegen',
    ],
    accent: '#FFCC00',
  },
  {
    id: 'SCHRITT_02',
    icon: Wrench,
    title: 'WIR BAUEN DEINE LÖSUNG',
    description:
      'Wir bauen deine Automatisierung – ohne dass du irgendetwas tun musst. In 1 bis 3 Wochen ist alles fertig, getestet und läuft. Du bekommst eine kurze Einführung, wie du alles kontrollieren kannst.',
    details: [
      'Du musst nichts installieren',
      'Wir kümmern uns um alles Technische',
      'Fertig in 1–3 Wochen',
      'Kurze Einführung & Dokumentation',
    ],
    accent: '#FFCC00',
  },
  {
    id: 'SCHRITT_03',
    icon: Rocket,
    title: 'DEIN BUSINESS LÄUFT AUTOMATISCH',
    description:
      'Ab jetzt arbeitet deine Automatisierung für dich – auch wenn du schläfst. Wir bleiben als Ansprechpartner und optimieren, wenn sich etwas ändert.',
    details: [
      'Läuft 24/7 ohne dein Zutun',
      'Du sparst täglich Stunden',
      'Wir bleiben dein Ansprechpartner',
      'Anpassungen jederzeit möglich',
    ],
    accent: '#FFCC00',
  },
]

export default function HowItWorks() {
  return (
    <section id="prozess" className="section-spacing" aria-labelledby="prozess-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>SO FUNKTIONIERT ES</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
          </div>
          <h2 id="prozess-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            IN 3 SCHRITTEN ZU MEHR FREIZEIT
          </h2>
          <p className="text-sm font-mono max-w-xl" style={{ color: '#71717A' }}>
            Von unserem ersten Gespräch bis zu deiner laufenden Automatisierung – einfach und ohne Stress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,204,0,0.1)' }}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`p-6 lg:p-8 relative group transition-colors duration-200 ${i < steps.length - 1 ? 'lg:border-r border-b lg:border-b-0' : ''}`}
                style={{ backgroundColor: '#000000', borderColor: 'rgba(255,204,0,0.1)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111614')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
              >
                <div className="text-[10px] font-mono tracking-widest mb-6 pb-3" style={{ color: step.accent, borderBottom: `1px solid ${step.accent}20` }}>
                  {step.id}
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: `1px solid ${step.accent}25` }}>
                    <Icon className="w-5 h-5" style={{ color: step.accent }} aria-hidden="true" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-sm uppercase text-white leading-tight pt-2.5 tracking-wide">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm font-mono leading-relaxed mb-6" style={{ color: '#71717A' }}>
                  {step.description}
                </p>

                <ul className="space-y-2" role="list">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs font-mono" style={{ color: '#52525B' }}>
                      <span className="text-[10px]" style={{ color: step.accent }} aria-hidden="true">&gt;</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-4 right-5 font-display font-bold text-6xl pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: `${step.accent}06` }} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
