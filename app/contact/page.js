'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--grey)',
    padding: '0.75rem 0',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: 300,
    color: 'var(--white)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <main style={{ paddingTop: '8rem', minHeight: '100vh', padding: '8rem 2.5rem 6rem' }}>

      <div style={{ maxWidth: '600px' }}>

        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '1.5rem',
        }}>Contact</p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          Let's work<br /><em>together</em>
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.1rem',
          fontWeight: 300,
          color: '#ccc',
          lineHeight: 1.6,
          marginBottom: '3rem',
        }}>
          Available for commercial projects, editorial work, and private commissions.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '0.5rem',
            }}>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--grey)'}
            />
          </div>

          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '0.5rem',
            }}>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--grey)'}
            />
          </div>

          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '0.5rem',
            }}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{
                ...inputStyle,
                resize: 'none',
                borderBottom: '1px solid var(--grey)',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--grey)'}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === 'sending' || status === 'sent'}
            style={{
              alignSelf: 'flex-start',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: status === 'sent' ? 'var(--accent)' : 'var(--black)',
              background: status === 'sent' ? 'transparent' : 'var(--white)',
              border: '1px solid var(--white)',
              padding: '0.75rem 2rem',
              cursor: status === 'sent' ? 'default' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent' : status === 'error' ? 'Error — try again' : 'Send message'}
          </button>

        </div>
      </div>
    </main>
  )
}