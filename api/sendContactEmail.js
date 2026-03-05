import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, phone, message } = body;

  try {
    await resend.emails.send({
      from: 'kontakt@skatekollektivfurttal.ch',
      to: 'verein@skatekollektivfurttal.ch',
      subject: 'Neue Kontaktanfrage',
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Nachricht:</strong><br/>${message}</p>
      `,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Fehler beim Senden der E-Mail.' }), { status: 500 });
  }
}
