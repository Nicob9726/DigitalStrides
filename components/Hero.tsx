'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 40)
      return () => clearInterval(timer)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-[0.85em] animate-blink ml-0.5 align-middle" style={{ backgroundColor: '#FFCC00' }} aria-hidden="true" />
      )}
    </>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14"
      style={{
        backgroundColor: '#000000',
        backgroundImage:
          'linear-gradient(rgba(255,204,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.035) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
      aria-label="Hero"
    >
      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,204,0,0.5), transparent)', animation: 'scan 8s linear infinite' }}
        aria-hidden="true"
      />
      {/* Corner marks */}
      {['top-20 left-6 border-t border-l', 'top-20 right-6 border-t border-r', 'bottom-8 left-6 border-b border-l', 'bottom-8 right-6 border-b border-r'].map((cls, i) => (
        <div key={i} className={`absolute w-6 h-6 ${cls}`} style={{ borderColor: 'rgba(255,204,0,0.25)' }} aria-hidden="true" />
      ))}
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,204,0,0.05) 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Status */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#FFCC00' }} aria-hidden="true" />
          <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: '#52525B' }}>
            FÜR SELBSTSTÄNDIGE &amp; KLEINE UNTERNEHMEN
          </span>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Headline */}
          <motion.h1 variants={item} className="font-display font-bold leading-[0.92] tracking-tight mb-8">
            <span className="block text-white uppercase" style={{ fontSize: 'clamp(2.2rem, 9vw, 8.5rem)' }}>
              DEIN BUSINESS
            </span>
            <span className="block uppercase" style={{ fontSize: 'clamp(2.2rem, 9vw, 8.5rem)', color: '#FFCC00', textShadow: '0 0 60px rgba(255,204,0,0.35)' }}>
              LÄUFT AUCH
            </span>
            <span className="block text-white uppercase" style={{ fontSize: 'clamp(2.2rem, 9vw, 8.5rem)' }}>
              OHNE DICH.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.div variants={item} className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono mb-5" style={{ border: '1px solid rgba(255,204,0,0.2)', backgroundColor: 'rgba(255,204,0,0.04)' }}>
              <span style={{ color: '#FFCC00' }}>$</span>
              <span style={{ color: '#52525B' }}>
                <TypewriterText text="analyse --zeitfresser='E-Mails, Termine, Papierkram, Anfragen'" delay={700} />
              </span>
            </div>
            <p className="text-base font-mono leading-relaxed" style={{ color: '#71717A' }}>
              Du verlierst täglich Stunden mit Aufgaben, die eine KI erledigen könnte.
              <br />
              Wir automatisieren deine Routinen – damit du dich ums Wesentliche kümmern kannst.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-mono font-semibold tracking-widest uppercase transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: '#FFCC00', color: '#000000' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E6B800')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFCC00')}
            >
              &gt;_ KOSTENLOSE ANALYSE
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-mono tracking-widest uppercase transition-all duration-150 cursor-pointer"
              style={{ border: '1px solid rgba(255,204,0,0.3)', color: '#FFCC00' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#FFCC00'; e.currentTarget.style.backgroundColor = 'rgba(255,204,0,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,204,0,0.3)'; e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              WAS WIR LÖSEN
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex flex-wrap gap-10 pt-8" style={{ borderTop: '1px solid rgba(255,204,0,0.1)' }}>
            {[
              { val: '3h+', lbl: 'TÄGLICH GESPART' },
              { val: '40+', lbl: 'KUNDEN BETREUT' },
              { val: '12.000€', lbl: 'Ø ERSPARNIS / JAHR' },
              { val: '98%', lbl: 'WEITEREMPFEHLUNG' },
            ].map(({ val, lbl }) => (
              <div key={lbl}>
                <div className="font-display font-bold text-2xl text-white">{val}</div>
                <div className="text-[10px] font-mono tracking-widest mt-0.5" style={{ color: '#52525B' }}>{lbl}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
