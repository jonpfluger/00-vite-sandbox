import Card from './components/Card'

const user = {
  name: "Jon",
  age: 31,
  hasPet: true,
  avatar_url: 'https://placehold.co/100',
}

function App() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <Card
        name={user.name}
        age={user.age}
        hasPet={user.hasPet}
        avatar_url={user.avatar_url}
      />
    </div>
  )
}

export default App
