import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState(''); // State to store backend data

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8083/hello')
      .then(response => {
        setMessage(response.data); // Update state with backend response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Message from Backend: {message}</p>
    </div>
  );
}

export default App;
