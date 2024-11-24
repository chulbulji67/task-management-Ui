import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks');
      if (response.data.tasks) {
        setTasks(response.data.tasks);
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to fetch tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Task Management</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} style={styles.taskCard}>
            <h2>{task.title}</h2>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Assignee:</strong> {task.assignee}</p>
            <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
            <p><strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(task.updatedAt).toLocaleString()}</p>
            <div style={styles.section}>
              <h3>Comments:</h3>
              {task.comments.length > 0 ? (
                task.comments.map((comment) => (
                  <div key={comment.id} style={styles.comment}>
                    <p><strong>Author:</strong> {comment.author}</p>
                    <p><strong>Text:</strong> {comment.text}</p>
                    <p><strong>Created At:</strong> {new Date(comment.createdAt).toLocaleString()}</p>
                  </div>
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </div>
            <div style={styles.section}>
              <h3>Labels:</h3>
              {task.labels.length > 0 ? (
                <p>{task.labels.join(', ')}</p>
              ) : (
                <p>No labels assigned.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noTasks}>No tasks found.</p>
      )}
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: '#007bff',
    marginBottom: '20px',
  },
  taskCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginTop: '15px',
    borderTop: '1px solid #eee',
    paddingTop: '10px',
  },
  comment: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
  },
  noTasks: {
    textAlign: 'center',
    color: '#888',
    marginTop: '50px',
  },
};

export default TaskManagement;