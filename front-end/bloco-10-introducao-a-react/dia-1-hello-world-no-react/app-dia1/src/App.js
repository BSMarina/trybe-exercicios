import './App.css';

function App() {
  const compromissos = ["estudar", "malhar", "varrer a casa"];
  const Task = (value) => {
    return (
      <li>{value}</li>
    )
  }
  return (
    <div className="App">
      {compromissos.map((compromisso) => Task(compromisso))}
    </div>
  );
}

export default App;
