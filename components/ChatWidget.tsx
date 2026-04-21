'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, ChevronRight, CheckCircle, Calendar, Loader2, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

type Phase = 'chat' | 'booking' | 'submitting' | 'done'

const READY_TOKEN = '||READY||'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState<Phase>('chat')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [appointment, setAppointment] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [error, setError] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true
      sendToAI([])
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping, phase])

  useEffect(() => {
    if (open && phase === 'chat' && !isTyping) {
      inputRef.current?.focus()
    }
  }, [open, isTyping, phase])

  async function sendToAI(history: Message[]) {
    setIsTyping(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })
      if (!res.body) return

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        fullText += decoder.decode(value, { stream: true })

        const displayText = fullText.replace(READY_TOKEN, '').trimEnd()
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: displayText }
          return updated
        })
      }

      if (fullText.includes(READY_TOKEN)) {
        setPhase('booking')
      }
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Entschuldigung, da ist etwas schiefgelaufen. Bitte versuche es erneut.' },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  async function handleSend() {
    const text = input.trim()
    if (!text || isTyping) return
    setInput('')

    const updated: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(updated)
    await sendToAI(updated)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function confirmBooking(skip: boolean) {
    if (!skip) {
      if (!appointmentDate || !appointmentTime) return
      const date = new Date(`${appointmentDate}T${appointmentTime}`)
      const formatted = date.toLocaleDateString('de-DE', {
        weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
      }) + ' um ' + date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr'
      setAppointment(formatted)
    }
    submitLead(skip ? undefined : undefined)
  }

  async function submitLead(appt?: string) {
    const resolvedAppt = appt !== undefined ? appt : (appointmentDate && appointmentTime ? (() => {
      const date = new Date(`${appointmentDate}T${appointmentTime}`)
      return date.toLocaleDateString('de-DE', {
        weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
      }) + ' um ' + date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr'
    })() : undefined)

    setPhase('submitting')
    setError(false)
    try {
      const res = await fetch('/api/chat-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, appointment: resolvedAppt }),
      })
      if (!res.ok) throw new Error()
      setPhase('done')
    } catch {
      setError(true)
      setPhase('booking')
    }
  }

  function reset() {
    setOpen(false)
    setTimeout(() => {
      setPhase('chat')
      setMessages([])
      setInput('')
      setAppointment('')
      setAppointmentDate('')
      setAppointmentTime('')
      setError(false)
      initialized.current = false
    }, 300)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Hover label */}
        {!open && (
          <div className="group-hover:opacity-100 opacity-0 pointer-events-none" id="chat-label">
            <span className="text-[10px] font-mono text-cyan tracking-widest whitespace-nowrap bg-black border border-cyan/25 px-3 py-1.5">
              &gt;_ KI-ASSISTENT
            </span>
          </div>
        )}

        <div className="relative group">
          {/* Sonar rings – only when closed */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-none border border-cyan/40 animate-ping" style={{ animationDuration: '2s' }} />
              <span className="absolute -inset-2 rounded-none border border-cyan/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
            </>
          )}

          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Chat schließen' : 'Chat öffnen'}
            className={cn(
              'relative w-16 h-16 flex flex-col items-center justify-center gap-1',
              'border bg-black transition-all duration-300 cursor-pointer',
              open
                ? 'border-cyan/60 shadow-[0_0_30px_rgba(0,255,255,0.25)]'
                : 'border-cyan/50 hover:border-cyan hover:bg-cyan/5 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]',
            )}
          >
            {open ? (
              <X className="w-5 h-5 text-cyan" />
            ) : (
              <>
                <Bot className="w-6 h-6 text-cyan" strokeWidth={1.5} />
                <span className="text-[8px] font-mono text-cyan/70 tracking-widest leading-none">CHAT</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Chat window */}
      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] flex flex-col',
          'bg-black border border-cyan/20 shadow-[0_0_40px_rgba(0,255,255,0.08)]',
          'transition-all duration-300 origin-bottom-right',
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none',
        )}
        style={{ height: 520 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cyan/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-[10px] font-mono text-cyan tracking-widest">DIGITALSTRIDES_AI</span>
          </div>
          <button onClick={() => setOpen(false)} className="text-dim hover:text-white transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
          {messages.map((msg, i) => (
            <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
              <div
                className={cn(
                  'max-w-[85%] px-3 py-2 text-xs font-mono leading-relaxed',
                  msg.role === 'user'
                    ? 'bg-cyan/10 border border-cyan/25 text-white'
                    : 'bg-surface/40 border border-white/8 text-white/90',
                )}
              >
                {msg.role === 'assistant' && (
                  <span className="text-[9px] text-cyan/60 tracking-widest block mb-1">AI &gt;_</span>
                )}
                {msg.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-surface/40 border border-white/8 px-3 py-2">
                <span className="text-[9px] text-cyan/60 tracking-widest block mb-1">AI &gt;_</span>
                <span className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-cyan/50 animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </span>
              </div>
            </div>
          )}

          {/* Booking phase */}
          {phase === 'booking' && !isTyping && (
            <div className="border border-cyan/20 bg-cyan/5 p-3 space-y-3">
              <div className="text-[9px] font-mono text-cyan tracking-widest">// TERMIN_BUCHEN</div>
              <p className="text-xs font-mono text-white/80">
                Möchtest du direkt einen kostenlosen 30-Min-Call buchen?
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-[9px] font-mono text-dim tracking-widest block mb-1">DATUM</label>
                    <input
                      type="date"
                      min={today}
                      value={appointmentDate}
                      onChange={e => setAppointmentDate(e.target.value)}
                      className="w-full bg-black border border-cyan/20 text-white text-xs font-mono px-2 py-1.5 focus:outline-none focus:border-cyan/60"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[9px] font-mono text-dim tracking-widest block mb-1">UHRZEIT</label>
                    <input
                      type="time"
                      value={appointmentTime}
                      onChange={e => setAppointmentTime(e.target.value)}
                      className="w-full bg-black border border-cyan/20 text-white text-xs font-mono px-2 py-1.5 focus:outline-none focus:border-cyan/60"
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-[10px] font-mono text-red-400">Fehler beim Senden – bitte erneut versuchen.</p>
                )}
                <button
                  onClick={() => confirmBooking(false)}
                  disabled={!appointmentDate || !appointmentTime}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-cyan hover:bg-green text-black text-[10px] font-mono font-semibold tracking-widest uppercase transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  TERMIN BESTÄTIGEN
                </button>
                <button
                  onClick={() => confirmBooking(true)}
                  className="w-full text-[10px] font-mono text-dim hover:text-white tracking-widest uppercase transition-colors cursor-pointer py-1"
                >
                  Kein Termin – trotzdem absenden
                </button>
              </div>
            </div>
          )}

          {/* Submitting */}
          {phase === 'submitting' && (
            <div className="flex justify-center py-4">
              <Loader2 className="w-5 h-5 text-cyan animate-spin" />
            </div>
          )}

          {/* Done */}
          {phase === 'done' && (
            <div className="flex flex-col items-center py-6 text-center gap-3">
              <CheckCircle className="w-10 h-10 text-green" />
              <div className="text-[9px] font-mono text-green tracking-widest">TRANSMISSION_SUCCESSFUL</div>
              <p className="text-xs font-mono text-white/80">
                Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei dir.
              </p>
              <button
                onClick={reset}
                className="mt-2 px-4 py-1.5 text-[10px] font-mono text-cyan border border-cyan/30 hover:border-cyan hover:bg-cyan/5 transition-all tracking-widest uppercase cursor-pointer"
              >
                &gt;_ SCHLIESSEN
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        {phase === 'chat' && (
          <div className="border-t border-cyan/15 flex items-center gap-2 px-3 py-2">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              placeholder="Nachricht eingeben…"
              className="flex-1 bg-transparent text-white text-xs font-mono placeholder:text-dim/40 focus:outline-none disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              aria-label="Senden"
              className="text-cyan hover:text-white disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
