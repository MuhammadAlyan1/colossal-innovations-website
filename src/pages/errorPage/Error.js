import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <section className="errorPage">
      <h2 className="section__main-title">404 Page Not Found</h2>
      <p className="errorPage__description">
        We regret to inform you that the page you are attempting to access
        cannot be found. It appears that the link you followed may be outdated,
        or the page might have been removed or relocated. To navigate back to
        the heart of our website, please click on the button below.
      </p>
      <Link to="/" className="button errorPage__link-button">
        BACK TO HOME
      </Link>
      <p className="errorPage__assistance">
        If you need further assistance or have any questions, please do not
        hesitate to contact our support team at{' '}
        <a
          className="errorPage__email"
          href="mailto:info@colossalinnovationsco.com"
        >
          info@colossalinnovationsco.com
        </a>
        . We are here to provide you with any necessary guidance.
      </p>
    </section>
  );
};
export default Error;
