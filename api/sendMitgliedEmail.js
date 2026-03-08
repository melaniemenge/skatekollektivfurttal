import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, phone, message, address, zipCode, birthday, accept } = body;

  try {
    await resend.emails.send({
      from: 'kontakt@skatekollektivfurttal.ch',
      to: 'verein@skatekollektivfurttal.ch',
      subject: 'Neue Mitgliedsanfrage',
      html: `
        <h2>Neue Mitgliedsanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <p><strong>PLZ/Ort:</strong> ${zipCode}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Geburtsdatum:</strong> ${birthday}</p>
        <p><strong>Rechte und Pflichten akzeptiert:</strong><br/>${accept}</p>
        <p><strong>Nachricht:</strong><br/>${message}</p>
      `,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Fehler beim Senden der Anfrage.' }), { status: 500 });
  }
}
