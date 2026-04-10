import React, { useState } from 'react';
import Header from './components/Header';

const BASE_URL = 'https://www.skatekollektivfurttal.ch';
const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/sendContactEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        if (res.ok) {
          alert('Danke für deine Nachricht!');
          setForm({ name: '', email: '', phone: '', message: '' });
        } else {
          const data = await res.json();
          alert('Fehler beim Senden: ' + (data.error || 'Unbekannter Fehler'));
        }
      })
      .catch(() => {
        alert('Fehler beim Senden der Nachricht.');
      });
  };

  return (
    <>
      <Header />
      <link rel="canonical" href={`${BASE_URL}${location.pathname}`} />
      <div className="flex flex-col items-center justify-center min-h-screen pt-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Kontakt</h1>
        <p className="max-w-lg text-center text-gray-700 mb-8">
          Willst du mehr über das Skate Kollektiv Furttal erfahren oder hast andere Anliegen? Kontaktiere uns gerne über das folgende Formular!
        </p>
        <form className="mx-auto p-6 bg-white rounded w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="email">E-Mail <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="message">Nachricht <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="bg-black hover:bg-white text-white hover:text-black hover:border hover:border-black font-semibold py-2 px-6 rounded w-full">Absenden</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
