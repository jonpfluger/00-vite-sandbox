import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center gap-3 bg-dark p-3">
      <Link to="/" className="text-light">Home</Link>
      <Link to="about" className="text-light">About</Link>
      <Link to="contact" className="text-light">Contact</Link>
      <Link to="blog" className="text-light">Blog</Link>
    </nav>
  )
}

export default Navbar