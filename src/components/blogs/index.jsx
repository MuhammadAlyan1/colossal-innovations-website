import React from 'react';
import { blogs } from '../../data';

import './blogs.css';
import Article from './Article';

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <h2 className="section__main-title">Latest Articles</h2>
      <div className="blogs__articles-container">
        {blogs.map((blog) => {
          return <Article key={blog.id} {...blog} />;
        })}
      </div>
    </section>
  );
};

export default Blogs;
