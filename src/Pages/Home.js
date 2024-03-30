import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({ heading: '', text: '' });

  useEffect(() => {
    axios.get('http://127.0.0.1:8085/home') // Update the URL with your Flask server URL
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>{data.heading}</h2>
      <p>{data.text}</p>
    </div>
  );
};

export default Home;
