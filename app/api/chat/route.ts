import Groq from 'groq-sdk'

const client = new Groq({ apiKey: process.env.GROQ_API_KEY })

const SYSTEM = `Du bist ein freundlicher KI-Assistent von DigitalStrides, einer KI-Automatisierungsagentur. Deine Aufgabe ist es, potenzielle Kunden in einem kurzen Gespräch zu qualifizieren.

Schreibe immer auf Deutsch. Stelle immer nur eine Frage auf einmal. Halte deine Antworten kurz (1–3 Sätze).

Sammle in dieser Reihenfolge folgende Informationen – frage sie nacheinander ab, sobald du eine Antwort erhalten hast:
1. Was sucht der Kunde / Was ist sein Anliegen? (frei formuliert)
2. In welcher Branche ist er tätig?
3. E-Mail-Adresse
4. Telefonnummer

Sobald du alle vier Informationen vollständig gesammelt hast, hänge am Ende deiner letzten Antwort exakt diesen Token an (ohne weitere Zeichen danach): ||READY||

Starte das Gespräch mit einer kurzen, freundlichen Begrüßung und frage direkt nach dem Anliegen des Kunden.`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const stream = await client.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    max_tokens: 512,
    stream: true,
    messages: [{ role: 'system', content: SYSTEM }, ...messages],
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? ''
        if (text) controller.enqueue(encoder.encode(text))
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
