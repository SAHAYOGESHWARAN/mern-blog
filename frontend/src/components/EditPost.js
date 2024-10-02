
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/posts/${id}`, post, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Post updated!');
      history.push('/'); // Redirect to home after update
    } catch (error) {
      console.error('Update post error:', error.response.data.message);
      alert('Error updating post: ' + error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPost;
