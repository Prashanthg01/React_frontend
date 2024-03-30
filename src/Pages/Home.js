import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/home') // Just use the relative path here
            .then(response => {
                setMessage(response.data.text);
            })
            .catch(error => {
                setMessage('Error loading message');
            });
    }, []);

    return (
        <div>
            <h1>Welcome back!</h1> {/* Use a static heading since the heading is fixed */}
            <p>{message}</p> {/* Display the message directly */}
        </div>
    );
};

export default Home;
