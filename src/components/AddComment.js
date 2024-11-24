import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddComment.css'; // Import the CSS file

const AddComment = () => {
  const [id, setId] = useState('');
  const [comment, setComment] = useState({ text: '', author: '' });

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleAddComment = async () => {
    try {
      await axios.post(`http://localhost:8080/api/tasks/${id}/comments`, comment);
      alert('Comment added successfully!');
    } catch (err) {
      alert('Error adding comment: ' + err.message);
    }
  };

  return (
    <div className="add-comment-container">
      <h2>Add a Comment</h2>
      <div className="add-comment-form">
        <input
          placeholder="Task ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-input"
        />
        <input
          name="text"
          placeholder="Comment"
          value={comment.text}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="author"
          placeholder="Author"
          value={comment.author}
          onChange={handleChange}
          className="form-input"
        />
        <button onClick={handleAddComment} className="add-comment-button">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
