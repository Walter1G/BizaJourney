import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    .then(data=>setData(data))
  }

  useEffect(() => {
   getUsers() 
  }, [])



  return (
    <div>
      <h1>Welcome to Bizza Platform</h1>
      <ul>
      {
        data.map(speaker => (
          <li>
            <li key={speaker.id}>{speaker.name}, <em>{ speaker.email}</em></li>
          </li>
        ))
        }
        </ul>
    </div>
  );
}

export default App;
