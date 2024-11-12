import { useState, useEffect } from "react";
import {useQuery} from 'react-query'
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const { data3, isLoading, error } = useQuery(
    "speakers",
    () => {
      axios("https://jsonplaceholder.typicode.com/users");
      if (error) return <h4>Error: {error.message}</h4>
      if(isLoading) return <h4>...Loading data</h4>
    }
  )

  // Using Fetch API
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Using Async/Await

  const API_URL = "https://dummyjson.com/users";

  const fetchSpeakers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData1(data.users);
    } catch (error) {
      console.log("Err:", error);
    }
  };

  useEffect(() => {
    fetchSpeakers();
  }, [data1]);

  // use Axios
  const loadSpeakers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData2(response.data);
    });
  };

  useEffect(() => {
    loadSpeakers();
  }, []);


  // use react-query


  return (
    <>
      <h1>Welcome to Bizza Platform</h1>
      <ul>
        {data.map((speaker) => (
          <li>
            <li key={speaker.id}>
              {speaker.name}, <em>{speaker.email}</em>
            </li>
          </li>
        ))}
      </ul>
      [Text Wrapping Break]
      <h1> Displaying Speakers information</h1>
      <ul>
        {data1.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
      [Data from axios]
      <ul>
        {data2.map((item) => (
          <li key={item.key}>
            {item.name}, <em>{item.email}</em>
          </li>
        ))}
      </ul>

      [using react Query]
      <ul>
        {data3.data.map(speaker => (
        
          <li key={speaker.id}> {speaker.name}, <em>{ speaker.email}</em></li>
          
        ))}
      
      </ul>
    </>
  );
}

export default App;
