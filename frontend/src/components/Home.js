
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost'; // Import CreatePost component

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <CreatePost /> {/* Include CreatePost component */}
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <Link to={`/post/${post._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
