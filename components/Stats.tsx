'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3, suffix: 'h+', label: 'TÄGLICH GESPART', sub: 'Durchschnitt pro Kunde', accent: '#FFCC00' },
  { value: 12, suffix: 'k€', label: 'ERSPARNIS / JAHR', sub: 'An Personalkosten & Zeit', accent: '#FFCC00' },
  { value: 40, suffix: '+', label: 'KUNDEN', sub: 'Zufriedene Selbstständige & KMUs', accent: '#FFCC00' },
  { value: 98, suffix: '%', label: 'EMPFEHLEN UNS', sub: 'Weiterempfehlungsrate', accent: '#FFCC00' },
]

function Counter({ value, suffix, accent }: { value: number; suffix: string; accent: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const steps = 50
    const step = value / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += step
      if (cur >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(cur))
    }, 1800 / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref} style={{ color: accent }}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="ergebnisse" className="section-spacing border-y" style={{ backgroundColor: 'rgba(17,22,20,0.5)', borderColor: 'rgba(255,204,0,0.1)' }} aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em]" style={{ color: '#FFCC00' }}>ERGEBNISSE</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,204,0,0.15)' }} aria-hidden="true" />
          </div>
          <h2 id="stats-heading" className="font-display font-bold text-4xl sm:text-5xl uppercase text-white">
            WAS UNSERE KUNDEN GEWINNEN
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,204,0,0.08)' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 lg:p-8 transition-colors duration-200"
              style={{ backgroundColor: '#000000' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111614')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
            >
              <div className="text-[10px] font-mono tracking-widest mb-3" style={{ color: s.accent, opacity: 0.5 }}>
                WERT_{String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-display font-bold text-3xl sm:text-3xl sm:text-4xl lg:text-5xl mb-2 tabular-nums">
                <Counter value={s.value} suffix={s.suffix} accent={s.accent} />
              </div>
              <div className="text-xs font-mono text-white uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-[11px] font-mono" style={{ color: '#52525B' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
