import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import DeleteTask from './components/DeleteTask';
import SearchTask from './components/SearchTask';
import TaskReminders from './components/TaskReminders';
import AddComment from './components/AddComment';
import Login from './components/Login';
import axios from 'axios';


const authHeader = localStorage.getItem('authHeader');
if (authHeader) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + authHeader;
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = async () => {
    const authHeader = localStorage.getItem('authHeader'); // Retrieve credentials
    if (!authHeader) {
      setIsAuthenticated(false); // If no credentials, mark as not authenticated
      return;
    }
  
    // Decode the Base64 credentials
    const [username, password] = atob(authHeader).split(':');
  
    try {
      // Call the backend authentication endpoint
      await axios.post('http://localhost:8080/authenticate', {
        username,
        password,
      });
      setIsAuthenticated(true); // User is authenticated
    } catch (error) {
      console.error('Authentication check failed:', error.message);
      setIsAuthenticated(false); // User is not authenticated
    }
  };

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/update-task" element={<UpdateTask />} />
            <Route path="/delete-task" element={<DeleteTask />} />
            <Route path="/search-tasks" element={<SearchTask />} />
            <Route path="/task-reminders" element={<TaskReminders />} />
            <Route path="/add-comment" element={<AddComment />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any unknown routes */}
          </>
        ) : (
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
