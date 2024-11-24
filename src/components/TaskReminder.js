// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ToastContainer , toast} from 'react-toastify';

// const TaskManagement = () => {
//     const [tasks, setTasks] = useState([]);
//     const [task, setTask] = useState({
//         title: '',
//         description: '',
//         priority: 'LOW',
//         assignee: '',
//         dueDate: '',
//     });

//     const fetchTasks = async () => {
//         try {
//             const response = await axios.get('/api/tasks');
//             setTasks(response.data);
//         } catch (error) {
//             toast.error('Failed to fetch tasks');
//         }
//     };

//     const createTask = async () => {
//         try {
//             const response = await axios.post('/api/tasks', task);
//             toast.success('Task created successfully');
//             fetchTasks();
//         } catch (error) {
//             toast.error('Failed to create task');
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     return (
//         <div>
//             <h2>Task Management</h2>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={task.title}
//                     onChange={(e) => setTask({ ...task, title: e.target.value })}
//                 />
//                 <textarea
//                     placeholder="Description"
//                     value={task.description}
//                     onChange={(e) => setTask({ ...task, description: e.target.value })}
//                 ></textarea>
//                 <button onClick={createTask}>Create Task</button>
//             </div>
//             <div>
//                 <h3>Tasks</h3>
//                 <ul>
//                     {tasks.map((task) => (
//                         <li key={task.id}>{task.title}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default TaskManagement;