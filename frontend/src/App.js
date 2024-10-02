import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import EditPost from './components/EditPost';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/create">Create Post</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
