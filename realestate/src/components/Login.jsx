import React, { useState } from 'react';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleLogin = () => {
    // Add login logic here
    if (email === 'example@email.com' && password === 'password') {
    console.log("User logged in");
      // Redirect user to dashboard or home page
    } else {
    setError('Invalid email or password. Please try again.');
    }
    };

return (
    <div>
    <h1>Login</h1>
    <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button onClick={handleLogin}>Login</button>
    </div>
    );
};

export default Login;
