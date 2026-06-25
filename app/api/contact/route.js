export async function POST(req) {
  const { name, email, message } = await req.json()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'tomasz.a.s@icloud.com',
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    }),
  })

  if (res.ok) return new Response('OK', { status: 200 })
  return new Response('Error', { status: 500 })
}