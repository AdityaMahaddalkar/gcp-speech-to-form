import React from "react";

import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function NotFoundComponent() {
  return (
    <div>
      <Jumbotron id="main-jumbotron">
        <h1>404 - Page Not Found</h1>
        <p>Seems like you took a wrong turn.</p>
        <Link to="/home">
          <Button>Go back to Home Page</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default NotFoundComponent;
