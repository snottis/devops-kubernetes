import React from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [todos, settodos] = React.useState([])
  React.useEffect(async () => {
    const res = (await axios.get('/todo')).data
    settodos(res)
  }, [])
  const [desc, setdesc] = React.useState("")
  const submit = async () => {
    const res = await axios.post('/todo', {
      description: desc
    })
    setdesc('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="dailyimage" alt="logo" height="400"/>
        <input value={desc} onChange={e => setdesc(e.target.value)} type="text"/>
        <button onClick={() => submit()}>create TODO</button>
        <ul>
        {todos.map(t => {
          return <li>{t.description}</li>
        })}
        </ul>
      </header>
    </div>
  );
}

export default App;
