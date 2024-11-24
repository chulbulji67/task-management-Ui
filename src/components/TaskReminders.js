import React from 'react';
import axios from 'axios';

const TaskReminders = () => {
  const handleReminder = async () => {
    try {
      await axios.get('http://localhost:8080/api/tasks/task-reminder');
      alert('Reminder notifications sent!');
    } catch (err) {
      alert('Error sending reminders: ' + err.message);
    }
  };

  return <button onClick={handleReminder}>Send Task Reminders</button>;
};

export default TaskReminders;
