'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    id: 'EINSTIEG',
    name: 'Starter',
    tagline: 'Dein erster Schritt zur Automatisierung.',
    description: 'Ideal wenn du einen klaren Zeitfresser hast, den du loswerden willst.',
    features: [
      '1 Automatisierung (z.B. E-Mail-Antworten, Angebotserstellung)',
      'Einrichtung & Konfiguration durch uns',
      'Einführung & Dokumentation',
      '30 Tage Support nach Launch',
      '~1 Stunde pro Tag gespart',
    ],
    cta: 'Kostenlos besprechen',
    highlight: false,
    accent: '#FFCC00',
  },
  {
    id: 'AM BELIEBTESTEN',
    name: 'Wachstum',
    tagline: 'Mehrere Prozesse. Mehr Zeit. Mehr Umsatz.',
    description: 'Für Selbstständige und kleine Teams, die mehrere Bereiche automatisieren wollen.',
    features: [
      'Bis zu 5 Automatisierungen',
      'KI-Assistent für Kundenanfragen (24/7)',
      'Automatische Lead-Nachverfolgung',
      'Umsetzung in unter 2 Wochen',
      '90 Tage Premium-Support',
      'Monatlicher Status-Bericht',
      '2–4 Stunden pro Tag gespart',
    ],
    cta: 'Erstgespräch buchen',
    highlight: true,
    accent: '#FFCC00',
    badge: 'AM BELIEBTESTEN',
  },
  {
    id: 'INDIVIDUELL',
    name: 'Komplett',
    tagline: 'Dein Business auf Autopilot.',
    description: 'Für Unternehmen, die ihre gesamten Abläufe systematisch automatisieren wollen.',
    features: [
      'Unbegrenzte Automatisierungen',
      'Vollständige Prozessanalyse',
      'Persönlicher Ansprechpartner',
      '12 Monate Support & Betreuung',
      'Regelmäßige Optimierungen',
      'Schulung für dein Team',
      'Alles was Zeit oder Geld kostet – automatisiert',
    ],
    cta: 'Gespräch vereinbaren',
    highlight: false,
    accent: '#FFCC00',
  },
]

export default function Pricing() {
  return (
    <section id="preise" className="section-spacing" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>INVESTITION</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
            <span className="text-[10px] font-mono" style={{ color: '#52525B' }}>03 PAKETE</span>
          </div>
          <h2 id="pricing-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            WÄHLE DEINEN START
          </h2>
          <p className="text-sm font-mono max-w-xl" style={{ color: '#71717A' }}>
            Egal wo du gerade stehst – es gibt einen passenden Einstieg. Die meisten Kunden haben ihre Investition in 2–3 Monaten durch gesparte Zeit wieder drin.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,204,0,0.08)' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col p-6 lg:p-8"
              style={{ backgroundColor: plan.highlight ? '#2a3230' : '#000000' }}
            >
              {/* Top accent line on highlighted */}
              {plan.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #FFCC00, transparent)' }}
                  aria-hidden="true"
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute top-4 right-4 text-[10px] font-mono font-semibold px-2 py-0.5 tracking-widest"
                  style={{ color: '#000', backgroundColor: '#FFCC00' }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Category ID */}
              <div className="text-[10px] font-mono tracking-widest mb-3" style={{ color: '#FFCC00', opacity: 0.5 }}>
                {plan.id}
              </div>

              {/* Name */}
              <h3 className="font-display font-bold text-2xl uppercase text-white tracking-wide mb-1">
                {plan.name}
              </h3>

              {/* Tagline */}
              <p className="text-xs font-mono mb-1" style={{ color: '#FFCC00' }}>
                {plan.tagline}
              </p>

              {/* Description */}
              <p className="text-xs font-mono mb-6 pb-5" style={{ color: '#52525B', borderBottom: '1px solid rgba(255,204,0,0.1)' }}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-grow mb-8" role="list">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs font-mono" style={{ color: '#71717A' }}>
                    <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#FFCC00' }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="py-3 text-xs font-mono font-semibold tracking-widest text-center uppercase transition-all duration-150 cursor-pointer block"
                style={plan.highlight
                  ? { backgroundColor: '#FFCC00', color: '#000000' }
                  : { border: '1px solid rgba(255,204,0,0.4)', color: '#FFCC00' }
                }
                onMouseEnter={e => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = '#E6B800'
                  } else {
                    e.currentTarget.style.borderColor = '#FFCC00'
                    e.currentTarget.style.backgroundColor = 'rgba(255,204,0,0.06)'
                  }
                }}
                onMouseLeave={e => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = '#FFCC00'
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(255,204,0,0.4)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                &gt;_ {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-5 text-center"
          style={{ border: '1px solid rgba(255,204,0,0.1)', backgroundColor: 'rgba(255,204,0,0.03)' }}
        >
          <p className="text-sm font-mono text-white mb-1">
            100% unverbindlich — Im Erstgespräch analysieren wir gemeinsam deine Prozesse und du bekommst ein maßgeschneidertes Angebot.
          </p>
          <p className="text-xs font-mono mt-2" style={{ color: '#FFCC00' }}>
            Kein Risiko. Keine Verpflichtung. Nur Klarheit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
