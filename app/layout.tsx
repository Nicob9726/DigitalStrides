import type { Metadata } from 'next'
import { Chakra_Petch, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digitalstrides.de'),
  title: {
    default: 'DigitalStrides – KI-Automatisierung für Unternehmen',
    template: '%s | DigitalStrides',
  },
  description:
    'DigitalStrides ist Ihre spezialisierte KI-Automatisierungsagentur. Wir automatisieren Workflows, implementieren KI-Chatbots und optimieren Geschäftsprozesse – damit Ihr Team sich auf das Wesentliche konzentrieren kann.',
  keywords: [
    'KI Automatisierung',
    'KI Agentur',
    'Automatisierung Agentur',
    'Workflow Automatisierung',
    'KI Chatbot',
    'Prozessautomatisierung',
    'Künstliche Intelligenz Unternehmen',
    'AI Automation',
    'n8n Automatisierung',
    'Make Automatisierung',
    'OpenAI Integration',
    'DigitalStrides',
  ],
  authors: [{ name: 'DigitalStrides', url: 'https://www.digitalstrides.de' }],
  creator: 'DigitalStrides',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.digitalstrides.de',
    siteName: 'DigitalStrides',
    title: 'DigitalStrides – KI-Automatisierung für Unternehmen',
    description: 'Wir automatisieren Ihre Geschäftsprozesse mit modernster KI-Technologie.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'DigitalStrides – KI-Automatisierung für Selbstständige & KMUs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigitalStrides – KI-Automatisierung',
    description: 'Wir automatisieren Ihre Geschäftsprozesse mit modernster KI-Technologie.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://www.digitalstrides.de' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.digitalstrides.de/#organization',
      name: 'DigitalStrides',
      url: 'https://www.digitalstrides.de',
      description: 'KI-Automatisierungsagentur – Workflows, Chatbots, Custom AI-Agents.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'nico.becker@digitalstrides.de',
        availableLanguage: ['German'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.digitalstrides.de/#website',
      url: 'https://www.digitalstrides.de',
      name: 'DigitalStrides',
      inLanguage: 'de-DE',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${chakra.variable} ${ibmMono.variable}`} style={{ backgroundColor: '#000000' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-mono" style={{ backgroundColor: '#000000', color: '#E4E4E7' }}>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
