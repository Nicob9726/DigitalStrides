import Groq from 'groq-sdk'
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const client = new Groq({ apiKey: process.env.GROQ_API_KEY })

interface LeadData {
  name: string
  email: string
  phone: string
  branche: string
  anliegen: string
}

export async function POST(req: Request) {
  const { messages, appointment } = await req.json()

  const extractResponse = await client.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    max_tokens: 512,
    messages: [
      ...messages,
      {
        role: 'user',
        content:
          'Extrahiere aus unserem Gespräch folgende Daten als JSON-Objekt (ohne Markdown, nur reines JSON): { "name": "", "email": "", "phone": "", "branche": "", "anliegen": "" }. Wenn ein Feld nicht genannt wurde, lasse es als leeren String.',
      },
    ],
  })

  let lead: LeadData = { name: '', email: '', phone: '', branche: '', anliegen: '' }
  try {
    const raw = extractResponse.choices[0]?.message?.content ?? ''
    lead = JSON.parse(raw.trim())
  } catch {
    // fallback: keep empty strings
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const subject = `Chat-Lead: ${lead.name || 'Neuer Interessent'}${lead.branche ? ` (${lead.branche})` : ''}`

  const appointmentHtml = appointment
    ? `<p><strong style="color:#FFCC00;">Wunschtermin:</strong> ${appointment}</p>`
    : '<p style="color:#71717A;">Kein Termin gewünscht.</p>'

  const appointmentText = appointment ? `Wunschtermin: ${appointment}` : 'Kein Termin gewünscht.'

  const html = `
    <div style="font-family:monospace;background:#000;color:#fff;padding:24px;max-width:600px;">
      <h2 style="color:#FFCC00;margin-bottom:16px;">&gt;_ Neuer Chat-Lead</h2>
      <p><strong style="color:#FFCC00;">Name:</strong> ${lead.name || '–'}</p>
      <p><strong style="color:#FFCC00;">E-Mail:</strong> <a href="mailto:${lead.email}" style="color:#FFCC00;">${lead.email || '–'}</a></p>
      <p><strong style="color:#FFCC00;">Telefon:</strong> ${lead.phone || '–'}</p>
      <p><strong style="color:#FFCC00;">Branche:</strong> ${lead.branche || '–'}</p>
      <hr style="border-color:rgba(255,204,0,0.2);margin:16px 0;"/>
      <p><strong style="color:#FFCC00;">Wunschtermin:</strong></p>
      ${appointmentHtml}
      <hr style="border-color:rgba(255,204,0,0.2);margin:16px 0;"/>
      <p><strong style="color:#FFCC00;">Anliegen:</strong></p>
      <p style="color:#71717A;white-space:pre-wrap;">${lead.anliegen || '–'}</p>
    </div>
  `

  const text = [
    `Chat-Lead: ${lead.name || '–'}`,
    `E-Mail: ${lead.email || '–'}`,
    `Telefon: ${lead.phone || '–'}`,
    `Branche: ${lead.branche || '–'}`,
    appointmentText,
    '',
    `Anliegen:\n${lead.anliegen || '–'}`,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `"DigitalStrides Chat" <${process.env.SMTP_USER}>`,
      to: 'nico.becker@digitalstrides.de',
      replyTo: lead.email || undefined,
      subject,
      text,
      html,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
