import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DigitalStrides – KI-Automatisierung für Selbstständige & KMUs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,204,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Corner marks */}
        <div style={{ position: 'absolute', top: 40, left: 40, width: 24, height: 24, borderTop: '2px solid rgba(255,204,0,0.4)', borderLeft: '2px solid rgba(255,204,0,0.4)' }} />
        <div style={{ position: 'absolute', top: 40, right: 40, width: 24, height: 24, borderTop: '2px solid rgba(255,204,0,0.4)', borderRight: '2px solid rgba(255,204,0,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 40, width: 24, height: 24, borderBottom: '2px solid rgba(255,204,0,0.4)', borderLeft: '2px solid rgba(255,204,0,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 40, width: 24, height: 24, borderBottom: '2px solid rgba(255,204,0,0.4)', borderRight: '2px solid rgba(255,204,0,0.4)' }} />

        {/* Label */}
        <div style={{ color: '#FFCC00', fontSize: 13, letterSpacing: '0.3em', marginBottom: 24, display: 'flex' }}>
          KI-AUTOMATISIERUNG · DIGITALSTRIDES.DE
        </div>

        {/* Headline */}
        <div style={{ color: '#ffffff', fontSize: 72, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 8, display: 'flex' }}>
          DEIN BUSINESS
        </div>
        <div style={{ color: '#FFCC00', fontSize: 72, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 8, display: 'flex' }}>
          LÄUFT AUCH
        </div>
        <div style={{ color: '#ffffff', fontSize: 72, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 40, display: 'flex' }}>
          OHNE DICH.
        </div>

        {/* Subtext */}
        <div style={{ color: '#71717A', fontSize: 20, lineHeight: 1.5, maxWidth: 700, display: 'flex' }}>
          Wir automatisieren deine Routinen – damit du dich ums Wesentliche kümmern kannst.
        </div>

        {/* Bottom bar */}
        <div style={{
          position: 'absolute', bottom: 60, left: 80, right: 80,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(255,204,0,0.15)', paddingTop: 24,
        }}>
          <div style={{ color: '#FFCC00', fontSize: 16, letterSpacing: '0.2em', display: 'flex' }}>DIGITALSTRIDES</div>
          <div style={{ color: '#52525B', fontSize: 13, display: 'flex' }}>3h+ täglich gespart · 40+ Kunden · 98% Empfehlung</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
