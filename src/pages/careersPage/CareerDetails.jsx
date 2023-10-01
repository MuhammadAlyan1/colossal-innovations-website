import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CareerDetails.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
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
import CareerApplicationForm from './CareerApplicationForm';
import Loading from '../../components/loading';

const CareerDetails = () => {
  const navigate = useNavigate();
  const { careerID } = useParams();

  if (!careerID) {
    navigate('/404');
  }
  const URL = `${process.env.REACT_APP_BASE_URL}careers/${careerID}`;

  const { isLoading, isError, data: career } = useFetch(URL);

  useEffect(() => {
    if (!career) {
      navigate('/404');
    }
  }, [careerID, career, navigate]);

  if (isLoading || isError) return <Loading />;

  if (career.length === 0) return;

  return (
    <section className="detailed-career">
      <section className="markdown-component">
        <ReactMarkdown
          className="markdown-body"
          children={career.contents}
          remarkPlugins={[remarkGfm]}
        />
        {/* Share buttons */}
        <div className="share">
          <p className="share__title">Share on</p>
          <div className="share__buttons">
            <FacebookShareButton
              className="share__button"
              url={window.location.href}
              quote={career.title}
              hashtag="ColossalInnovations"
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="share__button"
              url={window.location.href}
              title={career.title}
              hashtags={['ColossalInnovations', [...career.tags]]}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton
              className="share__button"
              url={window.location.href}
              title={career.title}
              summary={career.description}
              source={window.location.origin}
            >
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton
              className="share__button"
              url={window.location.href}
              title={career.title}
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </section>
      <CareerApplicationForm careerID={careerID} />
    </section>
  );
};

export default CareerDetails;
