import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import './blogs.css';
import Article from './Article';
import Loading from '../loading';

const Blogs = () => {
  const URL = `${process.env.REACT_APP_BASE_URL}blogs/`;
  const { isLoading, isError, data: blogs } = useFetch(URL);
  if (isLoading || isError) return <Loading />;

  return (
    <section id="blogs" className="blogs">
      <h2 className="section__main-title">Latest Articles</h2>
      <div className="blogs__articles-container">
        {blogs.map((blog) => {
          return <Article key={blog._id} {...blog} />;
        })}
      </div>
    </section>
  );
};

export default Blogs;
