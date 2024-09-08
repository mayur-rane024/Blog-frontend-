import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const BookMarkList = () => {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

  // Fetch bookmarked blogs from backend
  useEffect(() => {
    const fetchBookmarkedBlogs = async () => {
      try {
        // Fetch bookmarked blogs; replace with your actual API endpoint
        const response = await axios.get('/bookmarked-blogs');
        setBookmarkedBlogs(response.data);
      } catch (error) {
        console.error('Error fetching bookmarked blogs:', error);
      }
    };

    fetchBookmarkedBlogs();
  }, []);

  return (
    <div>
      <h1>Bookmarked Blogs</h1>
      {bookmarkedBlogs.length === 0 ? (
        <p>No bookmarked blogs found.</p>
      ) : (
        <ul>
          {bookmarkedBlogs.map((blog) => (
            <li key={blog._id}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              {blog.image && <img src={blog.image} alt={blog.title} />}
              <Link to={`/blogs/${blog._id}`}>Read More</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookMarkList;
