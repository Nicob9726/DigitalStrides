'use client'

import { motion } from 'framer-motion'
import { Terminal, Linkedin } from 'lucide-react'

const footerLinks = {
  SERVICES: [
    { label: 'Workflow-Automatisierung', href: '#services' },
    { label: 'KI-Chatbots', href: '#services' },
    { label: 'Lead-Automatisierung', href: '#services' },
    { label: 'Custom AI-Agents', href: '#services' },
  ],
  UNTERNEHMEN: [
    { label: 'Prozess', href: '#prozess' },
    { label: 'Case Studies', href: '#referenzen' },
    { label: 'Preise', href: '#preise' },
    { label: 'FAQ', href: '#faq' },
  ],
  LEGAL: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/digitalstrides', label: 'LinkedIn' },
]

export default function Footer() {
  const go = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-cyan/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer group mb-5"
              aria-label="Nach oben scrollen"
            >
              <Terminal className="w-4 h-4 text-cyan" aria-hidden="true" />
              <span className="font-display font-bold text-sm tracking-[0.2em] uppercase text-white group-hover:text-cyan transition-colors">
                DIGITAL<span className="text-cyan">STRIDES</span>
              </span>
            </button>

            <p className="text-xs font-mono text-dim leading-relaxed max-w-xs mb-5">
              // KI-Automatisierungsagentur für wachsende Unternehmen.
              <br />
              // Workflows. Chatbots. Custom AI-Agents.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-cyan/15 flex items-center justify-center text-dim hover:text-cyan hover:border-cyan/50 transition-all duration-150 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([cat, links], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
            >
              <h3 className="text-[10px] font-mono tracking-[0.25em] text-cyan mb-4">{cat}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => go(link.href)}
                        className="text-xs font-mono text-dim hover:text-white transition-colors duration-150 cursor-pointer text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-xs font-mono text-dim hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-dim">
            © {new Date().getFullYear()} DigitalStrides — All rights reserved
          </p>
          <p className="text-[11px] font-mono text-dim/40">
            SYS:ONLINE :: UPTIME 99.9% :: DE/2026
          </p>
        </div>
      </div>
    </footer>
  )
}
