import React, { useState } from 'react';
import axios from 'axios';
import '../css/UpdateTask.css'; // Import the CSS file

const UpdateTask = () => {
  // const [id, setId] = useState('');
  const [updates, setUpdates] = useState({
    id:'',
    title: '',
    description: '',
    priority: '',
    status: '',
    dueDate: '',
    assignee: '',
  });

  const handleChange = (e) => {
    setUpdates({ ...updates, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/tasks/${updates.id}`, updates);
      console.log(`http://localhost:8080/api/tasks/${updates.id}`);
      
      alert('Task updated successfully!');
    } catch (err) {
      alert('Error updating task: ' + err.message);
    }
  };

  return (
    <div className="update-task-container">
      <h2>Update Task</h2>
      <form onSubmit={handleUpdate} className="update-task-form">
        <input
          name="id"
          type="text"
          placeholder="Task ID"
          value={updates.id}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={updates.title}
          onChange={handleChange}
          className="form-input"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={updates.description}
          onChange={handleChange}
          className="form-input"
          rows="3"
          required
        />
       <label>
                Priority:
                <select name="priority" value={updates.priority} onChange={handleChange}>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
            </label>
            <label>
                Status:
                <select name="status" value={updates.status} onChange={handleChange}>
                    <option value="TODO">To Do</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                </select>
            </label>
            <input
                    type="datetime-local"
                    name="dueDate"
                    value={updates.dueDate}
                    onChange={handleChange}
                    required
                />
        <input
          type="text"
          name="assignee"
          placeholder="Assignee"
          value={updates.assignee}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
