import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center gap-3 bg-dark p-3">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </nav>
  )
}

export default Navbar