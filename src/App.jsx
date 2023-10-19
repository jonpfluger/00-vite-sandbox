import { useState, useEffect } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import { fetchGithubUser } from './utils/github'

function App() {
  const [username, setUsername] = useState('jonpfluger')
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchGithubUser(username)
      .then(json => setUser(json))
  }, [])

  const handleInputChange = e => {
    setUsername(e.target.value)
    fetchGithubUser(username)
      .then(json => setUser(json))
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <Form
        username={username}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {user ? (
        <Card 
          name={user.name}
          avatar_url={user.avatar_url}
        />
      ) : (
        <p>No user found.</p>
      )}

    </div>
  )
}

export default App