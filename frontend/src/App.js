import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import './styles.css';


const App = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="App">
      <nav>
        <h1>Your App Name</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/create">Create Post</Link>
          <Link to="/post/edit/:id">Edit Post</Link> {/* Update to the dynamic ID when implemented */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
};

export default App;
