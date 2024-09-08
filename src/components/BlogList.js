import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          {blog.image && <img src={blog.image} alt={blog.title} />}
          <Link to={`/blogs/${blog._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
