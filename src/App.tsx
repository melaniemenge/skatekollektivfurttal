
import { useNavigate } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
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
    
      {/* 
      <section className="flex flex-col items-center py-12 px-4 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Unterstütze uns als Sponsor</h2>
        <p className="max-w-lg text-center text-gray-700 mb-4">
          Deine Unterstützung hilft uns, Events zu organisieren, neue Skate-Spots zu schaffen und die Community zu stärken. Vielen Dank für deinen Beitrag!
        </p>
        <div className="bg-gray-50 border rounded p-6 max-w-md w-full">
          <h3 className="font-semibold mb-2">Zahlungsinformationen:</h3>
          <p className="mb-1"><span className="font-medium">IBAN:</span> CH12 3456 7890 1234 5678 9</p>
          <p className="mb-1"><span className="font-medium">Bank:</span> Zürcher Kantonalbank</p>
          <p className="mb-1"><span className="font-medium">Empfänger:</span> Skate Kollektiv Furttal</p>
          <p className="text-xs text-gray-500 mt-2">Bitte als Vermerk "Sponsoring" angeben.</p>
        </div>
      </section> 
      */} 
      <Footer />
    </>
  )
}

export default App
