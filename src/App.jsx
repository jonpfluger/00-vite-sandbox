import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  const [page, setPage] = useState('home')

  function renderPage() {
    if (page === 'home') {
      return <Home />
    } else if (page === 'about') {
      return <About />
    } else if (page === 'contact') {
      return <Contact />
    } else {
      return <p>404 - Not found.</p>
    }
  }

  return (
    <>
      <nav className="d-flex justify-content-center gap-3 bg-dark p-3">
        <a href="#" className="text-light" onClick={() => setPage('home')}>Home</a>
        <a href="#" className="text-light" onClick={() => setPage('about')}>About</a>
        <a href="#" className="text-light" onClick={() => setPage('contact')}>Contact</a>
      </nav>
    
      <div className="container">
        {renderPage()}
      </div>
    </>
  )
}

export default App