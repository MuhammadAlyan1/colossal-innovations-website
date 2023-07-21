import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from '../../data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './BlogDetails.css';

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogID } = useParams();

  useEffect(() => {
    if (!blog) {
      navigate('/404');
    }
  }, [blogID]);

  const blog = blogs.find((blog) => parseInt(blogID) === blog.id);

  if (!blog) {
    return null;
  }

  return (
    <div className="blog__content">
      <img className="blog__image" src={blog.image} />
      <ReactMarkdown children={blog.content} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default BlogDetails;
