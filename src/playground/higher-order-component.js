//Higher order component (HOC) - A component that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

// [ component ] <-- higher order component
//     |
// [component]

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//Higher order component
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>{props.isAdmin ? "This is private info, please don't share" : 'Sorry, this info is only for admins'}</p>
      {props.isAdmin && <WrappedComponent {...props} />}
    </div>
  );
};

//requireAuthentication

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>Here's that private info you were asking for!</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>You must log in to view this content</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the info" />, document.getElementById('app'));
