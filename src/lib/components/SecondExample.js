import React from 'react';
import './SecondExample.scss';

const SecondExample = () => (
  <div className="SecondExample">
    <p className="SecondExample-text">
      Based on Facebook's {'\u00A0'}
      <a
        className="SecondExample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/facebookincubator/create-react-app"
      >
        Create react app
      </a>
    </p>
    <a
      className="SecondExample-github-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/chopdgd/react-genomix"
    >
      Documentation
    </a>
  </div>
);

export default SecondExample;
