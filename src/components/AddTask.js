import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../css/AddTask.css'; // Import the CSS file

const AddTask = () => {
    const [taskData, setTaskData] = useState({
        id: '',
        title: '',
        description: '',
        priority: 'LOW',
        dueDate: '',
        assignee: '',
        assigneeEmail: '',
        creator: '',
        status: 'TODO',
        labels: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const labelsArray = taskData.labels
            ? taskData.labels.split(',').map((label) => label.trim())
            : [];

        const payload = {
            ...taskData,
            labels: labelsArray,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/tasks', payload);
            toast.success('Task added successfully!');
            console.log(response.data);
            toast.success("Task Added successfully")
        } catch (error) {
            console.error('Error adding task:', error);
            toast.error('Failed to add task');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <h2>Add Task</h2>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={taskData.id}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={taskData.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Description:
                <textarea
                    name="description"
                    value={taskData.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Priority:
                <select name="priority" value={taskData.priority} onChange={handleChange}>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
            </label>
            <label>
                Due Date:
                <input
                    type="datetime-local"
                    name="dueDate"
                    value={taskData.dueDate}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Assignee:
                <input
                    type="text"
                    name="assignee"
                    value={taskData.assignee}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Assignee Email:
                <input
                    type="email"
                    name="assigneeEmail"
                    value={taskData.assigneeEmail}
                    onChange={handleChange}
                />
            </label>
            <label>
                Creator:
                <input
                    type="text"
                    name="creator"
                    value={taskData.creator}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Status:
                <select name="status" value={taskData.status} onChange={handleChange}>
                    <option value="TODO">To Do</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                </select>
            </label>
            <label>
                Labels (comma-separated):
                <input
                    type="text"
                    name="labels"
                    value={taskData.labels}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
