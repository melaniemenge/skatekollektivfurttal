import skflogo from './assets/SKF-logo.png'
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-12 pb-8 px-4">
        <img
          src={skflogo}
          alt="SKF logo"
          className="mb-6 w-64 h-64 object-contain sm:w-40 sm:h-40"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Skate Kollektiv Furttal</h1>
        <p className="max-w-xl text-center text-gray-700 mb-6 text-base sm:text-lg">
          Wir sind das Skate Kollektiv Furttal – eine Gemeinschaft von Skateboard-Begeisterten, die sich für mehr Skate-Angebote, Events und einen offenen Austausch im Furttal einsetzen. Egal ob Anfänger:in oder Pro, bei uns bist du willkommen!
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition"
          onClick={() => navigate('/kontakt')}
        >
          Mitglied werden
        </button>
      </div>
    
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
    </>
  )
}

export default App
