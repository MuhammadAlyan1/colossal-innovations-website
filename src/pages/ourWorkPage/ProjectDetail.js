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

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { projectID } = useParams();

  if (!projectID) {
    navigate('/404');
  }

  const URL = `${process.env.REACT_APP_BASE_URL}projects/${projectID}`;
  const { isLoading, isError, data: project } = useFetch(URL);

  useEffect(() => {
    if (!project) {
      navigate('/404');
    }
  }, [projectID, project, navigate]);

  if (isLoading || isError) return <Loading />;

  if (project.length === 0) return;

  return (
    <div className="markdown-component">
      <div className="markdown-component__image-container">
        <img
          className="markdown-component__image"
          src={project.image}
          alt={project.title}
        />
      </div>
      <ReactMarkdown
        className="markdown-body"
        children={project.contents}
        remarkPlugins={[remarkGfm]}
      />
      {/* Share buttons */}
      <div className="share">
        <p className="share__title">Share on</p>
        <div className="share__buttons">
          <FacebookShareButton
            className="share__button"
            url={window.location.href}
            quote={project.title}
            hashtag="ColossalInnovations"
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            className="share__button"
            url={window.location.href}
            title={project.title}
            hashtags={['ColossalInnovations']}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            className="share__button"
            url={window.location.href}
            title={project.title}
            summary={project.description}
            source={window.location.origin}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton
            className="share__button"
            url={window.location.href}
            title={project.title}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
