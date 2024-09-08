import React, { useState } from 'react';
import axios from '../api/axios'; // Adjust the path as necessary

const BlogForm = ({ blog, onSubmit }) => {
  // State variables for form fields
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [description, setDescription] = useState(blog ? blog.description : '');
  const [content, setContent] = useState(blog ? blog.content : '');
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      if (blog) {
        // Update existing blog post
        await axios.put(`/blogs/${blog._id}`, formData);
      } else {
        // Create a new blog post
        await axios.post('/blogs', formData);
      }
      onSubmit(); // Callback to handle form submission success
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
