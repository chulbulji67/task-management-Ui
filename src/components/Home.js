import React from 'react';
import { Link } from 'react-router-dom';

import TaskManagement from './TaskManagement';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.title}>Task Management</h1>
        <div style={styles.navLinks}>
        <Link to="/login">Login</Link>
          <Link to="/add-task">Add Task</Link>
          <Link to="/update-task">Update Task</Link>
          <Link to="/delete-task">Delete Task</Link>
          <Link to="/search-tasks">Search Tasks</Link>
          <Link to="/task-reminders">Reminders</Link>
          <Link to="/add-comment">Add Comment</Link>
        </div>
      </nav>
      <TaskManagement/>
      </div>

    //   {/* Task Sections */}
    //   <div style={styles.container}>
    //     <section id="addTask">
    //       <h2>Add Task</h2>
    //       <AddTask />
    //     </section>

    //     <section id="updateTask">
    //       <h2>Update Task</h2>
    //       <UpdateTask />
    //     </section>

    //     <section id="deleteTask">
    //       <h2>Delete Task</h2>
    //       <DeleteTask />
    //     </section>

    //     <section id="searchTask">
    //       <h2>Search Tasks</h2>
    //       <SearchTask />
    //       <h3>Search by Label</h3>
    //       <SearchByLabel />
    //     </section>

    //     <section id="taskReminder">
    //       <h2>Task Reminders</h2>
    //       <TaskReminder />
    //     </section>

    //     <section id="addComment">
    //       <h2>Add Comment</h2>
    //       <AddComment />
    //     </section>
    //   </div>
    // </div>
  );
};

// Styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  title: {
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  container: {
    padding: '20px',
    marginTop: '10px',
  },
  section: {
    marginBottom: '40px',
  },
};

export default Home;
