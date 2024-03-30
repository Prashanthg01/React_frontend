import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
            <h1>Register</h1>
            <RegisterForm />
        </div>
    );
};

export default App;
