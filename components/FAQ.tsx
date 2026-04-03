'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 'Q_01',
    question: 'Ich bin kein Technik-Mensch. Kann ich das trotzdem nutzen?',
    answer: 'Ja – genau für dich ist das gemacht. Du musst nichts installieren, nichts konfigurieren und nichts verstehen. Wir analysieren deinen Arbeitsalltag, bauen alles für dich und erklären dir am Ende kurz, wie du die Ergebnisse siehst. Das war\'s.',
  },
  {
    id: 'Q_02',
    question: 'Lohnt sich das für mich als Einzelperson oder kleines Team?',
    answer: 'Besonders für Einzelpersonen und kleine Teams lohnt es sich. Wer keine großen Ressourcen hat, profitiert am meisten davon, wenn Routineaufgaben automatisch laufen. Wenn du täglich 1-2 Stunden mit sich wiederholenden Aufgaben verbringst, ist die Investition meist in 2-3 Monaten wieder rein.',
  },
  {
    id: 'Q_03',
    question: 'Wie schnell sehe ich Ergebnisse?',
    answer: 'In der Regel läuft deine erste Automatisierung innerhalb von 1-2 Wochen. Schon in der ersten Woche merkst du, dass bestimmte Aufgaben einfach nicht mehr auf deiner To-do-Liste auftauchen.',
  },
  {
    id: 'Q_04',
    question: 'Was genau wird automatisiert – und was nicht?',
    answer: 'Wir automatisieren alles, was sich wiederholt: E-Mails beantworten, Termine koordinieren, Angebote erstellen, Leads nachverfolgen, Berichte erstellen, Rechnungen versenden. Was Kreativität, Empathie oder persönliche Entscheidung erfordert, bleibt bei dir.',
  },
  {
    id: 'Q_05',
    question: 'Was passiert mit meinen Kundendaten? Ist das DSGVO-konform?',
    answer: 'Ja. Alle Automatisierungen werden DSGVO-konform umgesetzt. Deine Daten bleiben in deiner Kontrolle. Wir arbeiten ausschließlich mit Anbietern, die europäische Datenschutzstandards erfüllen.',
  },
  {
    id: 'Q_06',
    question: 'Was ist, wenn etwas nicht funktioniert?',
    answer: 'Dann kümmern wir uns darum – ohne Diskussion. Alle Pakete enthalten einen Support-Zeitraum nach dem Start. Wir monitoren deine Automatisierungen aktiv und beheben Probleme schnell.',
  },
  {
    id: 'Q_07',
    question: 'Muss ich bestehende Tools wechseln?',
    answer: 'Nein. Wir arbeiten mit dem, was du bereits nutzt: dein E-Mail-Programm, dein Kalender, dein CRM, dein Abrechnungsprogramm. Meistens müssen gar keine neuen Tools angeschafft werden.',
  },
  {
    id: 'Q_08',
    question: 'Womit fangen wir am besten an?',
    answer: 'Mit dem, was dich am meisten nervt oder am meisten Zeit kostet. In unserem kostenlosen Erstgespräch schauen wir uns das gemeinsam an und du bekommst sofort einen konkreten Vorschlag.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      style={{ borderBottom: '1px solid rgba(255,204,0,0.1)' }}
      className="last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left cursor-pointer group px-4 -mx-4 transition-colors duration-150"
        style={{ backgroundColor: 'transparent' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,204,0,0.03)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        aria-expanded={open}
      >
        <span className="text-[10px] font-mono pt-0.5 flex-shrink-0 tracking-widest transition-colors" style={{ color: open ? '#FFCC00' : 'rgba(255,204,0,0.35)' }}>
          {item.id}
        </span>
        <span className="flex-1 text-sm font-mono text-white leading-snug" style={{ color: open ? '#FFFFFF' : '#A1A1AA' }}>
          {item.question}
        </span>
        <span className="flex-shrink-0 mt-0.5" aria-hidden="true">
          {open
            ? <Minus className="w-4 h-4" style={{ color: '#FFCC00' }} />
            : <Plus className="w-4 h-4" style={{ color: '#52525B' }} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-14 pr-4 text-sm font-mono leading-relaxed" style={{ color: '#71717A' }}>
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-spacing" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>FAQ</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
            <span className="text-[10px] font-mono" style={{ color: '#52525B' }}>08 FRAGEN</span>
          </div>
          <h2 id="faq-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            HÄUFIGE FRAGEN
          </h2>
          <p className="text-sm font-mono" style={{ color: '#71717A' }}>
            Noch unsicher? Hier sind die Fragen, die wir am häufigsten hören.
          </p>
        </motion.div>

        <div className="p-4 sm:p-6" style={{ border: '1px solid rgba(255,204,0,0.1)' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} item={faq} index={i} />
          ))}
        </div>

        {/* Soft CTA under FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-5 text-center"
          style={{ border: '1px solid rgba(255,204,0,0.1)', backgroundColor: 'rgba(255,204,0,0.03)' }}
        >
          <p className="text-sm font-mono mb-4" style={{ color: '#71717A' }}>
            Noch eine andere Frage? Wir antworten innerhalb von 24 Stunden.
          </p>
          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold tracking-widest uppercase transition-all duration-150 cursor-pointer"
            style={{ border: '1px solid rgba(255,204,0,0.3)', color: '#FFCC00' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#FFCC00'; e.currentTarget.style.backgroundColor = 'rgba(255,204,0,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,204,0,0.3)'; e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            &gt;_ FRAGE STELLEN
          </a>
        </motion.div>
      </div>
    </section>
  )
}
