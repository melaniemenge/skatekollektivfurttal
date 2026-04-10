
import { useNavigate } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { Analytics } from "@vercel/analytics/react"
import { Helmet } from 'react-helmet-async';
import qrcode from './assets/qr-code.png';

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}

      <Helmet>
        <link rel="canonical" href="https://www.skatekollektivfurttal.ch/" />
        <title>Skatekollektiv Furttal</title>
        <meta name="description" content="Ein Verein für Skateboarder in Furttal" />
      </Helmet>
      <section className="flex flex-col items-center justify-center pt-12 pb-8 px-4">
        <Header />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Skate Kollektiv Furttal</h1>
        <p className="max-w-xl text-center text-gray-700 mb-6 text-base sm:text-lg">
          Wir sind das Skate Kollektiv Furttal – Wir sind ein gemeinnütziger Verein, der sich für die Förderung des Skateboardings in der Region Furttal einsetzt.
          Egal, ob du Anfänger oder erfahrener Skater bist, bei uns bist du herzlich willkommen!
          Werde Teil unserer Community und lass uns gemeinsam die Skateboarding-Kultur in Furttal stärken!
        </p>
        <button
          className="bg-black hover:bg-white text-white hover:text-black hover:border hover:border-black  font-semibold py-2 px-6 rounded shadow transition"
          onClick={() => navigate('/mitglied-werden')}
        >
          Mitglied werden
        </button>
      </section>
      <Analytics />
      <Footer />
    </>
  )
}

export default App
