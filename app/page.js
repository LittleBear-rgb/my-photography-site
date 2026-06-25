export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '4rem 2.5rem',
        overflow: 'hidden',
        background: '#111',
      }}>
        {/* Placeholder until you add your photo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
          opacity: 0.8,
        }} />

        {/* Overlay gradient so text is readable */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
        }} />

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.25rem',
          }}>
            Street · Landscape · Portrait · Architecture
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            marginBottom: '2rem',
          }}>
            Seeing what<br />
            <em>others walk past</em>
          </h1>
          <a href="/portfolio" style={{
            display: 'inline-block',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            borderBottom: '1px solid var(--accent)',
            paddingBottom: '0.25rem',
          }}>
            View Portfolio
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2.5rem',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--grey-light)',
            writingMode: 'vertical-rl',
          }}>scroll</span>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section style={{
        padding: '6rem 2.5rem',
        maxWidth: '600px',
        marginLeft: '2.5rem',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 300,
          lineHeight: 1.5,
          color: 'var(--white)',
        }}>
          Based in Warsaw. Working across street, landscape, portrait and architecture — 
          drawn to the light that exists for a second and never returns.
        </p>
      </section>

      {/* PREVIEW GRID TEASER */}
      <section style={{
        padding: '0 2.5rem 8rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.5rem',
      }}>
        {['Street', 'Landscape', 'Portrait'].map((genre, i) => (
          <a key={genre} href="/portfolio" style={{
            display: 'block',
            aspectRatio: i === 1 ? '3/4' : '1/1',
            background: `hsl(${200 + i * 30}, 15%, ${12 + i * 4}%)`,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem 1rem 1rem',
              background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--grey-light)',
            }}>
              {genre}
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}``