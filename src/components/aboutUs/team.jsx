import React from 'react';
import './team.css';
import { teamMembers } from '../../data';
import { AiOutlineUserAdd } from 'react-icons/ai';
import TeamMember from './TeamMember';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { linkItems } from '../../data';
import { Link } from 'react-router-dom';

const Team = () => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="section"
      onChange={setInView}
      className={`team`}
      threshold="0.5"
    >
      <h2 className="section__main-title">Innovation Visionaries</h2>
      <div
        className={`team__members-container ${
          inView ? 'slide-in-fade' : 'hidden-left'
        }`}
      >
        {teamMembers.map((member) => {
          return <TeamMember key={member.name + member.title} {...member} />;
        })}
        <section className="team__join">
          <AiOutlineUserAdd className="team__join-icon" />
          <Link
            to={'/careers'}
            className="team__join-button"
            onClick={() => window.scrollTo(0, 0)}
          >
            Join now
          </Link>
        </section>
      </div>
    </InView>
  );
};

export default Team;
