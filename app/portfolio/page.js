'use client'

import { useEffect, useMemo, useState } from 'react'

export default function Portfolio() {
  const [photos, setPhotos] = useState([])
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    let ignore = false

    fetch('/photos/index.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load photo index')
        }

        return response.text()
      })
      .then((text) => (text.trim() ? JSON.parse(text) : []))
      .then((data) => {
        if (!ignore) {
          setPhotos(Array.isArray(data) ? data : [])
        }
      })
      .catch(() => {
        if (!ignore) {
          setPhotos([])
        }
      })

    return () => {
      ignore = true
    }
  }, [])

  const genres = useMemo(
    () => ['All', ...new Set(photos.map((photo) => photo.genre).filter(Boolean))],
    [photos]
  )
  const filtered = active === 'All'
    ? photos
    : photos.filter((photo) => photo.genre === active)

  return (
    <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ padding: '2rem 2.5rem 3rem' }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 300,
          marginBottom: '2.5rem',
        }}>
          Portfolio
        </h1>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {genres.map((genre) => (
            <button key={genre} onClick={() => setActive(genre)} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.5rem 1rem',
              border: '1px solid',
              borderColor: active === genre ? 'var(--accent)' : 'var(--grey)',
              background: active === genre ? 'var(--accent)' : 'transparent',
              color: active === genre ? 'var(--black)' : 'var(--grey-light)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {genre}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div style={{
          padding: '0 2.5rem 8rem',
          columns: '3',
          columnGap: '0.5rem',
        }}>
          {filtered.map((photo) => (
            <div key={photo.id ?? photo.src} onClick={() => setLightbox(photo)} style={{
              breakInside: 'avoid',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--grey)',
            }}>
              <img
                src={photo.src}
                alt={photo.title ?? ''}
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'scale(1)'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1rem',
              }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.opacity = '0'
                }}
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                  fontWeight: 300,
                }}>
                  {photo.title}
                </p>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginTop: '0.25rem',
                }}>
                  {[photo.genre, photo.location].filter(Boolean).join(' / ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          padding: '0 2.5rem 8rem',
          color: 'var(--grey-light)',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          No photos found.
        </div>
      )}

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10,10,10,0.97)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'zoom-out',
          padding: '2rem',
        }}>
          <div style={{ maxWidth: '90vw', maxHeight: '90vh', position: 'relative' }}>
            <img
              src={lightbox.src}
              alt={lightbox.title ?? ''}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '2rem',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.25rem',
                fontWeight: 300,
              }}>
                {lightbox.title}
              </p>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}>
                {[lightbox.genre, lightbox.location].filter(Boolean).join(' / ')}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
