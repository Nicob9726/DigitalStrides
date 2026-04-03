'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { label: 'WAS WIR LÖSEN', href: '#services' },
  { label: 'SO FUNKTIONIERTS', href: '#prozess' },
  { label: 'ERGEBNISSE', href: '#ergebnisse' },
  { label: 'PREISE', href: '#preise' },
  { label: 'FAQ', href: '#faq' },
]

function Clock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('de-DE', { hour12: false }))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="text-xs text-dim font-mono tabular-nums">{time}</span>
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 border-b border-cyan-500/20' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="Zur Startseite"
          >
            <Terminal className="w-4 h-4 text-cyan" aria-hidden="true" />
            <span className="font-display font-bold text-sm tracking-[0.2em] uppercase text-white group-hover:text-cyan transition-colors duration-150">
              DIGITAL<span className="text-cyan">STRIDES</span>
            </span>
          </button>

          {/* Center: clock */}
          <div className="hidden lg:flex items-center gap-6">
            <Clock />
            <span className="text-xs text-dim font-mono">SYS:ONLINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" aria-hidden="true" />
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className="px-3 py-1.5 text-xs font-mono text-dim hover:text-cyan transition-colors duration-150 cursor-pointer tracking-wider group flex items-center gap-1.5"
                >
                  <span className="text-cyan/40 group-hover:text-cyan/80 transition-colors">[{String(i + 1).padStart(2, '0')}]</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => go('#kontakt')}
              className="px-4 py-2 text-xs font-mono font-semibold text-black bg-cyan hover:bg-green transition-colors duration-150 cursor-pointer tracking-widest uppercase"
            >
              &gt;_ KONTAKT
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-dim hover:text-cyan transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 left-0 right-0 z-40 bg-black border-b border-cyan-500/20 md:hidden"
          >
            <ul className="flex flex-col py-2" role="list">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="w-full text-left px-6 py-3 text-xs font-mono text-dim hover:text-cyan hover:bg-cyan/5 transition-all duration-150 cursor-pointer tracking-wider flex items-center gap-2"
                  >
                    <span className="text-cyan/40">[{String(i + 1).padStart(2, '0')}]</span>
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-4 py-3 border-t border-cyan/10 mt-1">
                <button
                  onClick={() => go('#kontakt')}
                  className="w-full py-2.5 text-xs font-mono font-semibold text-black bg-cyan tracking-widest uppercase cursor-pointer"
                >
                  &gt;_ KONTAKT
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
