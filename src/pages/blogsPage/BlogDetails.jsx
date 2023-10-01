import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../markdown.css';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton
} from 'react-share';

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/loading';

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogID } = useParams();

  if (!blogID) {
    navigate('/404');
  }

  const URL = `${process.env.REACT_APP_BASE_URL}blogs/${blogID}`;
  const { isLoading, isError, data: blog } = useFetch(URL);
  console.log('PROJECT', blog);

  useEffect(() => {
    if (!blog) {
      navigate('/404');
    }
  }, [blogID, blog, navigate]);

  if (isLoading || isError) return <Loading />;

  if (blog.length === 0) return;

  return (
    <div className="markdown-component">
      <div className="markdown-component__image-container">
        <img
          className="markdown-component__image"
          src={blog.image}
          alt={blog.title}
        />
      </div>
      <ReactMarkdown
        className="markdown-body"
        children={blog.contents}
        remarkPlugins={[remarkGfm]}
      />
      {/* Share buttons */}
      <div className="share">
        <p className="share__title">Share on</p>
        <div className="share__buttons">
          <FacebookShareButton
            className="share__button"
            url={window.location.href}
            quote={blog.title}
            hashtag="ColossalInnovations"
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            className="share__button"
            url={window.location.href}
            title={blog.title}
            hashtags={['ColossalInnovations']}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            className="share__button"
            url={window.location.href}
            title={blog.title}
            summary={blog.description}
            source={window.location.origin}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton
            className="share__button"
            url={window.location.href}
            title={blog.title}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
