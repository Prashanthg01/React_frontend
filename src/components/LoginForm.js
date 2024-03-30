import React, { useState } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
import Home from '../Pages/Home'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8085/login', { email, password });
            console.log(response.data);
            setLoggedIn(true); // Set loggedIn to true on successful login
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <>
        {loggedIn ? (
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            </Router>
        ) : (
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        )}
        </>
    );
};

export default LoginForm;
