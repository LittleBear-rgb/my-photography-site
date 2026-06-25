import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Tomasz Sadowski — Photography',
  description: 'Event, landscape and architecture photography.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.5rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.9), transparent)',
        }}>
          <Link href="/" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.25rem',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}>
            Tomasz Sadowski
          </Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Portfolio', 'About', 'Contact'].map(link => (
              <a key={link} href={`/${link.toLowerCase()}`} style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--grey-light)',
                transition: 'color 0.2s',
              }}>
                {link}
              </a>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
