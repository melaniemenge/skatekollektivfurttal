
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const BASE_URL = 'https://www.skatekollektivfurttal.ch';
const MitgliedWerden = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    zipCode: '',
    birthday: '',
    accept: false,
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'checkbox') {
      setForm({ ...form, [e.target.name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/sendMitgliedEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        if (res.ok) {
          alert('Danke für deine Mitgliedsanfrage!');
          setForm({ name: '', email: '', address: '', zipCode: '', phone: '', birthday: '', accept: false, message: '' });
        } else {
          const data = await res.json();
          alert('Fehler beim Senden: ' + (data.error || 'Unbekannter Fehler'));
        }
      })
      .catch(() => {
        alert('Fehler beim Senden der Mitgliedsanfrage.');
      });
  };

    return (
    <>
      <Header />
      <link rel="canonical" href={`${BASE_URL}${location.pathname}`} />
      <div className="flex flex-col items-center justify-center min-h-screen pt-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Mitglied werden</h1>
        <p className="max-w-lg text-center text-gray-700 mb-8">
          Du willst uns helfen und Teil unserer Community werden? Super, wir freuen uns über jedes neue Mitglied! Fülle einfach das folgende Formular aus und wir melden uns so schnell wie möglich bei dir. Gemeinsam können wir die Skateboarding-Kultur in Furttal stärken und tolle Projekte auf die Beine stellen!
        </p>
        <form className="mx-auto p-6 bg-white rounded w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="name">Vorname/Nachname <span className="text-red-500">*</span></label>
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
            <label className="block mb-1 font-medium" htmlFor="address">Addresse (Strassenname, Hausnummer) <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">   
            <label className="block mb-1 font-medium" htmlFor="zipCode">PLZ, Ort <span className="text-red-500">*</span></label>
            <input 
              type="text"
              id="zipCode"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
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
            <label className="block mb-1 font-medium" htmlFor="phone">Telefon <span className="text-red-500">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="birthday">Geburtsdatum <span className="text-red-500">*</span></label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="message">Nachricht (optional)</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={form.accept}
              onChange={handleChange}
              className="mr-2 leading-tight w-4 h-4 bg-white border-2 border-black rounded"
              required
            />
            <span className="text-sm text-gray-700">Ich bestätige, die <a href="/bedingungen" target="_blank" className="underline" rel="noopener noreferrer">Mitgliedschaftsbedigungen</a> gelesen zu haben und akzeptiere diese. <span className="text-red-500">*</span></span>
          </div>
            
          <button type="submit" className="bg-black hover:bg-white text-white hover:text-black hover:border hover:border-black font-semibold py-2 px-6 rounded w-full">Absenden</button>
        </form>
      </div>
      <Footer />
    </>
    );  
};

export default MitgliedWerden;