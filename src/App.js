import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import BookmarkList from './components/BookmarkList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => (
  <Router>
    <div className="container">
      <Routes>
        <Route path="/" exact component={BlogList} />
        <Route path="/blogs/:id" component={BlogDetail} />
        <Route path="/new" component={() => <BlogForm />} />
        <Route path="/bookmarks" component={BookmarkList} />
      </Routes>
    </div>
  </Router>
);

export default App;
