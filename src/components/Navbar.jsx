const Navbar = ({ setPage }) => {
  return (
    <nav className="d-flex justify-content-center gap-3 bg-dark p-3">
      <a href="#" className="text-light" onClick={() => setPage('home')}>Home</a>
      <a href="#" className="text-light" onClick={() => setPage('about')}>About</a>
      <a href="#" className="text-light" onClick={() => setPage('contact')}>Contact</a>
    </nav>
  )
}

export default Navbar