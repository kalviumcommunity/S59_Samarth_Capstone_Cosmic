import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className="App">
            <header className="App-header">
                <h1>Welcome to the Cosmic Capstone Project!</h1>
                <p>This project is dedicated to creating a comprehensive website that includes blogs, facts, theories, a discussion place, and day-to-day activities.</p>
            </header>
          </div>
    </>
  )
}

export default App
