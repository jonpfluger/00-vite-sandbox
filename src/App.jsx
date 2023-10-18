import { useState, useEffect } from 'react'
import Form from './components/Form'

function App() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container">
      <Form
        formState={formState}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default App