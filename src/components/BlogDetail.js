import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import BlogForm from './BlogForm';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = () => setEditing(true);

  const handleDelete = async () => {
    try {
      await axios.delete(`/blogs/${id}`);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  if (editing) {
    return <BlogForm blog={blog} onSubmit={() => setEditing(false)} />;
  }

  return (
    <div>
      {blog && (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <div>{blog.content}</div>
          {blog.image && <img src={blog.image} alt={blog.title} />}
          <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
