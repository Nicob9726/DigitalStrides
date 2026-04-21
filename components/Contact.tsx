'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Calendar, Bot } from 'lucide-react'

const contactInfo = [
  { id: 'C_01', icon: Mail, label: 'E-MAIL', value: 'nico.becker@digitalstrides.de', href: 'mailto:nico.becker@digitalstrides.de', accent: '#FFCC00' },
  { id: 'C_02', icon: Calendar, label: 'ERSTGESPRÄCH', value: 'Kostenloses 30-Min-Call', href: undefined, accent: '#FFCC00' },
  { id: 'C_03', icon: MessageSquare, label: 'ANTWORTZEIT', value: 'Innerhalb von 24 Stunden', href: undefined, accent: '#FFCC00' },
]

function openChat() {
  // Trigger the floating chat widget by simulating a click on it
  const btn = document.querySelector<HTMLButtonElement>('[aria-label="Chat öffnen"]')
  btn?.click()
}

export default function Contact() {
  return (
    <section id="kontakt" className="section-spacing" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono text-cyan tracking-[0.3em]">CONTACT_INIT</span>
            <div className="flex-1 h-px bg-cyan/15" aria-hidden="true" />
          </div>
          <h2
            id="contact-heading"
            className="font-display font-bold text-4xl sm:text-5xl uppercase text-white"
          >
            LASS UNS SPRECHEN
          </h2>
          <p className="text-sm font-mono mt-3 max-w-xl" style={{ color: '#71717A' }}>
            Erzähl uns kurz, wo du gerade die meiste Zeit verlierst. Wir schauen uns das gemeinsam an – kostenlos und unverbindlich.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-cyan/10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-black p-6 lg:p-8 flex flex-col gap-0 divide-y divide-cyan/10"
          >
            {contactInfo.map((c) => {
              const Icon = c.icon
              const inner = (
                <div className="py-5 flex items-start gap-4 group">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 border mt-0.5"
                    style={{ borderColor: `${c.accent}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: c.accent }} aria-hidden="true" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest mb-1" style={{ color: c.accent, opacity: 0.5 }}>
                      {c.id} :: {c.label}
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-cyan transition-colors duration-150">
                      {c.value}
                    </div>
                  </div>
                </div>
              )
              return c.href
                ? <a key={c.id} href={c.href}>{inner}</a>
                : <div key={c.id}>{inner}</div>
            })}

            <div className="py-5">
              <div className="text-[10px] font-mono text-dim tracking-widest mb-3">
                // UNSER VERSPRECHEN
              </div>
              <ul className="space-y-2" role="list">
                {[
                  'Kostenloses Erstgespräch (30 Min)',
                  'Kein Technikwissen nötig',
                  'Konkreter Plan am Ende des Gesprächs',
                  'Kein Druck, keine versteckten Kosten',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono text-dim">
                    <span className="text-green font-mono text-[10px]">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: AI Chat CTA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-surface/30 p-6 lg:p-8 flex flex-col items-center justify-center text-center gap-6"
          >
            <div className="w-16 h-16 flex items-center justify-center border border-cyan/25 bg-cyan/5">
              <Bot className="w-8 h-8 text-cyan" strokeWidth={1.5} />
            </div>

            <div>
              <div className="text-[10px] font-mono text-cyan tracking-widest mb-3">// KI_ASSISTENT_AKTIV</div>
              <h3 className="font-display font-bold text-2xl uppercase text-white mb-3">
                STARTE DAS GESPRÄCH
              </h3>
              <p className="text-sm font-mono max-w-xs mx-auto" style={{ color: '#71717A' }}>
                Unser KI-Assistent fragt dich in 2 Minuten nach deinem Anliegen und leitet alles Weitere ein – inkl. Terminbuchung.
              </p>
            </div>

            <button
              onClick={openChat}
              className="flex items-center gap-2.5 px-8 py-3.5 bg-cyan hover:bg-green text-black text-xs font-mono font-semibold tracking-widest uppercase transition-colors duration-150 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              &gt;_ JETZT CHATTEN
            </button>

            <p className="text-[11px] font-mono text-dim/50">
              // KOSTENLOS · UNVERBINDLICH · 24H ANTWORTZEIT
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
