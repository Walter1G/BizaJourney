import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [data1,setData1]=useState([])

  // Using Fetch API
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    .then(data=>setData(data))
  }

  useEffect(() => {
   getUsers()
  }, [])
  
  // Using Async/Await

  const API_URL = "https://dummyjson.com/users";

  const fetchSpeakers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData1(data.users);

    } catch (error){
      console.log("Err:", error);
    }
  }

  useEffect(() => {
    fetchSpeakers();
  },[data1])



  return (
    <>
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

      [Text Wrapping Break]
      <h1> Displaying Speakers information</h1>
      <ul>
        {data1.map(item => (
          <li key={item.id}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
      

    </>
  );
}

export default App;
