import React from 'react';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Article = ({ id, title, image, author, description }) => {
  const navigate = useNavigate();
  const [inView, setInView] = useState(false);
  const SHORT_DESCRIPTION_LENGTH = 200;
  function truncateText(text, maxTextLength = 200) {
    let shortText = '';
    if (text.length > maxTextLength) {
      shortText = text.slice(0, maxTextLength) + ' ...';
    } else {
      return text;
    }
    return shortText;
  }

  return (
    <InView
      as="article"
      className={`blog__article ${inView ? 'slide-in-fade' : 'hidden-left'}`}
      onChange={setInView}
      threshold={0.1}
      onClick={() => {
        navigate(`/blogs/${id}`);
        window.scrollTo(0, 0);
      }}
    >
      <div className="blog__image-container">
        <img className="blog__image" src={image} alt={title} />
      </div>
      <div className="blog__contents">
        <p className="blog__author ">By {author}</p>
        <h3 className="blog__title ">{title}</h3>
        <p className="blog__description">
          {truncateText(description, SHORT_DESCRIPTION_LENGTH)}
        </p>
      </div>
    </InView>
  );
};

export default Article;
