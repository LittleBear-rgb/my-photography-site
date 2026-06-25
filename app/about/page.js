export default function About() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '100vh' }}>

      {/* Top section */}
      <div style={{
        padding: '0 2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        maxWidth: '1100px',
        marginBottom: '6rem',
      }}>

        {/* Left: portrait photo */}
        <div style={{
          aspectRatio: '3/4',
          background: 'var(--grey)',
          overflow: 'hidden',
        }}>
          <img
            src="/photos/portrait-me.jpg"
            alt="Your Name"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Right: text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
          }}>About</p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: '2rem',
          }}>
            Your Name
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#ccc',
            marginBottom: '1.5rem',
          }}>
           I’m a photographer based in Warsaw, a city that taught me to pay attention to details hidden in plain sight. I picked up a camera during long walks through its streets, realizing that a fleeting expression, the way light hits a building, or a quiet moment between people can disappear in seconds unless someone preserves it.
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#ccc',
            marginBottom: '3rem',
          }}>
            I’m drawn to images that feel honest and carry a sense of place. Street photography is about observing life as it unfolds; landscapes remind me of scale and stillness; portraits are an opportunity to reveal character beyond appearances; and architecture is where geometry, light, and human intention meet. In every photograph, I look for atmosphere, emotion, and the small details that make a moment unforgettable.
          </p>

          <a href="/contact" style={{
            display: 'inline-block',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            borderBottom: '1px solid var(--accent)',
            paddingBottom: '0.25rem',
            width: 'fit-content',
          }}>
            Get in touch
          </a>
        </div>
      </div>

      {/* Gear section */}
      <div style={{
        borderTop: '1px solid var(--grey)',
        padding: '4rem 2.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        maxWidth: '1100px',
      }}>
        {[
          { label: 'Camera', value: 'Sony a7 III' },
          { label: 'Primary Lens', value: 'Sigma 24–70mm F2.8 DG DN II' },
          { label: 'Based in', value: 'Warsaw, Poland' },
        ].map(item => (
          <div key={item.label}>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}>{item.label}</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'var(--white)',
            }}>{item.value}</p>
          </div>
        ))}
      </div>

    </main>
  )
}