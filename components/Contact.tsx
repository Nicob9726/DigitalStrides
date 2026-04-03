'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Mindestens 2 Zeichen'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  company: z.string().optional(),
  message: z.string().min(20, 'Mindestens 20 Zeichen'),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  { id: 'C_01', icon: Mail, label: 'E-MAIL', value: 'hallo@digitalstrides.de', href: 'mailto:hallo@digitalstrides.de', accent: '#FFCC00' },
  { id: 'C_02', icon: Calendar, label: 'ERSTGESPRÄCH', value: 'Kostenloses 30-Min-Call', href: '#kontakt', accent: '#FFCC00' },
  { id: 'C_03', icon: MessageSquare, label: 'ANTWORTZEIT', value: 'Innerhalb von 24 Stunden', href: undefined, accent: '#FFCC00' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((res) => setTimeout(res, 1200))
      console.log('Form data:', data)
      setSubmitted(true)
      reset()
    } catch {
      setError(true)
    }
  }

  const inputClass = (hasError: boolean) => cn(
    'w-full bg-black border text-sm font-mono text-white placeholder:text-dim/50 px-4 py-3 focus:outline-none transition-colors duration-150',
    hasError
      ? 'border-red-500/60 focus:border-red-500'
      : 'border-cyan/15 hover:border-cyan/35 focus:border-cyan/70'
  )

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
          {/* Left */}
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
              return c.href && !c.href.startsWith('#')
                ? <a key={c.id} href={c.href}>{inner}</a>
                : <div key={c.id}>{inner}</div>
            })}

            {/* Promise */}
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

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-surface/30 p-6 lg:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-12 h-12 text-green mb-4" aria-hidden="true" />
                <div className="text-[10px] font-mono text-green tracking-widest mb-3">
                  TRANSMISSION_SUCCESSFUL
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-white mb-2">
                  NACHRICHT GESENDET
                </h3>
                <p className="text-sm font-mono text-dim max-w-xs">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-5 py-2 text-xs font-mono text-cyan border border-cyan/30 hover:border-cyan hover:bg-cyan/5 transition-all duration-150 cursor-pointer tracking-widest uppercase"
                >
                  &gt;_ NEUE NACHRICHT
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="text-[10px] font-mono text-dim mb-6 tracking-widest">
                  // KONTAKTFORMULAR :: ALLE FELDER MIT * SIND PFLICHTFELDER
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono tracking-widest mb-2 text-dim">
                      NAME <span className="text-cyan">*</span>
                    </label>
                    <input
                      {...register('name')}
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Max Mustermann"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono tracking-widest mb-2 text-dim">
                      E-MAIL <span className="text-cyan">*</span>
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="max@unternehmen.de"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="company" className="block text-[10px] font-mono tracking-widest mb-2 text-dim">
                    UNTERNEHMEN <span className="text-dim/40">(OPTIONAL)</span>
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Muster GmbH"
                    className={inputClass(false)}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[10px] font-mono tracking-widest mb-2 text-dim">
                    NACHRICHT <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    placeholder="Erzähl uns kurz: Womit verlierst du gerade die meiste Zeit? Was nervt dich täglich am meisten?"
                    className={cn(inputClass(!!errors.message), 'resize-none')}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.message.message}
                    </p>
                  )}
                </div>

                {error && (
                  <div className="mb-4 p-3 border border-red-500/30 bg-red-500/10 text-xs font-mono text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    Fehler beim Senden. Bitte erneut versuchen.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-cyan hover:bg-green text-black text-xs font-mono font-semibold tracking-widest uppercase transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" aria-hidden="true" />
                      WIRD GESENDET...
                    </>
                  ) : (
                    <>
                      &gt;_ KOSTENLOSE BERATUNG ANFRAGEN
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-dim/50 text-center mt-3">
                  // MIT ABSENDEN STIMMEN SIE UNSERER{' '}
                  <a href="/datenschutz" className="underline hover:text-dim transition-colors">DATENSCHUTZERKLÄRUNG</a>{' '}
                  ZU
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
