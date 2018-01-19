import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>
      404! - <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default NotFound;
