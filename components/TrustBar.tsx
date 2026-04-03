'use client'

import { motion } from 'framer-motion'

// Dinge die Selbstständige täglich Zeit kosten
const timeWasters = [
  { name: 'E-Mails beantworten', time: '2-3h / Tag', color: '#FFCC00' },
  { name: 'Terminvereinbarungen', time: '1h / Tag', color: '#FFCC00' },
  { name: 'Angebote schreiben', time: '2h / Auftrag', color: '#FFCC00' },
  { name: 'Rechnungen stellen', time: '3h / Woche', color: '#FFCC00' },
  { name: 'Kundenanfragen', time: '1-2h / Tag', color: '#FFCC00' },
  { name: 'Social-Media-Posts', time: '1h / Tag', color: '#FFCC00' },
  { name: 'Leads nachverfolgen', time: '1h / Tag', color: '#FFCC00' },
  { name: 'Berichte & Auswertungen', time: '2h / Woche', color: '#FFCC00' },
]

export default function TrustBar() {
  return (
    <section className="py-10 border-y" style={{ borderColor: 'rgba(255,204,0,0.1)', backgroundColor: 'rgba(17,22,20,0.5)' }} aria-label="Typische Zeitfresser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 min-w-[160px]">
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase mb-1" style={{ color: '#FFCC00' }}>
              DEINE ZEITFRESSER
            </div>
            <div className="text-[10px] font-mono" style={{ color: '#3F3F46' }}>
              alles davon automatisierbar
            </div>
          </div>

          <div className="hidden md:block w-px h-10 self-center" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
            role="list"
          >
            {timeWasters.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-1.5 cursor-default group transition-colors duration-150"
                  style={{ border: '1px solid rgba(255,204,0,0.1)', backgroundColor: 'transparent' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,204,0,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,204,0,0.1)')}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} aria-hidden="true" />
                  <span className="text-[11px] font-mono" style={{ color: '#71717A' }}>{item.name}</span>
                  <span className="text-[10px] font-mono" style={{ color: item.color, opacity: 0.7 }}>{item.time}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
