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
  return (
    <div className="container">
      <h1>Hello World!</h1>

      {users.map(user => {
        return (
          <Card
            name={user.name}
            age={user.age}
            hasPet={user.hasPet}
            avatar_url={user.avatar_url}
          />
        )
      })}
    </div>
  )
}

export default App
