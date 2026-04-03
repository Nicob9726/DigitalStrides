import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"DigitalStrides Kontakt" <${process.env.SMTP_USER}>`,
      to: 'nico.becker@digitalstrides.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ''}`,
      text: `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || '–'}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: monospace; background: #000; color: #fff; padding: 24px; max-width: 600px;">
          <h2 style="color: #FFCC00; margin-bottom: 16px;">Neue Kontaktanfrage</h2>
          <p><strong style="color: #FFCC00;">Name:</strong> ${name}</p>
          <p><strong style="color: #FFCC00;">E-Mail:</strong> <a href="mailto:${email}" style="color: #FFCC00;">${email}</a></p>
          <p><strong style="color: #FFCC00;">Unternehmen:</strong> ${company || '–'}</p>
          <hr style="border-color: rgba(255,204,0,0.2); margin: 16px 0;" />
          <p><strong style="color: #FFCC00;">Nachricht:</strong></p>
          <p style="color: #71717A; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
