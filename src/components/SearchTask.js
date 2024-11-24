import React, { useState } from 'react';
import axios from 'axios';
import '../css/SearchTask.css'; // Import the CSS file

const SearchTask = () => {
  const [query, setQuery] = useState({ priority: '', status: '' });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/tasks/search`,
        { params: query }
      );
      setTasks(response.data);
    } catch (err) {
      alert('Error fetching tasks: ' + err.message);
    }
  };

  return (
    <div className="search-task-container">
      <h2>Search Tasks</h2>
      <div className="search-task-form">
        <label>
          Priority:
          <select name="priority" value={query.priority} onChange={handleChange}>
            <option value="">Select Priority</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </label>
        <label>
          Status:
          <select name="status" value={query.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </label>
        <button onClick={handleSearch} className="search-task-button">
          Search Tasks
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTask;
