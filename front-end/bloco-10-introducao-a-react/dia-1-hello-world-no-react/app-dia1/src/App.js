import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    )
  }
  return (
    <div className="App">
      {Task('Estudar')}
    </div>
  );
}

export default App;
