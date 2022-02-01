import "./App.css";
import Card from "./components/Developor";

function App() {
  const users = {
    user1: { name: "Gabriel", age: 19, country: "Brasil" },
    user2: { name: "Filipe", age: 28, country: "Brasil" },
    user3: { name: "Mariana", age: 24, country: "Brasil" },
  };

  return (
    <div className="App">
      <Card
        name={users.user1.name}
        age={users.user1.age}
        country={users.user1.country}
      />

      <Card
        name={users.user2.name}
        age={users.user2.age}
        country={users.user2.country}
      />

      <Card
        name={users.user3.name}
        age={users.user3.age}
        country={users.user3.country}
      />
    </div>
  );
}

export default App;
