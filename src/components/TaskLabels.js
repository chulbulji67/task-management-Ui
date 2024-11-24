import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TaskLabels = () => {
    const [tasks, setTasks] = useState([]);
    const [labels, setLabels] = useState('');
    const [taskId, setTaskId] = useState('');
    const [labelNames, setLabelNames] = useState([]);

    const fetchTasksByLabels = async () => {
        try {
            const response = await axios.get(`/api/tasks/labels/search?labels=${labels}`);
            setTasks(response.data);
            toast.success('Tasks fetched by labels');
        } catch (error) {
            toast.error('Failed to fetch tasks by labels');
        }
    };

    const updateTaskLabels = async () => {
        try {
            const response = await axios.put(`/api/tasks/labels/${taskId}/labels`, labelNames);
            toast.success('Labels updated successfully');
        } catch (error) {
            toast.error('Failed to update labels');
        }
    };

    return (
        <div>
            <h2>Task Label Management</h2>
            <div>
                <h3>Search Tasks by Labels</h3>
                <input
                    type="text"
                    placeholder="Enter labels (comma-separated)"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                />
                <button onClick={fetchTasksByLabels}>Search</button>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Update Labels for Task</h3>
                <input
                    type="text"
                    placeholder="Task ID"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Label Names (comma-separated)"
                    value={labelNames}
                    onChange={(e) => setLabelNames(e.target.value.split(','))}
                />
                <button onClick={updateTaskLabels}>Update Labels</button>
            </div>
        </div>
    );
};

export default TaskLabels;
