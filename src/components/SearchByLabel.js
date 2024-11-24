import React, { useState } from 'react';
import axios from 'axios';

const SearchByLabel = () => {
  const [labels, setLabels] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/tasks/labels/search?labels=${labels}`
      );
      setTasks(response.data);
    } catch (err) {
      alert('Error searching tasks: ' + err.message);
    }
  };

  return (
    <div>
      <input
        placeholder="Labels (comma-separated)"
        onChange={(e) => setLabels(e.target.value)}
      />
      <button onClick={handleSearch}>Search by Labels</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchByLabel;
