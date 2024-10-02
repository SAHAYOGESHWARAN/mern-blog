
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Post from './components/Post';
import Home from './components/Home';

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Reload the page to update the UI
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
