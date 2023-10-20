import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

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
      <Navbar setPage={setPage} />

      <div className="container">
        {renderPage()}
      </div>
    </>
  )
}

export default App