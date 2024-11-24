import React, { useState } from 'react';
import axios from 'axios';

const DeleteTask = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`);
      alert('Task deleted successfully!');
    } catch (err) {
      alert('Error deleting task: ' + err.message);
    }
  };

  return (
    <div>
      <input placeholder="Task ID" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default DeleteTask;
