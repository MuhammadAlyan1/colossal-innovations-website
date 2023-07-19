import React from 'react';
import CountUp from 'react-countup';
import './stats.css';

const Stats = () => {
  const COMPANY_START_YEAR = 2020;
  const EMPLOYEES_AMOUNT = 150;
  const CLIENTS_AMOUNT = 50;
  const SATISFACTION_PERCENTAGE = 96;
  const COUNT_ANIMATION_DURATION_SECONDS = 3;
  return (
    <section className="stats">
      <div className="counter">
        <p className="counter__amount">
          <CountUp
            enableScrollSpy={true}
            end={COMPANY_START_YEAR}
            duration={COUNT_ANIMATION_DURATION_SECONDS}
            start={1000}
            separator=""
          />
        </p>
        <p className="counter__title">Founded</p>
      </div>
      <div className="counter">
        <p className="counter__amount">
          <CountUp
            enableScrollSpy={true}
            end={EMPLOYEES_AMOUNT}
            duration={COUNT_ANIMATION_DURATION_SECONDS}
            start={0}
          />
          +
        </p>
        <p className="counter__title">Employees</p>
      </div>
      <div className="counter">
        <p className="counter__amount">
          <CountUp
            enableScrollSpy={true}
            end={CLIENTS_AMOUNT}
            duration={COUNT_ANIMATION_DURATION_SECONDS}
            start={0}
          />
          +
        </p>
        <p className="counter__title">Clients</p>
      </div>
      <div className="counter">
        <p className="counter__amount">
          <CountUp
            end={SATISFACTION_PERCENTAGE}
            duration={COUNT_ANIMATION_DURATION_SECONDS}
            start={0}
          />
          %
        </p>
        <p className="counter__title">Statisfaction rating</p>
      </div>
    </section>
  );
};

export default Stats;
