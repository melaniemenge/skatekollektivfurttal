import { useState } from 'react'
import skflogo from './assets/SKF-logo.png'
import './App.css'

function App() {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className='flex items-center max-w-sm'>
          <img className="object-center"src={skflogo} alt="SKF logo" />
        </div>
        <h1 className="text-3xl passion-one-bold mb-4">Skate Kollektiv Furttal</h1>
        <div className="card">
          <h2>Coming soon...</h2>
        </div>
      </div>
    </>
  )
}

export default App
