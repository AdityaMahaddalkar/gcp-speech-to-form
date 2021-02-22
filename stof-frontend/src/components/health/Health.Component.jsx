import React from "react";
import { Badge, Container } from "react-bootstrap";
import { getHealth } from "../../services/Health.Service";

function HealthComponent() {
  const [health, setHealth] = React.useState(null);

  React.useEffect(() => {
    getHealth(setHealth);
  });

  return (
    <div>
      <Container className="my-4">
        <h1>
          Health is
          <Badge variant="info">{health}</Badge>
        </h1>
      </Container>
    </div>
  );
}

export default HealthComponent;
