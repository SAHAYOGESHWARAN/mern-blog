// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Post from './components/Post';
import Home from './components/Home'; // A new component to list all posts

const App = () => {
  return (
    <Router>
      <div className="App">
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
