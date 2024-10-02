
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/posts', { title, content }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Post created!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Create post error:', error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePost;
