import skflogo from './assets/SKF-logo.png'
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <img
          src={skflogo}
          alt="SKF logo"
          className="mb-6 w-32 h-32 object-contain sm:w-40 sm:h-40"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Skate Kollektiv Furttal</h1>
        <h2 className="text-lg sm:text-xl text-center">Coming soon...</h2>
      </div>
    </>
  )
}

export default App
