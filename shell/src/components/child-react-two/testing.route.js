/* Node Module */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const TestingRoute = () => {

  return (
    <>
      <Link to="/child-react-two">Child React 2</Link>

      <div>This is a local web component child page</div>
    </>
  );
}

export default TestingRoute;