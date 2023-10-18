import { useState, useEffect } from 'react'
import Card from './components/Card'

const users = [
  {
    name: "Jon",
    age: 31,
    hasPet: true,
    avatar_url: 'https://placehold.co/100',
  },
  {
    name: "Max",
    age: 33,
    hasPet: false,
    avatar_url: 'https://placehold.co/100',
  },
  {
    name: "Josh",
    age: 35,
    hasPet: true,
    avatar_url: 'https://placehold.co/100',
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [teamName, setTeamName] = useState("Packers")

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <h2>The best football team is: {teamName}</h2>
      <button onClick={e => setCount(count + 1)}>Click Me</button>

      {/* Controlled Input */}
      <input
        value={teamName}
        onChange={e => setTeamName(e.target.value)}
      />

      {/* {users.map(user => {
        return (
          <Card
            name={user.name}
            age={user.age}
            hasPet={user.hasPet}
            avatar_url={user.avatar_url}
          />
        )
      })} */}
    </div>
  )
}

export default App
