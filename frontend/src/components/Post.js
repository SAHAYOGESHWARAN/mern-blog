
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
      setTitle(response.data.title);
      setContent(response.data.content);
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/posts/${id}`, { title, content }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Post updated!');
    } catch (error) {
      console.error('Update error:', error.response.data.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Post deleted!');
    } catch (error) {
      console.error('Delete error:', error.response.data.message);
    }
  };

  return (
    <div>
      {post && (
        <form onSubmit={handleUpdate}>
          <h2>Edit Post</h2>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          <button type="submit">Update</button>
          <button type="button" onClick={handleDelete}>Delete</button>
        </form>
      )}
    </div>
  );
};

export default Post;
