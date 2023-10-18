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

  const handleSubmit = e => {
    e.preventDefault()
    
    // TODO: send form data to /api/submit
    console.log(formState)

    // reset inputs
    setFormState({
      email: '',
      password: '',
    })
  }

  return (
    <div className="container">
      <Form
        formState={formState}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App