import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Call the backend authentication endpoint
      const response = await axios.post('http://localhost:8080/authenticate', {
        username,
        password,
      });
  
      // Store credentials securely in localStorage
      localStorage.setItem('authHeader', btoa(`${username}:${password}`));
  
      setMessage('Login successful: ' + response.data);
      setIsAuthenticated(true); // Update authentication status
    } catch (error) {
      setMessage('Login failed: ' + (error.response?.data || error.message));
      setIsAuthenticated(false); // Reset authentication status
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: '8px 20px' }}>
        Login
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
